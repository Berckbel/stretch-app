import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Href from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { Link } from "wouter";

import { Copyright } from "../Copyright";
import { useStyles } from "./styles";
import { useUser } from '../../hooks/useUser'


export const SignIn = () => {
  const classes = useStyles();
  const { isLoading, hasError, login } = useUser()

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    login({ email, password })
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesion
        </Typography>
        {isLoading && <strong>Verificando credenciales...</strong>}
        {!isLoading &&
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item>
                <Link to={"/sign-up"}>
                  <Href href="#" variant="body2">
                    {"¿No tiene cuenta? Registrese"}
                  </Href>
                </Link>
              </Grid>
            </Grid>
          </form>
        }
      </div>
      {
        hasError && <strong>Credenciales Invalidas</strong>
      }
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
