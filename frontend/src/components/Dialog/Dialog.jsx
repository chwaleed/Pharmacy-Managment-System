/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import axios from "axios";
import { useAppContext } from "@/context/Context";
import SupplierSelect from "../Combobox";

function AddProductDialog({ data, addButton }) {
  const createProductUrl = "http://localhost:4001/api/create-product";
  const updateProductUrl = "http://localhost:4001/api/update-product";
  const [activeFieldIndex, setActiveFieldIndex] = useState(0);
  const { setProducts, suppliers } = useAppContext();
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      _id: data?._id || "",
      name: data?.name || "",
      generic_name: data?.generic_name || "",
      type: data?.type || "",
      batch_number: data?.batch_number || "",
      expiry_date: data?.expiry_date || "",
      company: data?.company || "",
      total_price: data?.total_price || "",
      cost_price: data?.cost_price || "",
      quantity: data?.quantity || 0,
    },
  });
  // console.log(data);
  const onSubmit = async (data) => {
    if (data._id) {
      try {
        await axios
          .patch(updateProductUrl, {
            ...data,
            type: data.type,
            supplier: data.supplier,
          })
          .then((res) => {
            setProducts((prev) =>
              prev.map((product) =>
                product._id === res.data.data._id ? res.data.data : product
              )
            );
          });
      } catch (error) {
        console.log("Error in updating Proudct");
      }
      form.reset();
    } else {
      try {
        await axios
          .post(createProductUrl, {
            ...data,
            type: data.type,
            supplier: data.supplier,
          })
          .then((res) => setProducts((prev) => [...prev, res.data.data]));
      } catch (error) {
        console.log("Error in creating Product " + error);
      }
      form.reset();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const formFields = e.currentTarget.querySelectorAll(
        "input, select, textarea"
      );
      const nextIndex = (activeFieldIndex + 1) % formFields.length;
      formFields[nextIndex].focus();
      setActiveFieldIndex(nextIndex);
    }
  };

  return (
    <Dialog className="w-[60vw]">
      <DialogTrigger asChild>{addButton}</DialogTrigger>
      <DialogContent className="p-8">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            onKeyDown={handleKeyDown}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Grid container */}
              {/* Product Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Generic Name */}
              <FormField
                control={form.control}
                name="generic_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Generic Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Formula / Generic Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Type */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value || data?.type}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Tab">Tab</SelectItem>
                        <SelectItem value="Inj">Injection</SelectItem>
                        <SelectItem value="Sache">Sache</SelectItem>
                        <SelectItem value="Syrup">Syrup</SelectItem>
                        <SelectItem value="Lotion">Lotion</SelectItem>
                        <SelectItem value="Cream">Cream</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Batch Number */}
              <FormField
                control={form.control}
                name="batch_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Batch Number</FormLabel>
                    <FormControl>
                      <Input
                        className=" uppercase"
                        placeholder="Batch Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Expiry Date */}
              <FormField
                control={form.control}
                name="expiry_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Company */}
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Total Price */}
              <FormField
                control={form.control}
                name="total_price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Price</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Total Price"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Cost Price */}
              <FormField
                control={form.control}
                name="cost_price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cost Price</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Cost Price"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Quantity */}
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input placeholder="Quantity" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Supplier */}
              <FormField
                control={form.control}
                name="supplier"
                render={({ field }) => (
                  <SupplierSelect
                    suppliers={suppliers}
                    open={open}
                    setOpen={setOpen}
                    field={field}
                  />
                )}
              />
            </div>
            <DialogClose asChild>
              <div className="mt-6 flex justify-end">
                <Button type="submit">Add Product</Button>
              </div>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddProductDialog;
