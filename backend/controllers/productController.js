import Product from "../models/product.model.js";

export const createProduct = async (request, response) => {
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
};
