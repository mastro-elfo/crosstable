import { TableCell, styled, tableCellClasses } from "@mui/material";

const TableHeadCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}))

export default TableHeadCell;