import Header from "../../components/Header/Header"
import Inicio from "../../components/AreaPsicopedagogia/Inicio"
import Instrucao from "../../components/AreaPsicopedagogia/instrucao"
import Agendamento from "../../components/AreaPsicopedagogia/agendamento"




function AreaPsicopedagogia(){
    return(
        <>
            <Header/>
            <Inicio/>
            <Instrucao/>
            <Agendamento />
            
        </>
    )
}

export default AreaPsicopedagogia