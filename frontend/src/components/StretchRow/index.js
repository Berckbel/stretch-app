import { StyledTableCell, TableRowNormal } from "./styles";
import { TableRowSelected, TableRowEmpty } from "./styles";
import { useResource } from "../../hooks/useResource";

export const StretchRow = ({ stretch }) => {
  const { data, selected, loading, handleClick, handleEmpty } = useResource({ stretch });

  if(loading){
    return (
      <TableRowNormal>
        <StyledTableCell align="center">{<strong>cargando</strong>}</StyledTableCell>
        <StyledTableCell align="center">{<strong>...</strong>}</StyledTableCell>
      </TableRowNormal>
    );
  }

  if (data.moto_count === 1) {
    return (
      <TableRowEmpty onClick={handleEmpty}>
        <StyledTableCell align="center">{data.hour}</StyledTableCell>
        <StyledTableCell align="center">{data.moto_count}</StyledTableCell>
      </TableRowEmpty>
    );
  } else if (selected === true) {
    return (
      <TableRowSelected hover onClick={handleClick}>
        <StyledTableCell align="center">{data.hour}</StyledTableCell>
        <StyledTableCell align="center">{data.moto_count}</StyledTableCell>
      </TableRowSelected>
    );
  } else if (selected === false) {
    return (
      <TableRowNormal hover onClick={handleClick}>
        <StyledTableCell align="center">{data.hour}</StyledTableCell>
        <StyledTableCell align="center">{data.moto_count}</StyledTableCell>
      </TableRowNormal>
    );
  }
};
