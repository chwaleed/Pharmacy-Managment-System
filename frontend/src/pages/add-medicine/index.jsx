/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import TableCom from "@/components/table";
import AddProductDialog from "@/components/Dialog/Dialog";
import { useEffect, useState } from "react";
import axios from "axios";

const invoices = [
  {
    productName: "Product 1",
    genericName: "Generic 1",
    type: "Type 1",
    batchNumber: "Batch 1",
    expiryDate: "Expiry 1",
    company: "Company 1",
    totalPrice: "Total 1",
    costPrice: "Cost 1",
    quantity: "Quantity 1",
    supplier: "Supplier 1",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const head = [
  "Product Name",
  "Batch No",
  "Supplier",
  "Company",
  "Price",
  "Quantity",
];

function AddMedicine() {
  const getAllProductsURL = "http://localhost:4001/api/get-all-products";
  const onSubmit = async () => {};
  const [Products, setProducts] = useState();
  console.log(Products);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(getAllProductsURL);
        setProducts(response.data.data);
      } catch (error) {
        console.log("Error in fetching Data", error);
      }
    })();
  }, []);

  return (
    <div className="w-screen h-screen bg-[#F9F9FA] relative  px-[5%] pt-[5%]">
      <div className="w-full  flex justify-between">
        <h1 className="text-[2rem]">Medicine</h1>
        <AddProductDialog addButton={AddMedicineButton} />
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
      {Products ? (
        <TableCom data={Products} head={head} relation={"products"} />
      ) : (
        <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] text-gray-500 opacity-30 font-bold text-[4rem]">
          {" "}
          NO Product Found
        </h1>
      )}
      <div>
        <Pagination className="mt-5">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive={true}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default AddMedicine;
const AddMedicineButton = (
  <Button className="bg-green-600 hover:bg-green-700 py-6 text-[1.1rem]">
    <span className="text-[1.8rem] mb-1 mr-2 font-bold">+</span> Add New
  </Button>
);
