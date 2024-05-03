import { useAuth } from "../utils/AuthContext";
import { Navigate } from "react-router-dom";

// https://ui.dev/react-router-protected-routes-authentication
// @ts-ignore
export const RequireAuth = ({children}) => {
  const { authenticated } = useAuth();
  
  return authenticated ? children : <Navigate to="/login" replace />;
};
