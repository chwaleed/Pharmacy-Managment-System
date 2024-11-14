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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

function AddProductDialog({ data, addButton }) {
  const createProductUrl = "http://localhost:4001/api/create-product";
  const [activeFieldIndex, setActiveFieldIndex] = useState(0);
  const { setProducts, suppliers } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      name: data?.name || "",
      generic_name: data?.generic_name || "",
      type: data?.type || "",
      batch_number: data?.batch_number || "",
      expiry_date: data?.expiry_date || "",
      company: data?.company || "",
      total_price: data?.total_price || "",
      cost_price: data?.cost_price || "",
      quantity: data?.quantity || 0,
      supplier: data?.supplier || "",
    },
  });
  console.log(suppliers);
  const onSubmit = async (data) => {
    if (data.id) {
      // Update existing product with data
      console.log("Updating product:", data);
      form.reset();
    } else {
      try {
        (async () => {
          const response = await axios
            .post(createProductUrl, {
              ...data,
              type: data.type,
              supplier: data.supplier,
            })
            .then((res) => setProducts((prev) => [...prev, res.data.data]));
          console.log(response);
        })();
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

  // const suppliers = [
  //   { value: "Supplier1", label: "Supplier 1" },
  //   { value: "Supplier2", label: "Supplier 2" },
  //   { value: "Supplier3", label: "Supplier 3" },
  // ];

  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredSuppliers);
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
                  <FormItem>
                    <FormLabel>Supplier</FormLabel>
                    <FormControl>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] justify-between"
                          >
                            {field.value
                              ? suppliers.find(
                                  (supplier) => supplier._id === field.value
                                )?.name
                              : "Select supplier..."}
                            <ChevronsUpDown className="opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <Input
                              placeholder="Search supplier..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              onFocus={(e) => e.target.select()}
                            />
                            <CommandList>
                              <CommandEmpty>No suppliers found.</CommandEmpty>
                              <CommandGroup>
                                {filteredSuppliers.length > 0 ? (
                                  filteredSuppliers.map((supplier) => (
                                    <CommandItem
                                      key={supplier._id}
                                      onSelect={() => {
                                        field.onChange(supplier._id);
                                        setSearchTerm("");
                                        setOpen(false);
                                      }}
                                    >
                                      {supplier.name}
                                      <Check
                                        className={cn(
                                          "ml-auto",
                                          field.value === supplier._id
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                    </CommandItem>
                                  ))
                                ) : (
                                  <CommandEmpty>
                                    No suppliers found.
                                  </CommandEmpty>
                                )}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
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
