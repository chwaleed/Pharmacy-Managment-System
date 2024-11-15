import { Router } from "express";
import {
  createSupplier,
  deleteSupplier,
  getSuppliers,
} from "../controllers/supplierController.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/productController.js";

const routes = Router();

routes.post("/create-product", createProduct);
routes.get("/get-all-products", getAllProducts);
routes.get("/get-product", getProduct);
routes.delete("/delete-product", deleteProduct);
routes.put("/update-product", updateProduct);
routes.post("/create-supplier", createSupplier);
routes.get("/get-all-suppliers", getSuppliers);
routes.delete("/delete-supplier", deleteSupplier);

export default routes;
