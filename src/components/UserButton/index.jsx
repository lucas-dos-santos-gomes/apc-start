import { useState } from "react";
import Logout from "./Logout/index.jsx";
import UserIcon from "./UserIcon/index.jsx";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function UserButton() {
  const navigate = useNavigate();
  const [display, setDisplay] = useState("");

  const handleDisplay = () => {
    setDisplay(display == "" ? "active" : "");
  }

  const handleLeave = () => {
    localStorage.removeItem("user_logged");
    navigate("/LoginAluno");
  }

  return (
    <div className="user-content">
      <Logout classe={display}>
        <button onClick={handleLeave} className="button-logout">Sair da conta</button>
      </Logout>
      <UserIcon classe={display} handle={handleDisplay} />
    </div>
  );
}