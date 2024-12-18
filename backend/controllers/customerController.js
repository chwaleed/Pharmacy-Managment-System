import Customer from "../models/customer.model.js";
import Supplier from "../models/customer.model.js";

export const createCustomer = async (request, response) => {
  try {
    const { name, phone_number, address, credit } = request.body;
    if (!name || !phone_number) {
      return response
        .status(400)
        .json({ message: "Name and Phone Number is required" });
    }
    const customer = await Supplier.create({
      name,
      phone_number,
      address,
      credit,
    });
    return response
      .status(201)
      .json({ data: customer, message: "Customer Created Successfuly" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customer = await Supplier.find();
    if (!customer) {
      return response.status(404).json({ message: "No customer Found" });
    }
    return res.status(200).json({ data: customer });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const { _id, name, phone_number, address, credit } = req.body;

    const customer = await Customer.findByIdAndUpdate(
      _id,
      {
        $set: {
          name,
          phone_number,
          address,
          credit,
        },
      },
      { new: true }
    );

    return res.status(200).json({ data: customer });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const { _id } = req.body;
    await Supplier.findByIdAndDelete(_id);
    return res.status(200).json({ message: "Customer has been deleted." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
