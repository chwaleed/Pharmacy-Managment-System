/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit } from "lucide-react";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import AddProductDialog from "../Dialog/Dialog";
import SupplierDialog from "../Dialog/SupplierDialog";
import axios from "axios";

function TableCom({ data, head, relation }) {
  /// Render row
  const deleteSupplierRoute = "";
  const renderRow = (item) => {
    switch (relation) {
      case "products":
        return renderProductRow(item);
      case "suppliers":
        return renderSupplier(item);
      case "customer":
        return renderCustomer(item);
      default:
        return null;
    }
  };

  const handleDelete = async (data) => {
    console.log(data);
    if (relation === "products") {
      console.log("Product has been deleted");
    } else if (relation === "suppliers") {
      const response = await axios.delete(deleteSupplierRoute, data._id);
    }
  };

  return (
    <div className=" h-[39rem] mt-4 overflow-auto">
      <Table className="">
        <TableHeader>
          <TableRow>
            {head.map((item, index) => (
              <TableHead key={`table_head_${index}`}>{head[index]}</TableHead>
            ))}
            <TableHead className="text-center ">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data, index) => (
            <TableRow key={index}>
              {renderRow(data)}
              <TableCell className="flex gap-2 justify-center">
                {(() => {
                  if (relation === "products") {
                    return (
                      <AddProductDialog
                        data={data}
                        addButton={editMedicineButton}
                      />
                    );
                  } else if (relation === "suppliers") {
                    return (
                      <SupplierDialog
                        data={data}
                        addButton={editMedicineButton}
                      />
                    );
                  }
                  return null;
                })()}
                <Button
                  onClick={() => handleDelete(data)}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <X />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
const renderProductRow = (product) => (
  <>
    <TableCell className="font-medium">{product.name}</TableCell>
    <TableCell className="font-medium">{product.batch_number}</TableCell>
    <TableCell className="font-medium">{product.supplier}</TableCell>
    <TableCell className="font-medium">{product.company || null}</TableCell>
    <TableCell className="font-medium">{product.total_price || null}</TableCell>
    <TableCell className="font-medium">{product.quantity}</TableCell>
  </>
);

const renderSupplier = (supplier) => (
  <>
    <TableCell className="font-medium">{supplier.name}</TableCell>
    <TableCell className="font-medium">{supplier.phone_number}</TableCell>
    <TableCell className="font-medium">{supplier.address}</TableCell>
  </>
);
const renderCustomer = (invoice) => (
  <>
    <TableCell className="font-medium">Customer</TableCell>
    <TableCell className="font-medium">{invoice.paymentStatus}</TableCell>
    <TableCell className="font-medium">{invoice.totalAmount}</TableCell>
    <TableCell className="font-medium">{invoice.paymentMethod}</TableCell>
  </>
);

export default TableCom;
const editMedicineButton = (
  <Button className="bg-blue-600 hover:bg-blue-700">
    <Edit />
  </Button>
);
