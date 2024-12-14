/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TableCom from "@/components/table";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import AddSupplierDialog from "@/components/Dialog/SupplierDialog";
import { useAppContext } from "@/context/Context";

const head = ["Supplier Name", "Contact Name", "Address"];

function AddSupplier() {
  const { suppliers, serach } = useAppContext();
  const [serachedSuppliers, setSerachedSuppliers] = useState([]);
  const [text, setText] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    if (suppliers) {
      if (text === "") {
        setSerachedSuppliers(suppliers);
      } else {
        setSerachedSuppliers(serach(text.trim(""), suppliers));
      }
    }
  }, [suppliers, serach, text]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className="w-screen h-screen bg-[#F9F9FA] relative  px-[5%] pt-[5%]">
      <div className="w-full  flex justify-between">
        <h1 className="text-[2rem]">Suppliers</h1>
        <AddSupplierDialog addButton={AddSupplierButton} />
      </div>
      <div className="flex mt-5 justify-between">
        <span className="flex mt-4 justify-center items-center gap-2">
          Search:{" "}
          <Input
            ref={ref}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="text-[1.1rem]"
            type="text"
          />
        </span>
      </div>
      {serachedSuppliers.length > 0 ? (
        <TableCom data={serachedSuppliers} head={head} relation={"suppliers"} />
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
