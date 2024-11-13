import { Router } from "express";
import {
  createSupplier,
  deleteSupplier,
  getSuppliers,
} from "../controllers/supplierController.js";
import {
  createProduct,
  getAllProducts,
  getProduct,
} from "../controllers/productController.js";

const routes = Router();

routes.post("/create-product", createProduct);
routes.get("/get-all-products", getAllProducts);
routes.get("/get-product", getProduct);
routes.post("/create-supplier", createSupplier);
routes.get("/get-all-suppliers", getSuppliers);
routes.delete("/delete-supplier", deleteSupplier);

export default routes;
