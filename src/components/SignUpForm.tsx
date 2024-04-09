import * as React from "react";
import { useState } from "react";
import { useAuth } from "../utils/AuthContext";


export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useAuth();

  return (
    <div>
      <div>
        <form onSubmit={e => register(e, {
          firstname: firstname,
          lastname: lastname,
          email: email,
          username: username,
          password: password
        })}>
          <div className="form-outline mb-4">
            <input type="text" id="firstname" name="firstname" className="form-control" onChange={e => setFirstname(e.target.value)}/>
            <label className="form-label" htmlFor="firstname">First name</label>
          </div>

          <div className="form-outline mb-4">
            <input type="text" id="lastname" name="lastname" className="form-control" onChange={e => setLastname(e.target.value)}/>
            <label className="form-label" htmlFor="lastname">Last name</label>
          </div>

          <div className="form-outline mb-4">
            <input type="text" id="username" name="username" className="form-control" onChange={e => setUsername(e.target.value)}/>
            <label className="form-label" htmlFor="username">Username</label>
          </div>

          <div className="form-outline mb-4">
            <input type="text" id="email" name="email" className="form-control" onChange={e => setEmail(e.target.value)}/>
            <label className="form-label" htmlFor="email">Email</label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="registerPassword" name="password" className="form-control" onChange={e => setPassword(e.target.value)}/>
            <label className="form-label" htmlFor="registerPassword">Password</label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-3">Sign up</button>
        </form>
      </div>
    </div>
  );
}
