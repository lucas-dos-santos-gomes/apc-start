import "./Cadastro.css";
import Astronautanofoguete from "../../assets/images/CadastroAluno-img/Astronauta_no_foguete.png";
import Setas from "../../assets/images/CadastroAluno-img/Setas.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/requests";

export default function Cadastro() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    if(password != confirmPassword) {
      alert("Você precisa confirmar a senha corretamente!");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    axios.get(`${BASE_URL}/aluno/${email}`).then(response => {
      if(response.data != "") {
        alert("Esse e-mail já está cadastrado na plataforma!");
        navigate("/LoginAluno");
        return;
      } else {
        let newName = (name.split(" ").map(i => i.charAt(0).toUpperCase() + i.slice(1))).join(" ");
        setName(newName);
        axios.post(`${BASE_URL}/aluno`, {nome: name, email: email, senha: password, data_nascimento: ""}).then(() => {
          alert(`${name.split(" ")[0]}, seu cadastro foi um sucesso!`);
          navigate("/LoginAluno");
        });
      }
    }).catch(err => {
        alert("ERRO! " + err);
        navigate("/LoginAluno");
    });
  }

  return(
    <>
      <section id="Login">
        <form onSubmit={formSubmit} className="Principal">
          <div className="inserir-dados">
            <div className="Barras-cadastro">
              <input onChange={handleNameChange} value={name} className="Nome" type="text" placeholder="Nome completo" required />
              <input onChange={handleEmailChange} value={email} className="E-mail" type="email" placeholder="E-mail" required />
              <input onChange={handlePasswordChange} value={password} minLength={8} maxLength={16} className="Senha-cadastro" type="password" placeholder="Senha" required />
              <input onChange={handleConfirmPasswordChange} value={confirmPassword} minLength={8} maxLength={16} className="Confirmar-senha" type="password" placeholder="Confirmar Senha" required />
            </div>

            <div className="Botao-cadastrar">
              <a href="/">
                <input type="submit" value="Cadastrar" />
              </a>
            </div>
          </div>

          <div className="Astronauta">
            <img src={Astronautanofoguete} alt="" />
          </div>
        </form>

        <div className="Bola-setas">
          <img src={Setas} alt="" />
        </div>
      </section>
    </>
  )
}