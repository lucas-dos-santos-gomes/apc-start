import AtividadeComponent from "../../components/AreaEnsino-Components/AtividadeComponent"
import MenuHamburguer from "../../components/MenuHamburguer/Menu"
import UserButton from "../../components/UserButton"

function Atividade(){
    return(
        <>
        <MenuHamburguer/>
        <AtividadeComponent/>
        <UserButton />
        </>
    )
}

export default Atividade