import "../Faq/Inicio.css"
import lupa from "../../assets/images/Faq-img/lupa.png"



function Inicio (){
    return (
        <>
        <section id="Section-inicio">

            <div className="container">

                    <h1>Como podemos te ajudar?</h1>

                <div className="Barra-de-pesquisa">

                    <input  className="Buscar"   type="text" placeholder="Digite suas perguntas aqui" />

                    <div className="lupa">

                        <img src={lupa} alt="" />

                    </div>

                </div>
            </div>  
        </section>
        </>
    )
}
export default Inicio