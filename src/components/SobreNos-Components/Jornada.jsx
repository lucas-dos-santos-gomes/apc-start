import "../SobreNos-Components/Jornada.css"

import JornadaTitulo from "../../assets/images/SobreNos-img/Jornada.png"
import foguete from "../../assets/images/SobreNos-img/foguete.png"
import homemvr from "../../assets/images/SobreNos-img/homem-vr.png"

function Jornada(){
    return(
        <>
        <section id="JornadaSec">
            <div className="JornadaInfo">
                <div className="Jornadatitulo">
                    <img src={JornadaTitulo} alt="" />
                </div>

                <div className="JornadaTexto">
                    <img src={homemvr} alt="" />
                    <p>Em 2023, surge um projeto inovador com o objetivo de combater a falta de inclusão e recursos educacionais para crianças com paralisia cerebral. Fundado por uma equipe apaixonada por games e educação, a missão é proporcionar uma jornada de aprendizado cativante e inclusiva. Com uma plataforma de estudos personalizada e lúdica, buscam transformar a educação em uma experiência divertida e significativa. Parcerias estratégicas, como o Instituto Proa, fortalecem o projeto. Conquistas notáveis, como um evento de alfabetização no Senac, validam a proposta. A visão futura é liderar a indústria, trazendo inovação e transformação para a educação, capacitando cada criança com paralisia cerebral a alcançar seu potencial máximo. Prepare-se para uma jornada extraordinária em busca de um futuro educacional brilhante!</p>
                    <img src={foguete} alt="" />
                </div>
            </div>
        </section>
        </>
    )
}

export default Jornada