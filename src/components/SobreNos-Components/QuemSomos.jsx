import "../SobreNos-Components/QuemSomos.css"

import Lupa from "../../assets/images/SobreNos-img/LupaRoxa.png"
import CaraSentado from "../../assets/images/SobreNos-img/CaraSentado.png"

function QuemSomos(){
    return(
        <>
            <section id="QuemSomos">

                <div className="TituloQuemSomos">
                    <h1>QUEM SOMOS</h1>
                    <hr />
                </div>

                <div className="Lupa">
                    <img src={Lupa} alt="" />
                </div>

                <div className="Carasentado">
                    <img src={CaraSentado} alt="" />
                </div>
            </section>
        </>
    )
}

export default QuemSomos