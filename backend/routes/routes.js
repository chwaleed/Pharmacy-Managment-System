import { Router } from "express";
import {
  createSupplier,
  deleteSupplier,
  getSuppliers,
  updateSupplier,
} from "../controllers/supplierController.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/productController.js";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  updateCustomer,
} from "../controllers/customerController.js";
import { stockReport } from "../controllers/dashboardController.js";

const routes = Router();

routes.post("/create-product", createProduct);
routes.get("/get-all-products", getAllProducts);
routes.get("/get-product", getProduct);
routes.delete("/delete-product", deleteProduct);
routes.patch("/update-product", updateProduct);

routes.post("/create-supplier", createSupplier);
routes.get("/get-all-suppliers", getSuppliers);
routes.delete("/delete-supplier", deleteSupplier);
routes.post("/update-supplier", updateSupplier);

routes.post("/create-customer", createCustomer);
routes.get("/get-all-customers", getCustomers);
routes.post("/update-customer", updateCustomer);
routes.delete("/delete-customer", deleteCustomer);

routes.get("/stock-report", stockReport);
export default routes;
