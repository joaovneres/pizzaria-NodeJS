import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
// Instanciando a constante router como do tipo Router
const router = Router();

//-----------ROTAS PARA USER-----------//
router.post("/user", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/userInfo", isAuthenticated, new DetailUserController().handle);

//-----------ROTAS PARA CATEGORY-----------//
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/categories", isAuthenticated, new ListCategoryController().handle);

// Exportação da constante router para acesso de outros arquivos
export { router };

// // Criação de rota simples para a chamada de /teste que retorna um dado
// router.get("/teste", (req: Request, res: Response) => {
//   // throw new Error("Erro ao fazer requisição");
//   return res.json({ nome: "João" });
// });
