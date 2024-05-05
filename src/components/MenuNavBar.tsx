import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../resources/routes";
import { LoginMenu } from "./LoginMenu";
import { getAuthToken } from "../queries/auth";
import { TRole, TUser, USER_ROLE } from "../queries/user";
import axios from "axios";


export const MenuNavBar: React.FunctionComponent = () => {
  const auth = getAuthToken();
  const [role, setRole] = useState<TRole>({
    id: 1,
    role: "USER"
  });
  if (auth !== null) {
    const headers = { headers: { Authorization: `Bearer ${auth}` } };
    axios.post<TUser>("/users/user", headers)
      .then(res => {
        if (res != null) {
          setRole(res.data.role);
        }
      });
  }

  useEffect(() => {
    if (auth != null) {
      setRole(role);
    } else {
      setRole(USER_ROLE)
    }
  }, [auth, role]);

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
            {auth && role?.role === USER_ROLE.role &&
            <li className={"nav-item"}>
              <Link to={`${ROUTE_CONSTANTS.APARTMENTS}/${ROUTE_CONSTANTS.ADD}`} className={"navbar-brand"}>Add Apartments</Link>
            </li>}
          </ul>
        </div>
        <LoginMenu/>
      </div>
    </nav>
  );
}