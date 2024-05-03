import { getAuthToken } from "./auth";
import axios from "axios";

export const USER_ROLE = {
  id: 1,
  role: "USER"
};

export const ADMIN_ROLE = {
  id: 2,
  role: "ADMIN"
};

export type RegisterUserInput = {
  firstname: string,
  lastname: string,
  email: string,
  username: string,
  password: string
}

export type TRole = {
  id: number,
  role: string
}

export type TUser = {
  id: number,
  username: string,
  password: string,
  firstname: string,
  lastname: string,
  email: string,
  role: TRole
};

export type TLogin = {
  token: string,
  role: TRole
}
