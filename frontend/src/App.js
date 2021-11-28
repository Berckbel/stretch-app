import { Route, Redirect } from "wouter";

import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { Register } from "./pages/Register";
import { Activate } from "./pages/Activate";
import { Navbar } from "./components/Navbar";

import { useUser } from "./hooks/useUser";

export const App = () => {
  const { isLogged } = useUser();

  return (
    <div>
      <Navbar />
      {isLogged ? (
        <Route component={Home} path={"/"} />
      ) : (
        <Redirect to={"/sign-in"} />
      )}
      {!isLogged ? (
        <Route component={LogIn} path={"/sign-in"} />
      ) : (
        <Redirect to={"/"} />
      )}
      {!isLogged && (
        <Route component={Activate} path={"/activate/:uid/:token"} />
      )}
      {!isLogged && <Route component={Register} path={"/sign-up"} />}
    </div>
  );
};
