import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../utils/requests";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userLogged = localStorage.getItem("user_logged");
    if(userLogged) {
      axios.get(`${BASE_URL}/aluno/${userLogged.email}`).then(response => {
        console.log(response);
      });
    }
  });

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};