import { Router } from "express";
import { createSupplier } from "../controllers/supplierController.js";
import { createProduct, getProduct } from "../controllers/productController.js";

const routes = Router();

routes.post("/supplier", createSupplier);

routes.post("/product", createProduct);
routes.get("/get-product", getProduct);

export default routes;
