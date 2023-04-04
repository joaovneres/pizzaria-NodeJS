// Importações
import express, { Request, Response, NextFunction, Router } from "express";
import "express-async-errors"; // Tratamento de erros do servidor
import { router } from "./routes";

// A aplicação será executada pelo servidor express
const app = express();

// Passando para o servidor que a comunicação de Request será através de JSON
app.use(express.json());

// Definindo que a aplicação utilizará as rotas fornecidas no arquivo routes.ts
app.use(router);

// A aplicação rodará na porta 3333
app.listen(3333, () => console.log("Servidor ON"));
