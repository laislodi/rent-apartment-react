import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../resources/routes";
import { LoginMenu } from "./login-menu";


export const MenuNavBar: React.FunctionComponent = () => {

  return (
    <nav className={"navbar navbar-expand-lg bg-primary-subtle"}>
      <div className={"container"}>
        {/* put an image here in this first link */}
        <Link to="/" className={"navbar-brand navbar-text navbar"}>Rent Apartments</Link>
        {/* Hamburger menu when the page is too narrow */}
        <button className={"navbar-toggler"}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse mx-2 navbar-collapse"} id="navbarSupportedContent">
          <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
            <li className={"nav-item"}>
              <Link to={ROUTE_CONSTANTS.HOME} className={"navbar-brand"}>Home</Link>
            </li>
            <li className={"nav-item"}>
              <Link to={ROUTE_CONSTANTS.APARTMENTS} className={"navbar-brand"}>Apartments</Link>
            </li>
          </ul>
        </div>
        <LoginMenu/>
      </div>
    </nav>
  );
}