import "../SobreNos-Components/QuemSomos.css"

import Lupa from "../../assets/images/SobreNos-img/LupaRoxa.png"
import CaraSentado from "../../assets/images/SobreNos-img/CaraSentado.png"

function QuemSomos(){
    return(
        <>
            <section id="QuemSomos">

                <div className="TituloQuemSomos">
                    <h1>QUEM SOMOS</h1>
                    <hr/>
                </div>

                <div className="Lupa">
                    <img src={Lupa} alt="" />
                </div>

                <div className="TextoQuemSomos">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam commodi minus molestias ullam corrupti perspiciatis. Eum omnis repellendus officia impedit quisquam. Reiciendis modi saepe aut alias nemo omnis ad asperiores!</p>
                </div>

                <div className="Carasentado">
                    <img src={CaraSentado} alt="" />
                </div>
            </section>
        </>
    )
}

export default QuemSomos