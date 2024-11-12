/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TableCom from "@/components/table";
import { useEffect, useState } from "react";
import axios from "axios";
import AddSupplierDialog from "@/components/Dialog/SupplierDialog";

const suppliers = [
  {
    supplierName: "Supplier 1",
    contactName: "Contact 1",
    address: "Address 1",
    phone: "Phone 1",
    email: "Email 1",
  },
  // Add more supplier data as needed
];

const head = ["Supplier Name", "Contact Name", "Address"];

function AddSupplier() {
  const getAllSuppliersURL = "http://localhost:4001/api/get-all-suppliers";
  const onSubmit = async () => {};
  const [Suppliers, setSuppliers] = useState();
  console.log(Suppliers);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(getAllSuppliersURL);
        setSuppliers(response.data.data);
      } catch (error) {
        console.log("Error in fetching Data", error);
      }
    })();
  }, []);

  return (
    <div className="w-screen h-screen bg-[#F9F9FA] relative  px-[5%] pt-[5%]">
      <div className="w-full  flex justify-between">
        <h1 className="text-[2rem]">Suppliers</h1>
        <AddSupplierDialog addButton={AddSupplierButton} />
      </div>
      <div className="flex mt-5 justify-between">
        <select
          defaultValue={10}
          name="items_count"
          className="border px-3  "
          id="itemsCount"
        >
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <span className="flex justify-center items-center gap-2">
          Search: <Input className="text-[1.1rem]" type="text" />
        </span>
      </div>
      {Suppliers ? (
        <TableCom data={Suppliers} head={head} relation={"suppliers"} />
      ) : (
        <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] text-gray-500 opacity-30 font-bold text-[4rem]">
          {" "}
          NO Supplier Found
        </h1>
      )}
    </div>
  );
}

export default AddSupplier;
const AddSupplierButton = (
  <Button className="bg-green-600 hover:bg-green-700 py-6 text-[1.1rem]">
    <span className="text-[1.8rem] mb-1 mr-2 font-bold">+</span> Add New
  </Button>
);
