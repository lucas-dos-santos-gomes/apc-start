import "../Faq/Noticia.css"

function Noticia (){
    return (
        <>
        <section id="Newsletter">

            <div className="Assine-nossas-noticias">   

                <h1>Assine nossas Newsletter!</h1>

                <p>Fique por dentro de todas as novidades.</p>

            </div>


            <div className="Assinatura">

                <input type="email" placeholder="E-mail" />

                <button>Assinar</button>
            </div>

        </section>
        </>
    )
}
export default Noticia