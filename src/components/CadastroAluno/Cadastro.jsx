import "../CadastroAluno/Cadastro.css"

import Astronautanofoguete from "../../assets/images/CadastroAluno-img/Astronauta_no_foguete.png"
import Setas from "../../assets/images/CadastroAluno-img/Setas.png"

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
                            <img src={Astronautanofoguete} alt="" />
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