import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

import { StretchTable } from '../../components/StretchTable'
import { Spinner } from '../../components/Spinner'

import { useStretchs } from '../../hooks/useStretchs'
import { useUser } from '../../hooks/useUser'


export const Home = () => {
  const classes = useStyles();
  const { auth } = useUser()
  const { stretchs, loading } = useStretchs({ access: auth.access })

  return (
    <Container className={classes.cardGrid} maxWidth="md">   
      <Grid container spacing={4}>
        {loading ? <Spinner /> : <StretchTable stretchs={stretchs} />}
      </Grid>
    </Container>
  );
};
