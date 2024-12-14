/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import TableCom from "@/components/table";
import AddProductDialog from "@/components/Dialog/Dialog";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useAppContext } from "@/context/Context";

const head = [
  "Product Name",
  "Batch No",
  "Supplier",
  "Company",
  "Price",
  "Quantity",
];

function AddMedicine() {
  // const onSubmit = async () => {};
  const { products, serach } = useAppContext();
  const [serachedProducts, setSearchedProducts] = useState([]);
  const [text, setText] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    if (products) {
      if (text === "") {
        setSearchedProducts(products); // Reset to all products when search text is empty
      } else {
        setSearchedProducts(serach(text.trim(""), products)); // Filter based on the original products
      }
    }
  }, [products, serach, text]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className="w-screen h-screen bg-[#F9F9FA] relative  px-[5%] pt-[5%]">
      <div className="w-full  flex justify-between">
        <h1 className="text-[2rem]">Medicine</h1>
        <AddProductDialog addButton={AddMedicineButton} />
      </div>
      <div className="flex mt-5 justify-between">
        <span className="flex justify-center items-center gap-2">
          Search:
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            ref={ref}
            className="text-[1.1rem]"
            type="text"
          />
        </span>
      </div>
      {serachedProducts.length ? (
        <TableCom data={serachedProducts} head={head} relation={"products"} />
      ) : (
        <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] text-gray-500 opacity-30 font-bold text-[4rem]">
          {" "}
          NO Product Found
        </h1>
      )}
    </div>
  );
}

export default AddMedicine;
const AddMedicineButton = (
  <Button className="bg-green-600 hover:bg-green-700 py-6 text-[1.1rem]">
    <span className="text-[1.8rem] mb-1 mr-2 font-bold">+</span> Add New
  </Button>
);
