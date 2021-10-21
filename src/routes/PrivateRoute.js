import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import { AuthContext } from "../providers/Auth";

const PrivateRoute = ({ component: RouteComponent, ignoreLayout, ...rest }) => {
  const {currentUser, currentUserData} = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          ignoreLayout ? ( 
            <RouteComponent {...routeProps} /> 
          ) : (
            !!currentUserData ? (
              <Layout>
                <RouteComponent {...routeProps} />
              </Layout>
            ) : (
              <Redirect to={"/setup-profile"} />
            )
          )
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute