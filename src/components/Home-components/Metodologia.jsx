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
                    <img src="./src/assets/img/home/dados.png" alt=""/>
                    <div>
                    <h2>Baseada em <span className="Gold">dados</span></h2>
                    <h3>Abordagem pegagógica estrategica, baseada em dados que relevam as necessidades do estudante.</h3>
                    </div>
                    
                </div>
            
                <div className="papo">
                    <img src="./src/assets/img/home/bate-papo.png" alt=""/>
                    <div>
                    <h2>Alto engajamento dos <span className="Gold">alunos</span></h2>
                    <h3>Experiências dinâmicas e de alto engajamento.</h3>
                    </div>
                    
                </div>
                </div>
                
                <div className="img-meto">
                <img src="./src/assets/img/home/cara-sentado-lendo.png" alt=""/>
                </div>
            </div>
        </section>
        </>
        
    )
}

export default Metodologia