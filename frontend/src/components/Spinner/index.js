import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./styles";

export const Spinner = () => {
  const classes = useStyles();
  return <CircularProgress className={classes.spinner} />;
};
