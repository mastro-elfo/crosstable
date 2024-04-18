import { TableCell, TableCellProps } from "@mui/material";

type SingleResultCellProps = Omit<TableCellProps, "children"> & {
  result1?: string | number;
};

export default function SingleResultCell({
  result1,
  ...props
}: SingleResultCellProps) {
  return <TableCell {...props}>{result1}</TableCell>;
}
