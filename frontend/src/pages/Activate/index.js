import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

import { Spinner } from '../../components/Spinner'
import { useActivateUser } from '../../hooks/useActivateUser'

export const Activate = ({ params }) => {
  const classes = useStyles();
  const { uid, token } = params
  const { data, loading } = useActivateUser({uid, token})
  return (
    <Container className={classes.cardGrid} maxWidth="md">   
      <Grid container spacing={4}>
        {loading ? <Spinner /> : console.log(data)}
      </Grid>
    </Container>
  );
};