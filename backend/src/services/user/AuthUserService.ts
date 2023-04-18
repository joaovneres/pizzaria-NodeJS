import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest {
  email: string;
  senha: string;
}

class AuthUserService {
  async execute({ email, senha }: AuthRequest) {
    // Verifica se o e-mail está cadastrado
    const user = await prismaClient.usuario.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("Email não cadastrado!");
    }

    // Verificar se a senha está correta
    const senhaMatch = await compare(senha, user.senha);

    if (!senhaMatch) {
      throw new Error("Senha incorreta!");
    }
    console.log(email);
    return { ok: true };
  }
}

export { AuthUserService };
