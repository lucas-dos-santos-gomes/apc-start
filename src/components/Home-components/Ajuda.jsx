import email from "../../assets/images/home-img/email-icone.png"
import whats from "../../assets/images/home-img/whats-icone.png"

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
                    <p>Nosso time de Suporte está sempre pronto para te ajudar, é só escolher o canal de sua preferência:</p>
                </div>

                <div className="ajuda-contato">
                    <img src={email} alt=""/>
                    <ul>
                        <li>E-mail: suporte@apc.com.br</li>
                        <li>Telefone: (xx) xxxx-xxx</li>
                    </ul>
                    <img src={whats} alt=""/>
                </div>

                <div className="ajuda-central">
                    <p>Nosso atendimento é de segunda a sexta-feira, das 9h às 18h, mas nossa Central de Ajuda está sempre a sua disposição caso queira conhecer mais sobre a nossa plataforma!</p>
                    <button className="btn-central">Central de Ajuda</button>
                    <p>Se você é o responsável ou professor e precisa de suporte, clique no botão acima.</p>
                </div>
            </div>
        </section>
        </>
        
    )
}

export default Ajuda