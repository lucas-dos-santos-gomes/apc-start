import Header from "../../components/Header/Header"
import Inicio from "../../components/Home-components/Inicio"
import Metodologia from "../../components/Home-components/Metodologia"
import Beneficios from "../../components/Home-components/Beneficios"
import Ajuda from "../../components/Home-components/Ajuda"
import Newsletter from "../../components/Home-components/Newsletter"
import Footer from "../../components/Footer/Footer"
import MenuHamburguer from "../../components/MenuHamburguer/Menu"


function Home(){
    return(
        <>
            <Header/>
            <MenuHamburguer/>
            <Inicio/>
            <Metodologia/>
            <Beneficios/>
            <Ajuda/>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default Home