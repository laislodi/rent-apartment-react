import React, { createContext, FormEvent, useContext, useState } from "react";
import axios from "axios";
import { removeAuthHeader, setAuthHeader } from "../queries/auth";
import { useNavigate } from "react-router-dom";
import { RegisterUserInput, TLogin } from "../queries/user";

const AuthContext = createContext({
  authenticated: false,
  logout: (token: string) => {},
  register: (event: React.FormEvent<HTMLFormElement>, data: RegisterUserInput) => {},
  login: (event: React.FormEvent<HTMLFormElement>, username: string, password: string) => {}
});

// @ts-ignore
export const AuthProvider = ({ children }) => {
  const [ authenticated, setAuthenticated ] = useState(false);
  const navigate = useNavigate();

  const login = (event: React.FormEvent<HTMLFormElement>, username: string, password: string) => {
    event.preventDefault();
    axios.post<TLogin>('/auth/login', {
        username,
        password
      }).then(
      (response) => {
        setAuthHeader(response.data.token);
        setAuthenticated(true);
        window.alert("Successful Logged in! User: " + username);
        navigate("/apartments");
      }).catch(
      (error) => {
        window.alert(error);
        console.log(error);
      }
    );
  };

  const register = (event: FormEvent, data: RegisterUserInput) => {
    event.preventDefault();
    return axios.post("/register", data).then(res => {
      setAuthHeader(res.data.token);
      window.alert("Successful Registered! User: " + data.username + ". Name: " + data.firstname + " " + data.lastname);
      navigate("/apartments");
    }).catch(
      error => {
        window.alert(error);
        removeAuthHeader();
      }
    );
  };

  const logout = (token: string) => {
    axios.post("/logout",
      {
        token: token
      }).catch(
        error => window.alert(error)
    )
    removeAuthHeader();
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
}
