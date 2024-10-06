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
function TableCom({ data, head }) {
  return (
    <div className=" h-[39rem] mt-4 overflow-x-hidden">
      <Table className="">
        <TableHeader>
          <TableRow>
            {head.map((item, index) => (
              <TableHead key={`table_head_${index}`}>{head[index]}</TableHead>
            ))}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
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
  );
}

export default TableCom;
