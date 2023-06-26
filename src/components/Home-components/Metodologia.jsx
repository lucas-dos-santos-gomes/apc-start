import batepapo from "../../assets/images/home-img/bate-papo.png"
import grafico from "../../assets/images/home-img/grafico.png"
import homemlampada from "../../assets/images/home-img/cara-sentado-lendo.png"


import "../Home-components/Metodologia.css"

function Metodologia(){
    return(
        <>
        <section id="Metodologiasec">
            <div className="titulo">
                <h1>Metodologia de ensino</h1>
            </div>
            

            <div className="Cont-meto">
                <div className="Info-meto">
                    <div className="dados">
                        <img src={grafico} alt="Imagem de gráfico"/>
                        <div>
                        <h2>Baseada em <span className="Gold">dados</span></h2>
                        <h3>Abordagem pegagógica estrategica, baseada em dados que relevam as necessidades do estudante.</h3>
                    </div>
                    
                </div>
            
                <div className="papo">
                    <img src={batepapo} alt="imagem de balão do bate papo"/>
                    <div>
                        <h2>Alto engajamento dos <span className="Gold">alunos</span></h2>
                        <h3>Experiências dinâmicas e de alto engajamento.</h3>
                    </div>
                    
                </div>
                </div>
                
                <div className="img-meto">
                    <img src={homemlampada} alt="imagem de um homem sentado em uma lampada"/>
                </div>
            </div>
        </section>
        </>
        
    )
}

export default Metodologia