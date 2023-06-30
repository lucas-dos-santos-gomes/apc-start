import meninasegurandolivro from "../../assets/images/home-img/menina-segurando-livro.png"
import "../Home-components/Inicio.css"

function Inicio(){
    return(
        <>
        <section id="Iniciosec">
            <div className="Info">
                <h1><span className="Yellow">A</span><span className="Blue">P</span><span className="Pink">C</span> é uma plataforma Web desenvolvida para criar mais <span className="Gold">oportunidades</span></h1>

                <div className="buttons">
                    <a href="/SobreNos"className="btn-sobre">Sobre Nós</a>
                    <a href="/Trilha" className="btn-acesso">Acessar a plataforma</a>
                </div>
            </div>

                <div className="Prin-image">
                    <img src={meninasegurandolivro} alt="imagem de menina segurando um livro"/>
                </div>
        </section>
        </>
        
    )
}

export default Inicio