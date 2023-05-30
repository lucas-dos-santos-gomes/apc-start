import Inicio from "../../components/Home-components/Inicio"
import Metodologia from "../../components/Home-components/Metodologia"
import Beneficios from "../../components/Home-components/Beneficios"
import Ajuda from "../../components/Home-components/Ajuda"
import Newsletter from "../../components/Home-components/Newsletter"

function Home(){
    return(
        <>
            <Inicio/>
            <Metodologia/>
            <Beneficios/>
            <Ajuda/>
            <Newsletter/>
        </>
    )
}

export default Home