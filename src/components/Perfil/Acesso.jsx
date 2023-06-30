import "../Perfil/Acesso.css"

import Aluno from "../../assets/images/Acesso-img/Aluno.png"
import Profissional from "../../assets/images/Acesso-img/Profissional.png"

function Acesso (){
    return(
        <>
        <Section id="Sessao">

            <h1>Qual Perfil você deseja acessar?</h1>

            <div className="Acesso">

                <div className="Acesso-aluno">
                    <a href=""> <img src={Aluno} alt="" /></a>
                </div>

                <div className="Acesso-Profissional">
                    <a href=""><img src={Profissional} alt="" /></a>
                </div>
            </div>

        </Section>
        </>
    )
}
export default Acesso