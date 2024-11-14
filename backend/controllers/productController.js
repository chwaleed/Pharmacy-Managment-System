import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const createProduct = async (request, response) => {
  try {
    const {
      name,
      generic_name,
      type,
      batch_number,
      expiry_date,
      company,
      total_price,
      cost_price,
      quantity,
      supplier,
    } = request.body;

    if (
      !name ||
      !type ||
      !batch_number ||
      !total_price ||
      quantity == null ||
      quantity === undefined ||
      quantity < 0 ||
      !cost_price ||
      !supplier
    ) {
      return response
        .status(400)
        .json({ message: "Complete Required Fields!" });
    }

    const supplierObjectId = new mongoose.Types.ObjectId(supplier);

    const product = await Product.create({
      name,
      generic_name,
      type,
      batch_number,
      expiry_date,
      company,
      total_price,
      cost_price,
      quantity,
      supplier: supplierObjectId,
    });
    return response
      .status(201)
      .json({ data: product, message: "Product Created Successfully" });
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
};

export const getProduct = async (request, response) => {
  try {
    const { id } = request.body;
    if (!id) {
      return response.status(400).json({ message: "Product ID is required" });
    }

    const product = await Product.findById(id).populate("supplier");

    if (!product) {
      return response.status(404).json({ message: "Product not found" });
    }

    return response.status(200).json({ data: product });
  } catch (error) {
    response.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("supplier", "name");
    if (!products) {
      return res.status(404).json({ message: "No Product found." });
    }
    return res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
