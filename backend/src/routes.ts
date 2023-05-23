import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import uploadConfig from "./config/multer";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";

// Instanciando a constante router como do tipo Router
const router = Router();
const upload = multer(uploadConfig.upload("./temp"));

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

//-----------ROTAS PARA PRODUCT-----------//
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);

router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

//-----------ROTAS PARA ORDER-----------//
router.post("/order", isAuthenticated, new CreateOrderController().handle);

router.delete(
  "/deleteorder",
  isAuthenticated,
  new RemoveOrderController().handle
);

router.post("/order/add", isAuthenticated, new AddItemController().handle);
// Exportação da constante router para acesso de outros arquivos
export { router };

// // Criação de rota simples para a chamada de /teste que retorna um dado
// router.get("/teste", (req: Request, res: Response) => {
//   // throw new Error("Erro ao fazer requisição");
//   return res.json({ nome: "João" });
// });
