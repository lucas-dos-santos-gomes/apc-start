import "../AreaPsicopedagogia/Inicio.css";
import Professora from "../../assets/images/Areapsicopedagogica-img/Psicopedagoga.png"


function Inicio (){
    return (
        <>
            <section id="Section">
                <div className="Inicio">
                    <div className="texto">

                    <h1> AMBIENTE  <span className="psicopedagogia">PSICOPEDAGÓGICO</span></h1>

                    </div>

                    <div className="Botao">
                        <button className="saibamais">
                            <p>Saiba Mais</p>
                        </button>
                        <button className="agendamentos">
                            <p>Agendamentos</p>
                        </button>
                    </div>
                </div>

                <div className="Professora-img">
                    <img src={Professora} alt="" />
                </div>
            </section>
        </>
        
    )
}
export default Inicio