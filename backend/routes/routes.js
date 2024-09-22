import { Router } from "express";
import { createSupplier } from "../controllers/supplierController.js";

const routes = Router();

routes.post("/supplier", createSupplier);

export default routes;
