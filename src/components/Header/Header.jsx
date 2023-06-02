import logo from "../../assets/images/logo.png"
import "../Header/Header.css"

function Header(){
    return(
        <>
        <header id="header-principal">
            <nav className="nav-header">
                <img id="Logo" src={logo} alt="" />
                <ul className="nav-list">
                    <li><a href="">Início</a></li>
                    <li><a href="">Metodologia</a></li>
                    <li><a href="">Benefícios</a></li>
                    <li><a href="">Ajuda</a></li>
                    <li><a href="">Depoimentos</a></li> 
                    <li><a href="">Plataforma</a></li> 
                </ul>
            </nav>
        </header>
        </>
        
    )
}

export default Header