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
import { useForm } from "react-hook-form";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import axios from "axios";
import { useAppContext } from "@/context/Context";

function AddSupplierDialog({ data, addButton }) {
  const createSupplierUrl = "http://localhost:4001/api/create-supplier";
  const updateSupplierUrl = "http://localhost:4001/api/update-supplier";
  const [activeFieldIndex, setActiveFieldIndex] = useState(0);
  const { setSuppliers } = useAppContext();
  const form = useForm({
    defaultValues: {
      _id: data?._id || null,
      name: data?.name || "",
      phone_number: data?.phone_number || "",
      address: data?.address || "",
    },
  });
  const onSubmit = async (data) => {
    if (data._id) {
      try {
        (async () => {
          await axios
            .post(updateSupplierUrl, data)
            .then((res) =>
              setSuppliers((prev) =>
                prev.map((item) =>
                  item._id === res.data.data._id ? res.data.data : item
                )
              )
            );
        })();
      } catch (error) {
        console.log("Error in Updating Supplier " + error);
      }
      form.reset();
    } else {
      try {
        (async () => {
          await axios
            .post(createSupplierUrl, data)
            .then((res) => setSuppliers((prev) => [...prev, res.data.data]));
        })();
      } catch (error) {
        console.log("Error in creating Supplier " + error);
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
          <DialogTitle>Add Supplier</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            onKeyDown={handleKeyDown}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4">
              {/* Supplier Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Supplier Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Phone Number */}
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Address */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogClose asChild>
              <div className="mt-6 flex justify-end">
                <Button type="submit">Add Supplier</Button>
              </div>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddSupplierDialog;
