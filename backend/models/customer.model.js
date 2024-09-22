import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    phone_number: { type: String, required: true },
    address: { type: String },
    credit: { type: Number },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
