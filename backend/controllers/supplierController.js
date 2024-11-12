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

export const getSupplier = async (request, response) => {
  try {
    const { id } = request.body;
    if (!id) {
      return response.status(400).json({ message: "Supplier ID is required" });
    }

    const supplier = await Supplier.findById(id);

    if (!supplier) {
      return response.status(404).json({ message: "Supplier not found" });
    }

    return response.status(200).json({ data: supplier });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};
