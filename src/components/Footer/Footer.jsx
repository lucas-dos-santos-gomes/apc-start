import facebook from "../../assets/images/footer-img/facebook.png"
import github from "../../assets/images/footer-img/github.png"
import instagram from "../../assets/images/footer-img/instagram.png"
import linkedin from "../../assets/images/footer-img/linkedin.png"

import "../Footer/Footer.css"

function Footer(){
    return(
        <>
        <footer id="Footer-principal">
            <div className="Links">
                <ul>
                    <li><h3>Transparencia</h3></li>
                    <li><a href="#">Politica de Privacidade</a></li>
                    <li><a href="#">Politica de Segurança</a></li>
                </ul>
            </div>

            <div className="Links">
                <ul>
                    <li><h3>Ouvidoria</h3></li>
                    <li><a href="#">ouvidoria@apc.com.br</a></li>
                </ul>
            </div>
            
            <div className="Links">
                <ul>
                    <li><h3>Fale com a gente</h3></li>
                    <li><a href="#">(xx)xxxxx-xxxx</a></li>
                    <li><a href="#">suporte@apc.com.br</a></li>
                </ul>
            </div>

            <div className="Redes">
                <img src={facebook} alt="" />
                <img src={github} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                
            </div>
        </footer>
        </>
        
    )
}

export default Footer