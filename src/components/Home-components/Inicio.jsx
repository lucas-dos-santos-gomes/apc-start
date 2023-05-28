import "../Home-components/Inicio.css"

function Inicio(){
    return(
        <>
        <section id="Iniciosec">
            <div className="Info">
                <h1><span className="Yellow">A</span><span className="Blue">P</span><span className="Pink">C</span> é uma plataforma Web desenvolvida para criar mais <span className="Gold">oportunidades</span></h1>

                <div class="buttons">
                    <a class="btn-sobre">Sobre Nós</a>
                    <a class="btn-acesso">Acessar a plataforma</a>
                </div>
            </div>

                <div class="Met-image">
                    <img src="https://placehold.co/400x400" alt=""/>
                </div>
        </section>
        </>
        
    )
}

export default Inicio