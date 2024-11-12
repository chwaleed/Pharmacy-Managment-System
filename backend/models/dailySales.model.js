import mongoose from "mongoose";

const dailySalesSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    total_sales: { type: Number, required: true },
    total_profit: { type: Number, required: true },
    total_loss: { type: Number, required: true },
  },
  { timestamps: true }
);

const DailySales = mongoose.model("DailySales", dailySalesSchema);

export default DailySales;
