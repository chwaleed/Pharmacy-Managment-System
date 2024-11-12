import { Router } from "express";
import {
  createSupplier,
  getSuppliers,
} from "../controllers/supplierController.js";
import {
  createProduct,
  getAllProducts,
  getProduct,
} from "../controllers/productController.js";

const routes = Router();

routes.post("/create-supplier", createSupplier);

routes.post("/create-product", createProduct);
routes.get("/get-all-products", getAllProducts);
routes.get("/get-product", getProduct);
routes.get("/get-all-suppliers", getSuppliers);

export default routes;
