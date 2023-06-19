import imgvideo from "../../assets/images/Areapsicopedagogica-img/img-video.png"
import "./instrucao.css"

function instrucao(){
    return (
        <>
        <section id="explicacao">
          <div className="Textos">
                <p>Bem-vindo à página de agendamento de terapia da <span className="A">A</span> <span className="P">P</span> 
                <span className="C">C</span> <span className="S">S</span> <span className="T">T</span> <span className="A">A</span> <span className="R">R</span> <span className="T">T</span> Aqui, você pode marcar uma consulta para receber suporte emocional e cuidado profissional. Nossa plataforma oferece um ambiente seguro para agendar sessões de terapia com nossos especialistas qualificados. Reserve sua sessão agora mesmo e dê o primeiro passo em direção a uma vida mais equilibrada. Estamos aqui para apoiá-lo em sua jornada de autocuidado. </p>
            </div>

            <div className="Video">
                <div className="play">
                    <img src={imgvideo} alt="" />
                </div>
            </div>
            </section>
        </>
    )
}
export default instrucao