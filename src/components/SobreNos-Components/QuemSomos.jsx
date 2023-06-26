import "../SobreNos-Components/QuemSomos.css"

import Lupa from "../../assets/images/SobreNos-img/LupaRoxa.png"
import CaraSentado from "../../assets/images/SobreNos-img/CaraSentado.png"
import QuemSomosTitulo from "../../assets/images/SobreNos-img/QuemSomos.png"

function QuemSomos(){
    return(
        <>
            <section id="QuemSomos">
                <div className="TituloQuemSomos">
                    <img src={QuemSomosTitulo} alt="Titulo Quem somos" />
                    <hr/>
                </div>

                <div className="Lupa">
                    <img src={Lupa} alt="Imagem de lupa" />
                </div>

                <div className="TextoQuemSomos">
                    <p>A APC START é uma plataforma criada para alfabetizar crianças com paralisia cerebral com ajuda de psicopedagogos e jogos gameficados, nossa plataforma surgiu com o intuito de dar assistência a esse publico e diminuir a defasagem de alfabetização do mesmo.</p>
                </div>

                <div className="Carasentado">
                    <img src={CaraSentado} alt="Imagem de um homem sentado" />
                </div>
            </section>
        </>
    )
}

export default QuemSomos