import React from "react";
import { Outlet } from "react-router-dom";
import { MenuNavBar } from "../components/MenuNavBar";

export const AppLayout: React.FC = () => {
return (
  <div>
    <MenuNavBar />

    <div className={"container my-3"}>
      <Outlet />
    </div>
  </div>
  );
};
