import Nivel1 from "../../components/Trilha-Components/Nivel1"
import Nivel2 from "../../components/Trilha-Components/Nivel2"
import Nivel3 from "../../components/Trilha-Components/Nivel3"
import Nivel4 from "../../components/Trilha-Components/Nivel4"
import Footer from "../../components/Footer/Footer"
import MenuHamburguer from "../../components/MenuHamburguer/Menu"
import UserButton from "../../components/UserButton"

function Trilha(){
    return(
        <>  
            <MenuHamburguer/>
            <Nivel1/>
            <Nivel2/>
            <Nivel3/>
            <Nivel4/>
            <UserButton />
            <Footer/>
        </>
    )
}

export default Trilha