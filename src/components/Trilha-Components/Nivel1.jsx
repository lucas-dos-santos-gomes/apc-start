import "../Trilha-Components/Nivel1.css"

import Agenda from "../../assets/images/Trilha-img/Agenda.png"

function Nivel1(){
    return(
        <>
        <section id="Nivel1sec">
            <div className="Guia1">
                <div className="Guia1Info">
                    <div className="Guia1Textos">
                        <h2>N<span className="Roxo">I</span><span className="Amarelo">V</span><span className="Verde">E</span><span className="Vermelho">L</span> <span className="Laranja">1</span></h2>
                        <p>APRENDENDO O ALFABETO</p>
                    </div>
                    
                    <div className="GuiaLink">
                        <img src={Agenda} alt="" />
                        <a href="">GUIA</a>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}

export default Nivel1