import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    generic_name: { type: String, required: true },
    type: { type: String, required: true },
    batch_number: { type: String },
    expiry_date: { type: Date },
    company: { type: String },
    total_price: { type: Number, required: true },
    cost_price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
