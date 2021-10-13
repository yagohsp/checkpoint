import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Login, Signup, SetupProfile } from "../pages";
import PrivateRoute from "./PrivateRoute";
import { UserDataContext } from "../providers/UserData";

export default function Routes() {
  const {currentUserData} = useContext(UserDataContext);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {currentUserData === undefined && <PrivateRoute path="/setup-profile" component={SetupProfile} ignoreLayout />}
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Router>
  )
}
