import Supplier from "../models/supplier.model.js";

export const createSupplier = async (request, response) => {
  try {
    const { name, phone_number, address } = request.body;
    console.log(name);
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
