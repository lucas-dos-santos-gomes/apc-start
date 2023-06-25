import "./AtividadeComponent.css"

import logo from "../../assets/images/logo.png"
import laptopcolorido from "../../assets/images/AreaEnsino-img/laptop-colorido.png"
import laptopsemcor from "../../assets/images/AreaEnsino-img/laptop-sem-cor.png"
import dinossaurosemcor from "../../assets/images/AreaEnsino-img/dinossauro-sem-cor.png"
import fliperamasemcor from "../../assets/images/AreaEnsino-img/fliperama-sem-cor.png"
import ursolendocolorido from "../../assets/images/AreaEnsino-img/ursolendo-colorido.png"
import dinossaurocolorido from "../../assets/images/AreaEnsino-img/dinossauro-colorido.png"
import fliperamacolorido from "../../assets/images/AreaEnsino-img/fliperama-colorido.png"
import borracha from "../../assets/images/AreaEnsino-img/borracha.png"


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
                <a href="/Musica"><img src={dinossaurosemcor} alt="" /></a>
                <a href="/Jogos"><img src={fliperamasemcor} alt="" /></a>
            </div>
            
            <div className="Atividades">
                <div className="atividade">
                    <a href="" className="Amarelo">Atividade 1</a>
                    <a href="" className="Jade">Atividade 2</a>
                </div>
            </div>

            <div className="Atividades">
                <div className="atividade">
                    <a href="" className="Barro">Atividade 3</a>
                    <a href="" className="RosaClaro">Atividade 4</a>
                </div>
            </div>

            <div className="Atividades">
                <div className="atividade">
                    <a href="" className="RoxoAti">Atividade 5</a>
                    <a href="" className="AzulEscuro">Atividade 6</a>
                </div>
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