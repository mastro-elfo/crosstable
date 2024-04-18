import { TableCell, TableCellProps } from "@mui/material";
import { DoubleResultCell } from "../DoubleResultCell";
import { SingleResultCell } from "../SingleResultCell";

type ResultCellProps = TableCellProps & {
  resultVariant?: "single" | "double";
  result1?: string | number;
  result2?: string | number;
};

export default function ResultCell({
  resultVariant = "single",
  ...props
}: ResultCellProps) {
  if (resultVariant === "single") {
    return <SingleResultCell {...props} />;
  }
  if (resultVariant === "double") {
    return <DoubleResultCell {...props} />;
  }
  return <TableCell {...props} />;
}
