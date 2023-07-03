import "../LoginProfissional/Profissional.css"

import Logo from "../../assets/images/LoginProfissional-img/logoapc.png"
import Boneco from "../../assets/images/LoginProfissional-img/LogoProfissional.png"
import Setas from "../../assets/images/LoginProfissional-img/Setas.png"

function Profissional (){
    return(
        <>
        <section id="Login">

            <div className="Principal">

                <div className="Logo-apc">
                   <img src={Logo} alt="" />
                </div>

                <div className="inserir-dados">

                    <img className="Logo-profissional" src={Boneco} alt="" />

                <div className="Barras">

                    <input className="Email" type="email" placeholder="E-mail" />

                    <input className="Senha" type="password" placeholder="Senha" />

                </div>


                <div className="registre-se-ou-esqueci-senha ">

                    <a href="#">ESQUECI MINHA SENHA</a>

                    <a href="/CadastroProfissional">REGISTRE-SE</a>

                </div>

                <div className="Botao-entrar">

                    <a href="/">
                        <button>Entrar</button>
                    </a>
                </div>

                </div>

            </div>
            
                <div className="Bola-setas">

                    <img src={Setas} alt="" />

                </div>
        </section>
        </>
    )
}
export default Profissional