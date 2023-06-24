import "./JogosComponent.css"

import logo from "../../assets/images/logo.png"
import laptopcolorido from "../../assets/images/AreaEnsino-img/laptop-colorido.png"
import laptopsemcor from "../../assets/images/AreaEnsino-img/laptop-sem-cor.png"
import ursolendocolorido from "../../assets/images/AreaEnsino-img/ursolendo-colorido.png"
import dinossaurocolorido from "../../assets/images/AreaEnsino-img/dinossauro-colorido.png"
import fliperamacolorido from "../../assets/images/AreaEnsino-img/fliperama-colorido.png"
import ursolendosemcor from "../../assets/images/AreaEnsino-img/ursolendo-sem-cor.png"
import dinossaurosemcor from "../../assets/images/AreaEnsino-img/dinossauro-sem-cor.png"

function JogosComponent(){
    return(
        <>
        <section id="JogosSec">
            <div className="JogosHeader">
                <img src={logo} alt="" />
            </div>

            <div className="MenuJogos">
                <a href="/VideoAula"><img src={laptopsemcor} alt="" /></a>
                <a href="/Atividade"><img src={ursolendosemcor} alt="" /></a>
                <a href="/Musica"><img src={dinossaurosemcor} alt="" /></a>
                <a href="/Jogos"><img src={fliperamacolorido} alt="" /></a>
            </div>

            <div className="JogosBtn">
                <a href="" className="Rosa">Jogo 1</a>
                <a href="" className="Marinho">Jogo 2</a>
                <a href="" className="laranja">Jogo 3</a>
            </div>

            
            <div className="imagens-decoracao">
                <img src={laptopcolorido} alt="" />
                <img src={ursolendocolorido} alt="" />
                <img src={dinossaurocolorido} alt="" />
                <img src={fliperamacolorido} alt="" />
            </div>
        </section>
        </>
    )
}

export default JogosComponent