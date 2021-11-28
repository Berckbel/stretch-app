import { useStyles } from "./styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { StyledTableCell } from "./styles";
import { StretchRow } from '../StretchRow'
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export const StretchTable = ({ stretchs = [] }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">{<strong>Horario</strong>}</StyledTableCell>
            <StyledTableCell align="center"><strong>Motos</strong></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stretchs.map((stretch) => (
            <StretchRow key={stretch.id} stretch={stretch} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
