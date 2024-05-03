import { useAuth } from "../utils/AuthContext";
import { ADMIN_ROLE, TRole, TUser } from "../queries/user";
import { getAuthToken } from "../queries/auth";
import axios from "axios";
import { useState } from "react";


function ForbiddenPage() {
  return <div className={"container text-center"}>
    <h1>Access to this page is restricted</h1>
  </div>;
}

// @ts-ignore
export const AdminRoute = ({children}) => {
  const { authenticated } = useAuth();
  const [ userRole, setUserRole ] = useState<TRole>({
    id: 1,
    role: "USER"
  });
  const auth = getAuthToken();
  const headers = auth ? { headers: { Authorization: auth } } : undefined;
  axios.post<TUser>("/users/user", headers)
    .then(res => {
      if (res.data != null) {
        setUserRole(res.data.role);
      }
    });

  return authenticated && userRole.role == ADMIN_ROLE.role ? children : <ForbiddenPage />;
};
