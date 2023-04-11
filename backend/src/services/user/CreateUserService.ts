import prismaClient from "../../prisma";

interface UserRequest {
  nome: string;
  email: string;
  senha: string;
}

class CreateUserService {
  async execute({ nome, email, senha }: UserRequest) {
    // Verificar se foi enviado o valor do e-mail
    if (!email) {
      throw new Error("E-mail não enviado!");
    }

    // Verifica se o email já foi cadastrado
    const UserAlreadyExists = await prismaClient.usuario.findFirst({
      where: {
        email: email,
      },
    });

    if (UserAlreadyExists) {
      throw new Error("E-mail já cadastrado!");
    }

    // Cadastro no banco de dados
    const user = await prismaClient.usuario.create({
      data: {
        nome: nome,
        email: email,
        senha: senha,
      },
    });

    return { usuario: nome };
  }
}

export { CreateUserService };
