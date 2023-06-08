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
                    <img src={notebook} alt=""/>
                    <div className="bene-expli">
                        <h2>Jogos educativos</h2>
                        <p>Contamos com a ajuda de jogos educativos para tornar o ensino mais ludico, divertido e eficaz para o aluno.</p>
                    </div>
                    
                </div>

                <div className="bene-compo">
                    <div className="bene-expli">
                        <h2>Auxilio de Psicopedagogas e Psicólogos</h2>
                        <p>Suporte e auxilio de pedagogos e psicopedagogos do inicio ao fim dessa jornada.</p>
                    </div>
                    <img src={pessoasfalando} alt=""/>
                </div>

                <div className="bene-compo">
                    <img src={meninoeletras} alt=""/>
                    <div className="bene-expli">
                        <div>
                            <h2>Comunidade Interativa entre os Alunos</h2>
                            <p>Comunidade onde podem interagir com outros alunos e tirarem suas duvidas.</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
        </>
        
    )
}

export default Beneficios