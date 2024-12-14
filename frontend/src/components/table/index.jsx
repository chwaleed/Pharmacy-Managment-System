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
// import CustomerDialog from "../Dialog/CustomerDialog";
import axios from "axios";
import { useAppContext } from "@/context/Context";
import AddCustomerDialog from "../Dialog/CustomerDialog";

function TableCom({ data, head, relation }) {
  const deleteSupplierRoute = "http://localhost:4001/api/delete-supplier";
  const deleteProductRoute = "http://localhost:4001/api/delete-product";
  const deleteCustomerRoute = "http://localhost:4001/api/delete-customer";

  const { setProducts, setSuppliers, setCustomers } = useAppContext();

  const renderRow = (item) => {
    switch (relation) {
      case "products":
        return renderProductRow(item);
      case "suppliers":
        return renderSupplierRow(item);
      case "customers":
        return renderCustomerRow(item);
      default:
        return null;
    }
  };

  const handleDelete = async (data) => {
    try {
      if (relation === "products") {
        await axios.delete(deleteProductRoute, { data: { _id: data._id } });
        setProducts((prev) =>
          prev.filter((product) => product._id !== data._id)
        );
      } else if (relation === "suppliers") {
        await axios.delete(deleteSupplierRoute, { data: { _id: data._id } });
        setSuppliers((prev) =>
          prev.filter((supplier) => supplier._id !== data._id)
        );
      } else if (relation === "customers") {
        await axios.delete(deleteCustomerRoute, { data: { _id: data._id } });
        setCustomers((prev) =>
          prev.filter((customer) => customer._id !== data._id)
        );
      }
    } catch (error) {
      console.error("Error in Deleting Resources:", error);
    }
  };

  return (
    <div className="h-[39rem] mt-4 overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {head.map((item, index) => (
              <TableHead key={`table_head_${index}`}>{item}</TableHead>
            ))}
            <TableHead className="text-center">Action</TableHead>
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
                      // <AddProductDialog
                      //   data={data}
                      //   // addButton={editMedicineButton}
                      // />
                      <AddProductDialog
                        addButton={editMedicineButton}
                        data={data}
                      />
                    );
                  } else if (relation === "suppliers") {
                    return (
                      <SupplierDialog
                        data={data}
                        addButton={editMedicineButton}
                      />
                    );
                  } else if (relation === "customers") {
                    return (
                      <AddCustomerDialog
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
    <TableCell className="font-medium">{product?.name || "N/A"}</TableCell>
    <TableCell className="font-medium">
      {product?.batch_number || "N/A"}
    </TableCell>
    <TableCell className="font-medium">
      {product?.supplier?.name || "N/A"}
    </TableCell>
    <TableCell className="font-medium">{product.company || "N/A"}</TableCell>
    <TableCell className="font-medium">
      {product?.total_price || "N/A"}
    </TableCell>
    <TableCell className="font-medium">{product?.quantity || 0}</TableCell>
  </>
);

const renderSupplierRow = (supplier) => (
  <>
    <TableCell className="font-medium">{supplier?.name || "N/A"}</TableCell>
    <TableCell className="font-medium">
      {supplier?.phone_number || "N/A"}
    </TableCell>
    <TableCell className="font-medium">{supplier?.address || "N/A"}</TableCell>
  </>
);

const renderCustomerRow = (customer) => (
  <>
    <TableCell className="font-medium">{customer?.name}</TableCell>
    <TableCell className="font-medium">{customer?.phone_number}</TableCell>
    <TableCell className="font-medium">{customer?.address}</TableCell>
    <TableCell className="font-medium">Rs {customer?.credit || 0}</TableCell>
  </>
);

export default TableCom;

const editMedicineButton = (
  <Button className="bg-blue-600 hover:bg-blue-700">
    <Edit />
  </Button>
);
