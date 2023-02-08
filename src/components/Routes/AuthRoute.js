import React from "react";
import { withRouter, Redirect, Route } from "react-router-dom";

const MemberRoute = ({
  component: Component,
  match,
  location,
  path,
  ...rest
}) => {
  const ok = localStorage.getItem("user");

  return (
    <Route
      {...rest}
      render={(props) =>
        ok ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to={`/sign-in`}></Redirect>
        )
      }
    ></Route>
  );
};

export default withRouter(MemberRoute);
