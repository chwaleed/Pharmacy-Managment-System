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

    const populatedProduct = await Product.findById(product._id).populate(
      "supplier",
      "name"
    );

    return response.status(201).json({
      data: populatedProduct,
      message: "Product Created Successfully",
    });
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
    const products = await Product.find().populate("supplier");
    if (!products) {
      return res.status(404).json({ message: "No Product found." });
    }

    // console.log(products);
    return res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { _id } = req.body;
    const response = await Product.findByIdAndDelete(_id);
    return res.status(200).json({ message: "Product has been deleted." });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateProduct = async (request, response) => {
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
      _id,
    } = request.body;
    console.log("here are the products");

    if (
      !name ||
      !type ||
      !batch_number ||
      !total_price ||
      quantity == null ||
      quantity === undefined ||
      quantity < 0 ||
      !cost_price
    ) {
      return response
        .status(400)
        .json({ message: "Complete Required Fields!" });
    }
    // if (supplier) {
    //   const supplierObjectId = new mongoose.Types.ObjectId(supplier);
    // }

    // console.log(name);

    const updateFields = await Product.findByIdAndUpdate(
      _id,
      {
        $set: {
          name,
          generic_name,
          type,
          batch_number,
          expiry_date,
          company,
          total_price,
          cost_price,
          quantity,
        },
      },
      { new: true }
    );

    if (supplier) {
      const supplierObjectId = new mongoose.Types.ObjectId(supplier);
      updateFields.supplier = supplierObjectId; // Only set supplier if provided
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      _id,
      {
        $set: updateFields, // Use the updateFields object
      },
      { new: true }
    );

    const populatedProduct = await Product.findById(
      updatedProduct._id
    ).populate("supplier", "name");

    return response.status(201).json({
      data: populatedProduct,
      message: "Product Created Successfully",
    });
  } catch (error) {
    response
      .status(500)
      .json({ error: `Internal Server Error ${error.message}` });
  }
};
