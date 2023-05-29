import "../Home-components/Ajuda.css"

function Newsletter(){
    return(
        <>
        <section id="Newsletter">
            <div class="titulo">
                <h1>Assine nossa Newsletter</h1>
            </div>

            <div class="News-email">
                <p>Fique por dentro de todas as novidades.</p>
                <div class="News-forms">
                    <input type="text" placeholder="Seu e-mail" id="Txtemail"/>
                    <button id="InsBtn">Assinar</button>
                </div>
            </div>
        </section>

        </>
        
    )
}

export default Newsletter