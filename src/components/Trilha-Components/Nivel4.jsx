import "../Trilha-Components/Nivel4.css"

import Agenda from "../../assets/images/Trilha-img/Agenda.png"
import bolavermelha from "../../assets/images/Trilha-img/bola-vermelha.png"
import bolaverde from "../../assets/images/Trilha-img/bola-verde.png"
import bolaazul from "../../assets/images/Trilha-img/bola-azul.png"
import bolaroxa from "../../assets/images/Trilha-img/bola-roxa.png"
import bolaamarela from "../../assets/images/Trilha-img/bola-amarela.png"
import coelho from "../../assets/images/Trilha-img/coelho.png"


function Nivel4(){
    return(
        <>
        <section id="Nivel4sec">
            <div className="Guia4">
                <div className="Guia4Info">
                    <div className="Guia4Textos">
                        <h2>N<span className="Roxo">I</span><span className="Amarelot">V</span><span className="Verde">E</span><span className="Vermelho">L</span> <span className="Laranja">4</span></h2>
                        <p>APRENDENDO A SOMAR NÚMEROS</p>
                    </div>
                    
                    <div className="GuiaLink4">
                        <img src={Agenda} alt="" />
                        <a href="">GUIA</a>
                    </div>
                </div>
            </div>

            <div className="Trilha4">
                <div className="trilha4img">
                    <img src={coelho} alt="" />
                </div>
                
                <div className="bolastrilha4">
                    <a href=""><img src={bolaverde} alt="" id="bolaverde4"/></a>
                    <a href=""><img src={bolaroxa} alt="" id="bolaroxa4"/></a>
                    <a href=""><img src={bolaamarela} alt="" id="bolaamarela4"/></a>
                    <a href=""><img src={bolavermelha} alt="" id="bolavermelha4"/></a>
                    <a href=""><img src={bolaazul} alt=""  id="bolaazul4"/></a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Nivel4