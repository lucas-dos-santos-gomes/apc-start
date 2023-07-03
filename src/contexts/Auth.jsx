import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../utils/requests";
import axios from "axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const verifyLogged = () => {
    const userLogged = JSON.parse(localStorage.getItem("user_logged"));
    if(userLogged) {
      axios.get(`${BASE_URL}/aluno/${userLogged.email}`).then(response => {
        if(userLogged.id == response.data.id && userLogged.email == response.data.email) {
          setUser({ id: response.data.id, email: response.data.email });
        } else {
          setUser(null);
          localStorage.removeItem("user_logged");
        }
      });
    }
  }

  useEffect(verifyLogged, []);

  return <AuthContext.Provider value={{ user, signed: !!user, verifyLogged }}>{children}</AuthContext.Provider>;
};