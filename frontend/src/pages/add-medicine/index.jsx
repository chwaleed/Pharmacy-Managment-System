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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit } from "lucide-react";
import { X } from "lucide-react";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
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
];

function AddMedicine() {
  const form = useForm();

  const onSubmit = async () => {};

  return (
    <div className="w-screen bg-[#F9F9FA]  px-[5%] pt-[6%]">
      <div className="w-full  flex justify-between">
        <h1 className="text-[2rem]">Medicine</h1>
        <Button className="bg-green-600 hover:bg-green-700 py-6 text-[1.1rem]">
          <span className="text-[1.8rem] mb-1 mr-2 font-bold">+</span> Add New
        </Button>
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
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead>Batch No</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Bloach Enterprise</TableCell>
                <TableCell className="">$250.00</TableCell>
                <TableCell>40</TableCell>
                <TableCell className="flex gap-4">
                  <span>
                    <Edit />
                  </span>
                  <span>
                    <X />
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default AddMedicine;
