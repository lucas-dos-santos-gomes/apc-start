import { useState } from "react";
import Logout from "./Logout/index.jsx";
import UserIcon from "./UserIcon/index.jsx";
import { UserButtonStyled } from "./styled.js";

export default function UserButton() {
  const [display, setDisplay] = useState("");

  const handleDisplay = () => {
    setDisplay(display == "" ? "active" : "");
  }

  return (
    <UserButtonStyled>
      <Logout classe={display}>
        <button className="button-logout">Sair da conta</button>
      </Logout>
      <UserIcon classe={display} handle={handleDisplay} />
    </UserButtonStyled>
  );
}