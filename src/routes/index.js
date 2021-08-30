import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Login } from "../pages";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Router>
  )
}
