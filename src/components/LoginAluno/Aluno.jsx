import "../LoginAluno/Aluno.css"

import Astronauta from "../../assets/images/LoginAluno-img/Astronauta.png"
import Setas from "../../assets/images/LoginAluno-img/Setas.png"
import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../utils/requests"
import { useNavigate } from "react-router-dom"

function Aluno (){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    /*useEffect(() => {
        axios.get(`${BASE_URL}/aluno`)
            .then(response => {
                console.log(response.data);
            });
    });*/

    const handleSubmit = (e) => {
        e.preventDefault();

        let responseApi;

        axios.get(`${BASE_URL}/aluno/${email}/${password}`).then(response => {
            responseApi = response.data;
            alert(responseApi);
            if(responseApi == "Login realizado com sucesso!") {
                navigate("/trilha");
            } else if(responseApi == "Esse e-mail não foi cadastrado") {
                setEmail("");
                setPassword("");
            } else {
                setPassword("");
            }
        }).catch(err => {
            alert("ERRO! " + err);
            navigate("/LoginAluno");
        });
    
    }

    return(
        <>
        <section id="Login">

            <form onSubmit={handleSubmit} className="Principal">

                <div className="Astronauta">
                   <img src={Astronauta} alt="" />
                </div>

                <div className="inserir-dados">

                    <p><span className="A">A</span> <span className="P">P</span> 
                <span className="C">C</span> <span className="S">S</span> <span className="T">T</span> <span className="A">A</span> <span className="R">R</span> <span className="T">T</span></p>

                <div className="Barras">

                    <input className="Email" type="email" placeholder="E-mail" value={email} onChange={handleEmailChange} required />

                    <input className="Senha" type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} required />

                </div>


                <div className="registre-se-ou-esqueci-senha ">

                    <a href="#">ESQUECI MINHA SENHA</a>

                    <a href="/CadastroAluno">REGISTRE-SE</a>

                </div>

                <div className="Botao-entrar">
                    <input type="submit" value="Entrar" />
                </div>

                </div>

            </form>
            
                <div className="Bola-setas">

                    <img src={Setas} alt="" />

                </div>
        </section>
        </>
    )
}
export default Aluno