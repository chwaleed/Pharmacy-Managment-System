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
    </div>
  );
}

export default AddMedicine;
