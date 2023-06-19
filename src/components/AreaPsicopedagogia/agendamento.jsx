import "./agendamento.css"
import Avatar from "../../assets/images/Areapsicopedagogica-img/Avatar.png"
import calendarios from "../../assets/images/Areapsicopedagogica-img/calendarios.png"

function Agendamento (){
    return(
        <>
        <section id="Agendamento">

            <div className="Avatar">
                <img src={Avatar} alt="" />
            </div>

            <div className="botao">
                <button>Agendamentos</button>
            </div>

            <div className="Calendario">
                <img src={calendarios} alt="" />
            </div>

        </section>
        </>
    )
}
export default  Agendamento