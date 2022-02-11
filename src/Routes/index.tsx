import { Switch } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import { Home } from "../Pages/Home";
import { Route } from "./Route";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};
