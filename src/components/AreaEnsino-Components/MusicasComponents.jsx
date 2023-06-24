import "./MusicasComponents.css"

import logo from "../../assets/images/logo.png"
import laptopcolorido from "../../assets/images/AreaEnsino-img/laptop-colorido.png"
import laptopsemcor from "../../assets/images/AreaEnsino-img/laptop-sem-cor.png"
import fliperamasemcor from "../../assets/images/AreaEnsino-img/fliperama-sem-cor.png"
import ursolendocolorido from "../../assets/images/AreaEnsino-img/ursolendo-colorido.png"
import dinossaurocolorido from "../../assets/images/AreaEnsino-img/dinossauro-colorido.png"
import fliperamacolorido from "../../assets/images/AreaEnsino-img/fliperama-colorido.png"
import ursolendosemcor from "../../assets/images/AreaEnsino-img/ursolendo-sem-cor.png"
import notasmusicais from "../../assets/images/AreaEnsino-img/notas-musicais.png"
import bichoouvindo from "../../assets/images/AreaEnsino-img/bicho-ouvindo.png"
import guitarras from "../../assets/images/AreaEnsino-img/guitarras.png"
import notamusical from "../../assets/images/AreaEnsino-img/nota-musical.png"


function MusicasComponents(){
    return(
        <>
        <section id="MusicaSec">
            <div className="MusicaHeader">
                <img src={logo} alt="" />
            </div>

            <div className="MenuMusica">
                <a href="/VideoAula"><img src={laptopsemcor} alt="" /></a>
                <a href="/Atividade"><img src={ursolendosemcor} alt="" /></a>
                <a href="/Musica"><img src={dinossaurocolorido} alt="" /></a>
                <a href="/Jogos"><img src={fliperamasemcor} alt="" /></a>
            </div>

            <div className="musicas">
                <img src={notasmusicais} alt="" className="imagem-decoracao"/>

                <div className="musica">
                    <img src="https://placehold.co/250x120" alt="" />
                </div>
                <div className="musica">
                    <img src="https://placehold.co/250x120" alt="" />
                </div>
                <div className="musica">
                    <img src="https://placehold.co/250x120" alt="" />
                </div>

                <img src={bichoouvindo} alt="" className="imagem-decoracao"/>
            </div>
            
            <div className="musicas">
                <img src={guitarras} alt="" className="imagem-decoracao"/>

                <div className="musica">
                    <img src="https://placehold.co/250x120" alt="" />
                </div>
                <div className="musica">
                    <img src="https://placehold.co/250x120" alt="" />
                </div>
                <div className="musica">
                    <img src="https://placehold.co/250x120" alt="" />
                </div>

                <img src={notamusical} alt="" className="imagem-decoracao" />
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

export default MusicasComponents