import "../SobreNos-Components/Sobre.css"

import ControleVideo from "../../assets/images/SobreNos-img/controle-video.png"

import PessoaSegurandoPeca from "../../assets/images/SobreNos-img/pessoa-segurando-peca.png"
import SobreNostitulo from "../../assets/images/SobreNos-img/SobreNos.png"


function Sobre(){
    return(
        <>
            <section id="SobreSec">
                <div className="SobreTitulo">
                    <img src={SobreNostitulo} alt="" />
                </div>

                <div className="Controle-img">
                    <img src={ControleVideo} alt="" />
                </div>

                <div className="TextoSobre">
                    <p>Somos um grupo de guerreiros apaixonados por games e educação, unidos por uma missão épica: capacitar crianças com paralisia cerebral através do poder transformador do conhecimento. Nossa equipe, formada por especialistas em desenvolvimento, design e pedagogia, combina habilidades únicas para criar uma experiência de aprendizado inovadora e envolvente.</p>
                </div>

                <div className="Peca-img">
                    <img src={PessoaSegurandoPeca} alt="" />
                </div>
            </section>
        </>
    )
}

export default Sobre