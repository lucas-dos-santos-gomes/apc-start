import "../SobreNos-Components/Missao.css"

import espada from "../../assets/images/SobreNos-img/espada.png"
import bandeira from "../../assets/images/SobreNos-img/bandeira.png"
import coracao from "../../assets/images/SobreNos-img/coracao.png"

function Missao(){
    return(
        <>
            <section id="Missaosec">
                <div className="MissaoTitulo">
                    <h1>Missão, Visão e valores</h1>
                </div>

                <div className="MiViVa">

                    <div className="infoQuem">
                    <div className="textos">
                        <div className="Imgtextos">
                          <img src={espada} alt="" />  
                        </div>
                        <div className="texto">
                            <h2><span className="">Missão da História</span></h2>
                          <p>Nossa missão é proporcionar uma aventura épica de aprendizado, onde crianças com paralisia cerebral podem desvendar seu potencial. conquistar novos conhecimentos e se tornarem verdadeiros heróis de suas próprias histórias.</p>  
                        </div>
                    </div>
                    </div>
                    
                    <div className="infoQuem">
                    <div className="textos">
                        <div className="Imgtextos">
                            <img src={bandeira} alt="" />  
                        </div>
                        <div className="texto">
                            <h2>Próximas Fases</h2>
                            <p>Nossa visão é construir um império de aprendizado onde cada criança com paralisia cerebral possa se tornar um verdadeiro herói educacional</p>  
                        </div>
                    </div>
                    </div>
                   
                    <div className="infoQuem">
                    <div className="textos">
                        <div className="Imgtextos">
                          <img src={coracao} alt="" />  
                        </div>
                        <div className="texto">
                        <h2>Pontos de virtude</h2>
                        <p>Atuar de forma ética, profissional e Nossos valores são nossos verdadeiros power-ups. Inclusão, inovação, acessibilidade e comprometimento com a educação são os pilares que impulsionam nossa empresa.</p>  
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Missao