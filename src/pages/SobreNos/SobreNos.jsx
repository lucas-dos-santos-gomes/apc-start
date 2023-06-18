import Principal from "../../components/SobreNos-Components/Principal"
import QuemSomos from "../../components/SobreNos-Components/QuemSomos"
import Missao from "../../components/SobreNos-Components/Missao"
import Sobre from "../../components/SobreNos-Components/Sobre"
import Jornada from "../../components/SobreNos-Components/Jornada"
import Equipe from "../../components/SobreNos-Components/Equipe"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import MenuHamburguer from "../../components/MenuHamburguer/Menu"

function SobreNos(){
    return(
        <>
            <Header/>
            <MenuHamburguer/>
            <Principal/>
            <QuemSomos/>
            <Missao/>
            <Sobre/>
            <Jornada/>
            <Equipe/>
            <Footer/>
        </>
    )
}

export default SobreNos