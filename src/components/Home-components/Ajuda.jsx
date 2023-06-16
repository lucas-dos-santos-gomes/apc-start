
import "../Home-components/Ajuda.css"

function Ajuda(){
    return(
        <>
        <section id="Ajudasec">
            <div className="titulo">
                <h1>Ajuda</h1>
            </div>

            <div className="ajuda-compo">
                <div className="ajuda-info">
                    <h2>Ficou com duvida?</h2>
                    <p>Diga Olá! <br /> <br/> Envie sua mensagem agora mesmo</p>
                </div>

                <div className="ajuda-contato">
                    <div className="Forms-dados">
                        <input type="Nome" placeholder="Nome" />

                        <input type="email" placeholder="Email"/> 
                    </div>
                    
                    <div className="Forms-mensagem">
                    <textarea name="mensagem" placeholder="Mensagem" required></textarea>
                    </div>
                    
                    <button className="Entre-contato"><a href="#">Entre em contato</a></button>
                </div>

                <div className="ajuda-central">
                    <p>Nosso atendimento é de segunda a sexta-feira, das 9h às 18h, mas nossa Central de Ajuda está sempre a sua disposição caso queira conhecer mais sobre a nossa plataforma!</p>
                    <button className="btn-central"><a href="#">Central de Ajuda</a></button>
                    <p>Se você é o responsável ou professor e precisa de suporte, clique no botão acima.</p> <br />
                    <p style={{color:"#FAB84B"}}>• E-mail: suporte@apc.com.br</p>
                </div>
            </div>
        </section>
        </>
        
    )
}

export default Ajuda