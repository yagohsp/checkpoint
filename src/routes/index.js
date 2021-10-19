import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Saved, Login, Signup, SetupProfile } from "../pages";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/setup-profile" component={SetupProfile} ignoreLayout />
        <PrivateRoute path="/salvos" component={Saved} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Router>
  )
}
