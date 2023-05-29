import notebook from "../../assets/images/home-img/note-com-jogos.png"
import pessoasfalando from "../../assets/images/home-img/pessoas-falando.png"
import meninoeletras from "../../assets/images/home-img/menino-e-letras.png"

import "../Home-components/Beneficios.css"

function Beneficios(){
    return(
        <>
        <section id="Beneficiossec">
            <div className="titulo">
                <h1>Benefícios</h1>
            </div>

            <div className="bene-infos">
                <div className="bene-compo">
                    <h2>Jogos educativos</h2>
                    <img src={notebook} alt=""/>
                </div>

                <div className="bene-compo">
                    <h2>Auxilio de Psicopedagogas e Psicólogos</h2>
                    <img src={pessoasfalando} alt=""/>
                </div>

                <div className="bene-compo">
                    <h2>Comunidade Interativa entre os Alunos</h2>
                    <img src={meninoeletras} alt=""/>
                </div>
            </div>
        </section>
        </>
        
    )
}

export default Beneficios