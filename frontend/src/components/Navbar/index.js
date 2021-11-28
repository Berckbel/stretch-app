import { AppBar, Toolbar } from "@material-ui/core";
import { Typography, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { Link } from "wouter";
import { useStyles } from "./styles";
import { useUser } from "../../hooks/useUser";

export const Navbar = () => {
  const { isLogged, auth, logout } = useUser();
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        {isLogged&&<Link to={"/"}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="home"
          >
            <HomeIcon />
          </IconButton>
        </Link>}
        <Typography variant="h6" className={classes.title}>
          Horario Motos {isLogged ? auth.user.name : ''}
        </Typography>
        {!isLogged&&<Link to={"/sign-in"}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="login"
          >
            <AccountCircleIcon />
          </IconButton>
        </Link>}
        {isLogged&&<IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="logout"
          onClick={logout}
        >
          <ExitToAppIcon />
        </IconButton>}
      </Toolbar>
    </AppBar>
  );
};
