/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "../ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const SupplierSelect = ({ suppliers, open, setOpen, field }) => {
  return (
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
                ? suppliers.find((supplier) => supplier._id === field.value)
                    ?.name || "Select supplier..."
                : `Select supplier...`}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search supplier..." />
              <CommandList>
                <CommandEmpty>No suppliers found.</CommandEmpty>
                <CommandGroup>
                  {suppliers.map((supplier) => (
                    <CommandItem
                      key={supplier._id}
                      onSelect={() => {
                        field.onChange(supplier._id);
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
                  ))}
                  <CommandEmpty>No suppliers found.</CommandEmpty>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default SupplierSelect;
