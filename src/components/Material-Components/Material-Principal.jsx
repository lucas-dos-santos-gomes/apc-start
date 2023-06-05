import "../Material-Components/Material-Principal.css"

function MaterialPrincipal(){
    return(
        <>
        <section id="Material-principal">
            <div className="principal">
                <div className="Materi-titulo">
                    <h1><span class="mat-blue">MATERIAIS</span> <span class="mat-yellow">DE</span> <span class="mat-red">ESTUDO</span></h1>
                </div>
        
                <div className="livros-principal">
                    <img src="/src/assets/img/material/livros-empilhados.png" alt=""/>
                </div>
            </div>
        </section>
        </>
        
    )
}

export default MaterialPrincipal