import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

import { SignUp } from '../../components/SignUp'

export const Register = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">   
      <Grid container spacing={4}>
        {<SignUp />}
      </Grid>
    </Container>
  );
};