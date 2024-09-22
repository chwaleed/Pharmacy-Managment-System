import mongoose from "mongoose";

const salesSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    sale_date: { type: Date, required: true },
    total_amount: { type: Number, required: true },
  },
  { timestamps: true }
);

const Sales = mongoose.model("Sales", salesSchema);

export default Sales;
