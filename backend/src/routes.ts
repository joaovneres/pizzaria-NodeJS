import { Router, Request, Response, response } from "express";

// Instanciando a constante router como do tipo Router
const router = Router();

// Criação de rota simples para a chamada de /teste que retorna um dado
router.get("/teste", (req: Request, res: Response) => {
  // throw new Error("Erro ao fazer requisição");
  return res.json({ nome: "João" });
});

// Exportação da constante router para acesso de outros arquivos
export { router };
