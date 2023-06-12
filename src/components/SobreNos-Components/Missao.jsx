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
                    <div className="textos">
                        <img src={espada} alt="" />
                        <p>Nossa missão é proporcionar uma aventura épica de aprendizado, onde crianças com paralisia cerebral podem desvendar seu potencial. conquistar novos conhecimentos e se tornarem verdadeiros heróis de suas próprias histórias.</p>
                    </div>

                    <div className="textos">
                        <img src={bandeira} alt="" />
                        <p>Nossa visão é construir um império de aprendizado onde cada criança com paralisia cerebral possa se tornar um verdadeiro herói educacional</p>
                    </div>

                    <div className="textos">
                        <img src={coracao} alt="" />
                        <h2>Pontos d</h2>
                        <p>Atuar de forma ética, profissional e Nossos valores são nossos verdadeiros power-ups. Inclusão, inovação, acessibilidade e comprometimento com a educação são os pilares que impulsionam nossa empresa.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Missao