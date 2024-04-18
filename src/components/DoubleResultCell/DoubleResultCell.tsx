import { TableCell, TableCellProps, Typography } from "@mui/material";

type DoubleResultCellProps = Omit<TableCellProps, "children"> & {
  result1?: string | number;
  result2?: string | number;
};

export default function DoubleResultCell({
  result1,
  result2,
  ...props
}: DoubleResultCellProps) {
  return (
    <TableCell {...props} padding="none">
      <Typography align="right" px={1} variant="body2">
        {result2}
      </Typography>
      <Typography align="left" px={1} variant="body2">
        {result1}
      </Typography>
    </TableCell>
  );
}
