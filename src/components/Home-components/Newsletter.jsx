import "../Home-components/Newsletter.css"

function Newsletter(){
    return(
        <>
        <section id="Newslettersec">
            <div className="titulo">
                <h1>Assine nossa Newsletter</h1>
            </div>

            <div className="News-email">
                <p>Fique por dentro de todas as novidades.</p>
                <div className="News-forms">
                    <input type="Email" placeholder="Seu e-mail" id="Txtemail"/>
                    <button id="InsBtn">Assinar</button>
                </div>
            </div>
        </section>

        </>
        
    )
}

export default Newsletter