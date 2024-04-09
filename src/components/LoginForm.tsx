import * as React from "react";
import { useState} from "react";
import { useAuth } from "../utils/AuthContext";


export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  return (
    <div>
      <div>
        <form onSubmit={(e) => login(e, username, password)}>

          <div className="form-outline mb-4">
            <input type="text" id="login" name="login" className="form-control" onChange={e => setUsername(e.target.value)}/>
            <label className="form-label" htmlFor="login">Username</label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="registerPassword" name="password" className="form-control" onChange={e => setPassword(e.target.value)}/>
            <label className="form-label" htmlFor="registerPassword">Password</label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
        </form>
      </div>
    </div>
  );
}
