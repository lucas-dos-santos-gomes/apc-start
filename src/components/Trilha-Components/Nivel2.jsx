import "../Trilha-Components/Nivel2.css"

import Agenda from "../../assets/images/Trilha-img/Agenda.png"
import bolavermelha from "../../assets/images/Trilha-img/bola-vermelha.png"
import bolaverde from "../../assets/images/Trilha-img/bola-verde.png"
import bolaazul from "../../assets/images/Trilha-img/bola-azul.png"
import bolaroxa from "../../assets/images/Trilha-img/bola-roxa.png"
import bolaamarela from "../../assets/images/Trilha-img/bola-amarela.png"
import hamster from "../../assets/images/Trilha-img/hamster.png"

function Nivel2(){
    return(
        <>
        <section id="Nivel2sec">
            <div className="Guia2">
                <div className="Guia2Info">
                    <div className="Guia2Textos">
                        <h2>N<span className="Roxo">I</span><span className="Amarelot">V</span><span className="Verde">E</span><span className="Vermelho">L</span> <span className="Laranja">2</span></h2>
                        <p>APRENDENDO A COMBINAR LETRAS</p>
                    </div>
                    
                    <div className="GuiaLink2">
                        <img src={Agenda} alt="imagem de agenda" />
                        <a href="">GUIA</a>
                    </div>
                </div>
            </div>

            <div className="Trilha2">
                <div className="trilha2img">
                    <img src={hamster} alt="Imagem de um desenho de um hamster" />
                </div>
                
                <div className="bolastrilha2">
                    <a href=""><img src={bolaamarela} alt="bola amarela" id="bolaamarela2"/></a>
                    <a href=""><img src={bolaroxa} alt="bola roxa" id="bolaroxa2"/></a>
                    <a href=""><img src={bolaazul} alt="bola azul"  id="bolaazul2"/></a>
                    <a href=""><img src={bolaverde} alt="bola verde" id="bolaverde2"/></a>
                    <a href=""><img src={bolavermelha} alt="bola vermelha" id="bolavermelha2"/></a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Nivel2