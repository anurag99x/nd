import { Route, Link, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Users } from "./Users";

const Routes = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/login">Login</Link>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route>
          <Route>Page not found</Route>
        </Route>
      </Switch>
    </>
  );
};

export { Routes };
