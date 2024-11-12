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
function TableCom({ data, head, relation }) {
  /// Render row
  const renderRow = (item) => {
    switch (relation) {
      case "products":
        return renderProductRow(item);
      case "supplier":
        return renderSupplier(item);
      case "customer":
        return renderCustomer(item);
      default:
        return null;
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
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {renderRow(item)}
              <TableCell className="flex gap-2 justify-center">
                <AddProductDialog
                  product={item}
                  addButton={editMedicineButton}
                />
                <Button className="bg-red-600 hover:bg-red-700">
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
const renderSupplier = (invoice) => (
  <>
    <TableCell className="font-medium">Supplier</TableCell>
    <TableCell className="font-medium">{invoice.paymentStatus}</TableCell>
    <TableCell className="font-medium">{invoice.totalAmount}</TableCell>
    <TableCell className="font-medium">{invoice.paymentMethod}</TableCell>
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
