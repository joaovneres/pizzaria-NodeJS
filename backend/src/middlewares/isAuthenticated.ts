import { Request, Response, NextFunction } from "express";

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // armazena o token enviado na requisição
  const authToken = req.headers.authorization;

  // verifica se o usuário enviou um token na requisição
  if (!authToken) {
    return res.status(401).end();
  }

  console.log(authToken);
}
