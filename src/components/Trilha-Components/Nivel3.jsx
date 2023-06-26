import "../Trilha-Components/Nivel3.css"

import Agenda from "../../assets/images/Trilha-img/Agenda.png"
import bolavermelha from "../../assets/images/Trilha-img/bola-vermelha.png"
import bolaverde from "../../assets/images/Trilha-img/bola-verde.png"
import bolaazul from "../../assets/images/Trilha-img/bola-azul.png"
import bolaroxa from "../../assets/images/Trilha-img/bola-roxa.png"
import bolaamarela from "../../assets/images/Trilha-img/bola-amarela.png"
import cachorro from "../../assets/images/Trilha-img/cachorro.png"


function Nivel3(){
    return(
        <>
        <section id="Nivel3sec">
            <div className="Guia3">
                <div className="Guia3Info">
                    <div className="Guia3Textos">
                        <h2>N<span className="Roxo">I</span><span className="Amarelot">V</span><span className="Verde">E</span><span className="Vermelho">L</span> <span className="Laranja">3</span></h2>
                        <p>APRENDENDO OS NÚMEROS</p>
                    </div>
                    
                    <div className="GuiaLink3">
                        <img src={Agenda} alt="Imagem de uma agenda" />
                        <a href="">GUIA</a>
                    </div>
                </div>
            </div>

            <div className="Trilha3">
                <div className="trilha3img">
                    <img src={cachorro} alt="Imagem de um desenho de um cachorro" />
                </div>
                
                <div className="bolastrilha3">
                <a href=""><img src={bolavermelha} alt="bola vermelha" id="bolavermelha3"/></a>
                    <a href=""><img src={bolaamarela} alt="bola amarela" id="bolaamarela3"/></a>
                    <a href=""><img src={bolaverde} alt="bola verde" id="bolaverde3"/></a>
                    <a href=""><img src={bolaazul} alt="bola azul"  id="bolaazul3"/></a>
                    <a href=""><img src={bolaroxa} alt="bola roxa" id="bolaroxa3"/></a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Nivel3