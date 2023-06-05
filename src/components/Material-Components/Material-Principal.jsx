import "../Material-Components/Material-Principal.css"
import LivrosEmpilhados from "../../assets/images/Material-img/livros-empilhados.png"

function MaterialPrincipal(){
    return(
        <>
        <section id="Material-principal">
            <div className="principal">
                <div className="Materi-titulo">
                    <h1><span class="mat-blue">MATERIAIS</span> <span class="mat-yellow">DE</span> <span class="mat-red">ESTUDO</span></h1>
                </div>
        
                <div className="livros-principal">
                    <img src={LivrosEmpilhados} alt=""/>
                </div>
            </div>
        </section>
        </>
        
    )
}

export default MaterialPrincipal