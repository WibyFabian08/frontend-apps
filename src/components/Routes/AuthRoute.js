import React from "react";
import { withRouter, Redirect, Route } from "react-router-dom";

const MemberRoute = ({
  component: Component,
  match,
  location,
  path,
  ...rest
}) => {
  const ok = localStorage.getItem("ACCESS:token");

  localStorage.removeItem("ACCESS:redirect");

  return (
    <Route
      {...rest}
      render={(props) =>
        ok ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to={`/login`}></Redirect>
        )
      }
    ></Route>
  );
};

export default withRouter(MemberRoute);
