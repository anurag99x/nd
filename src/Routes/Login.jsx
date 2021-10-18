import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../ContextApi/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignIn, isAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn({ email, password });
  };

  return !isAuth ? (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text"
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Username</label>
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  ) : (
    <Redirect to="/users" />
  );
};

export { Login };
