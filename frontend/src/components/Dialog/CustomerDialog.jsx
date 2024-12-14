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

function AddCustomerDialog({ data, addButton }) {
  const createCustomerUrl = "http://localhost:4001/api/create-customer";
  const updateCustomerUrl = "http://localhost:4001/api/update-customer";
  const [activeFieldIndex, setActiveFieldIndex] = useState(0);
  const { setCustomers } = useAppContext();
  const form = useForm({
    defaultValues: {
      _id: data?._id,
      name: data?.name || "",
      phone_number: data?.phone_number || "",
      address: data?.address || "",
      credit: data?.credit || 0,
    },
  });
  const onSubmit = async (data) => {
    if (data._id) {
      try {
        await axios.post(updateCustomerUrl, data).then((res) => {
          setCustomers((prev) =>
            prev.map((customer) =>
              customer._id === res.data.data._id ? res?.data.data : customer
            )
          );
        });
      } catch (error) {
        console.log("Error in updating Customer " + error);
      }
      form.reset();
    } else {
      try {
        (async () => {
          await axios
            .post(createCustomerUrl, data)
            .then((res) => setCustomers((prev) => [...prev, res.data.data]));
        })();
      } catch (error) {
        console.log("Error in creating Customer " + error);
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
          <DialogTitle>Add Customer</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            onKeyDown={handleKeyDown}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4">
              {/* Customer Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Name</FormLabel>
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
              <FormField
                control={form.control}
                name="credit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Crdit</FormLabel>
                    <FormControl>
                      <Input placeholder="Credit" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogClose asChild>
              <div className="mt-6 flex justify-end">
                <Button type="submit">Add Customer</Button>
              </div>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddCustomerDialog;
