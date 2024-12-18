import Product from "../models/product.model.js";

export const stockReport = async (request, response) => {
  //   const product = Product.find({ quantity: { $ltn: 10 } });
  try {
    const products = await Product.find({ quantity: { $lt: 10 } });
    console.log(products);
    response
      .status(200)
      .json({ message: "Record Found Success Fully", data: products });
  } catch (error) {
    response
      .status(500)
      .json({ error: `Internal Server Error ${error.message}` });
  }
};
