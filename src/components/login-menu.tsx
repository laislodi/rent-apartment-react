import React from "react";
import { ROUTE_CONSTANTS } from "../resources/routes";
import { Link } from "react-router-dom";


export const LoginMenu: React.FunctionComponent = () => {
  return(
    <div className={"navbar navbar-brand"} >
      <Link
        className={"btn btn-dark mx-1"}
        to={ROUTE_CONSTANTS.LOGIN}>
        Login
      </Link>
      <Link
        className={"btn btn-group bg-secondary-subtle mx-1"}
        to={ROUTE_CONSTANTS.LOGIN}>
        Sign up
      </Link>
    </div>
  );
};
