import "./AtividadeComponent.css"

import logo from "../../assets/images/logo.png"
import laptopcolorido from "../../assets/images/AreaEnsino-img/laptop-colorido.png"
import laptopsemcor from "../../assets/images/AreaEnsino-img/laptop-sem-cor.png"
import dinossaurosemcor from "../../assets/images/AreaEnsino-img/dinossauro-sem-cor.png"
import fliperamasemcor from "../../assets/images/AreaEnsino-img/fliperama-sem-cor.png"
import ursolendocolorido from "../../assets/images/AreaEnsino-img/ursolendo-colorido.png"
import dinossaurocolorido from "../../assets/images/AreaEnsino-img/dinossauro-colorido.png"
import fliperamacolorido from "../../assets/images/AreaEnsino-img/fliperama-colorido.png"


function AtividadeComponent(){
    return(
        <>
        <section id="AtividadeSec">
            <div className="AtividadeHeader">
                <img src={logo} alt="" />
            </div>

            <div className="MenuAtividade">
                <a href="/VideoAula"><img src={laptopsemcor} alt="" /></a>
                <a href="/Atividade"><img src={ursolendocolorido} alt="" /></a>
                <a><img src={dinossaurosemcor} alt="" /></a>
                <a><img src={fliperamasemcor} alt="" /></a>
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

export default AtividadeComponent