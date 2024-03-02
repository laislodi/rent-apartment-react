import React from "react";
import { Button } from "@mui/material";
import { ROUTE_CONSTANTS } from "../resources/routes";


export const LoginMenu: React.FunctionComponent = () => {
  return(
    <div className={"navbar navbar-brand"} >
      <Button
        className={"bg-body-tertiary text-primary fw-bold text-capitalize mx-1"}
        href={ROUTE_CONSTANTS.LOGIN}>
        Login
      </Button>
      <Button
        className={"bg-body-tertiary text-black fw-bold text-capitalize mx-1"}
        href={ROUTE_CONSTANTS.LOGIN}>
        Sign up
      </Button>
    </div>
  );
};