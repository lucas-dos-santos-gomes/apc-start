import "../Perfil/Acesso.css"

import Aluno from "../../assets/images/Acesso-img/Aluno.png"
import Profissional from "../../assets/images/Acesso-img/Profissional.png"

function Acesso(){
    return(
        <>
    <section id="Perfil-acesso" >

            
            <div className="Titulo-Perfil">

                    <h1>Qual perfil você deseja acessar?</h1>

            </div>

            

        <div className="Acesso">

                <div className="Perfil-Aluno">

                    <a href="/LoginAluno">

                    <img className="Garoto" src={Aluno} alt="" />

                    <p className="Paragrafo-aluno">Aluno</p>

                    </a>
                </div>

                <div className="Perfil-Profissional" >
                    <a href="/LoginProfissional">

                    <img className="Coruja" src={Profissional} alt="" />

                    <p className="Paragrafo-profissional">Profissional</p>

                    </a>
                </div>
            
        </div>
            
    </section>
        </>
    )
}
export default Acesso
