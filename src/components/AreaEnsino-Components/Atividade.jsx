
import logo from "../../assets/images/logo.png"
import laptopcolorido from "../../assets/images/AreaEnsino-img/laptop-colorido.png"
import ursolendosemcor from "../../assets/images/AreaEnsino-img/ursolendo-sem-cor.png"
import dinossaurosemcor from "../../assets/images/AreaEnsino-img/dinossauro-sem-cor.png"
import fliperamasemcor from "../../assets/images/AreaEnsino-img/fliperama-sem-cor.png"
import aula from "../../assets/video/AreaEnsino-video/aula.mp4"
import arcoiris from "../../assets/images/AreaEnsino-img/arcoiris.png"
import estrelas from "../../assets/images/AreaEnsino-img/estrelas.png"
import estrela from "../../assets/images/AreaEnsino-img/estrela.png"
import lua from "../../assets/images/AreaEnsino-img/lua.png"
import ursolendocolorido from "../../assets/images/AreaEnsino-img/ursolendo-colorido.png"
import dinossaurocolorido from "../../assets/images/AreaEnsino-img/dinossauro-colorido.png"
import fliperamacolorido from "../../assets/images/AreaEnsino-img/fliperama-colorido.png"


function Atividade(){
    return(
        <>
        <section id="VideoAulaSec">
            <div className="VideoAulaHeader">
                <img src={logo} alt="" />
            </div>

            <div className="MenuVideoAula">
                <a href="/VideoAula"><img src={laptopcolorido} alt="" /></a>
                <a href="/Trilha"><img src={ursolendosemcor} alt="" /></a>
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

export default Atividade