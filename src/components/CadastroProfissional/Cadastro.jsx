import "../CadastroProfissional/Cadastro.css"

import Logo_apc from "../../assets/images/CadastroProfissional-img/logoapc.png"
import Setas from "../../assets/images/CadastroProfissional-img/Setas.png"

function Cadastro (){
    return(
        <>
         <section id="Login">

                <div className="Principal">

                    

                    <div className="inserir-dados">


                        <div className="Barras-cadastro">

                            <input className="Nome" type="text" placeholder="Nome completo" />
                            <input className="E-mail" type="email" placeholder="E-mail" />
                            <input className="Senha-cadastro" type="password" placeholder="Senha" />
                            <input className="Confirmar-senha" type="password" placeholder="Confirmar Senha" />

                        </div>


                        
                        <div className="Botao-cadastrar">

                            <a href="/">
                                <button>Cadastrar</button>
                            </a>
                        </div>


                    </div>

                        <div className="Astronauta">
                            <img src={Logo_apc} alt="" />
                        </div>
                        
                </div>

                        <div className="Bola-setas">

                            <img src={Setas} alt="" />

                        </div>
        </section>
        </>
    )
}
export default Cadastro