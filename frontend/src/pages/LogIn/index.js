import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

import { SignIn } from '../../components/SignIn'

export const LogIn = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">   
      <Grid container spacing={4}>
        {<SignIn />}
      </Grid>
    </Container>
  );
};