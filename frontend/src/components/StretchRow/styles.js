import { withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const TableRowNormal = withStyles((theme) => ({
  root: {
      backgroundColor: theme.palette.common.white,
  },
  
}))(TableRow);

export const TableRowSelected = withStyles((theme) => ({
  root: {
      backgroundColor: theme.palette.primary.light,
  },
  
}))(TableRow);

export const TableRowEmpty = withStyles((theme) => ({
  root: {
      backgroundColor: theme.palette.error.main,
  },
  
}))(TableRow);
