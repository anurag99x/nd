import React, { useState } from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleSignIn = ({ email, password }) => {
    if (email === "anurag.email" && password === "pass123") {
      setIsAuth(true);
    } else {
      alert("wrong credentials");
    }
  };

  const value = { handleSignIn, isAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider };
