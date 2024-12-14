/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TableCom from "@/components/table";
import { useAppContext } from "@/context/Context";
import AddCustomerDialog from "@/components/Dialog/CustomerDialog";
import { Edit } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const head = ["Customer Name", "Contact", "Address", "Credit"];

function Customers() {
  const { customers, serach } = useAppContext();

  const [serachedCustomers, setSerachedCustomers] = useState([]);
  const [text, setText] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    if (customers) {
      if (text === "") {
        setSerachedCustomers(customers);
      } else {
        setSerachedCustomers(serach(text.trim(""), customers));
      }
    }
  }, [customers, serach, text]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const editMedicineButton = () => (
    <Button className="bg-blue-600 hover:bg-blue-700">
      <Edit />
    </Button>
  );

  return (
    <div className="w-screen h-screen bg-[#F9F9FA] relative  px-[5%] pt-[5%]">
      <div className="w-full  flex justify-between">
        <h1 className="text-[2rem]">Customers</h1>
        <AddCustomerDialog addButton={AddSupplierButton} />
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
      {serachedCustomers.length > 0 ? (
        <TableCom
          button={editMedicineButton}
          data={serachedCustomers}
          head={head}
          relation={"customers"}
        />
      ) : (
        <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] text-gray-500 opacity-30 font-bold text-[4rem]">
          NO Customer Found
        </h1>
      )}
    </div>
  );
}

export default Customers;
const AddSupplierButton = (
  <Button className="bg-green-600 hover:bg-green-700 py-6 text-[1.1rem]">
    <span className="text-[1.8rem] mb-1 mr-2 font-bold">+</span> Add New
  </Button>
);
