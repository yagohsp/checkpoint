import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  Saved,
  Login,
  Signup,
  SetupProfile,
  EditProfile,
  Search,
  MyProfile,
  Notifications,
  Profile,
} from "../pages";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Signup} />
        <PrivateRoute
          path="/setup-profile"
          component={SetupProfile}
          ignoreLayout
        />
        <PrivateRoute path="/salvos" component={Saved} />
        <PrivateRoute path="/meu-perfil" component={MyProfile} />
        <PrivateRoute path="/editar-perfil" component={EditProfile} />
        <PrivateRoute path="/buscar" component={Search} />
        <PrivateRoute path="/notificacoes" component={Notifications} />
        <PrivateRoute path="/perfil/:uid" component={Profile} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
}
