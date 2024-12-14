import Supplier from "../models/supplier.model.js";

export const createSupplier = async (request, response) => {
  try {
    const { name, phone_number, address } = request.body;
    if (!name || !phone_number) {
      return response
        .status(400)
        .json({ message: "Name and Phone Number is required" });
    }
    const supplier = await Supplier.create({
      name,
      phone_number,
      address,
    });
    return response
      .status(201)
      .json({ data: supplier, message: "Supplier Created Successfuly" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

export const getSuppliers = async (req, res) => {
  try {
    const supplier = await Supplier.find();
    if (!supplier) {
      return response.status(404).json({ message: "No Suppplier Found" });
    }
    return res.status(200).json({ data: supplier });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateSupplier = async (req, res) => {
  try {
    const { _id, name, phone_number, address } = req.body;

    const supplier = await Supplier.findByIdAndUpdate(
      _id,
      {
        $set: {
          name,
          phone_number,
          address,
        },
      },
      { new: true }
    );

    return res.status(200).json({ data: supplier });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteSupplier = async (req, res) => {
  try {
    const { _id } = req.body;
    const response = await Supplier.findByIdAndDelete(_id);
    return res.status(200).json({ message: "Supplier has been deleted." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
