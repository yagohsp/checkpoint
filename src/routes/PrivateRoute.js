import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import { AuthContext } from "../providers/Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <Layout>
            <RouteComponent {...routeProps} />
          </Layout>
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};


export default PrivateRoute