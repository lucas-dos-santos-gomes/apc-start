import Header from "../../components/Header/Header"
import MaterialPrincipal from "../../components/Material-Components/Material-Principal"
import MaterialInfo from "../../components/Material-Components/Material-info"
import MaterialExplica from "../../components/Material-Components/Material-explicacao"
import Footer from "../../components/Footer/Footer"

function Material(){
    return(
        <>
            <Header/>
            <MaterialPrincipal/>
            <MaterialInfo/>
            <MaterialExplica/>
            <Footer/>
        </>
        
    )
}

export default Material