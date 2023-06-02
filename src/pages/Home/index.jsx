import Header from "../../components/Header/Header"
import Inicio from "../../components/Home-components/Inicio"
import Metodologia from "../../components/Home-components/Metodologia"
import Beneficios from "../../components/Home-components/Beneficios"
import Ajuda from "../../components/Home-components/Ajuda"
import Newsletter from "../../components/Home-components/Newsletter"
import Footer from "../../components/Footer/Footer"

function Home(){
    return(
        <>
            <Header/>
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