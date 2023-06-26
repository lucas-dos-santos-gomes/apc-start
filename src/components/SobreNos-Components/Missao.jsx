import "../SobreNos-Components/Missao.css"

import espada from "../../assets/images/SobreNos-img/espada.png"
import bandeira from "../../assets/images/SobreNos-img/bandeira.png"
import coracao from "../../assets/images/SobreNos-img/coracao.png"
import MissaoVisaoValores from "../../assets/images/SobreNos-img/MissaoVisaoValores.png"

function Missao(){
    return(
        <>
            <section id="Missaosec">
                <div className="MissaoTitulo">
                    <img src={MissaoVisaoValores} alt="Titulo Missão, Visão e Valores" />
                </div>

                <div className="MiViVa">

                    
                    <div className="textos">
                        <div className="Imgtextos">
                          <img src={espada} alt="Imagem de espada" />
                          <h2><span className="yellow">Missão da História</span></h2>
                        </div>
                        <div className="texto">
                          <p>Nossa missão é proporcionar uma aventura épica de aprendizado, onde crianças com paralisia cerebral podem desvendar seu potencial. conquistar novos conhecimentos e se tornarem verdadeiros heróis de suas próprias histórias.</p>  
                        </div>
                    </div>
                    
                    
                    
                    <div className="textos">
                        <div className="Imgtextos">
                            <img src={bandeira} alt="Imagem de bandeira" />  
                            <h2><span className="Red">Próximas Fases</span></h2>
                        </div>
                        <div className="texto">
                            <p>Nossa visão é construir um império de aprendizado onde cada criança com paralisia cerebral possa se tornar um verdadeiro herói educacional.</p>  
                        </div>
                    </div>
                    
                   
                    
                    <div className="textos">
                        <div className="Imgtextos">
                          <img src={coracao} alt="Imagem de coração" />  
                          <h2><span className="Cian">Pontos de virtude</span></h2>
                        </div>
                        <div className="texto">
                        
                        <p>Atuar de forma ética, profissional e Nossos valores são nossos verdadeiros power-ups. Inclusão, inovação, acessibilidade e comprometimento com a educação são os pilares que impulsionam nossa empresa.</p>  
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Missao