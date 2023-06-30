import {Link} from "react-router-dom"

import logo from "../../assets/images/logo.png"
import "../Header/Header.css"

function Header(){
    return(
        <>
        <header id="header-principal">
            <nav className="nav-header">
                <img id="Logo" src={logo} alt="Logo da plataforma" />
                <ul className="nav-list">
                    <li><Link to="/">Início</Link></li>
                    <li><a href="#Metodologiasec">Metodologia</a></li>
                    <li><a href="#Beneficiossec">Benefícios</a></li>
                    <li><a href="#Ajudasec">Ajuda</a></li>
                    <li><a href="#">Depoimentos</a></li> 
                    <li><a href="/Perfil">Plataforma</a></li>
                </ul>
            </nav>
        </header>
        </>
        
    )
}

export default Header