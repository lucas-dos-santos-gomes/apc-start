import VideoAulaComponent from "../../components/AreaEnsino-Components/VideoAulaComponent"
import MenuHamburguer from "../../components/MenuHamburguer/Menu"
import UserButton from "../../components/UserButton"

function VideoAula(){
    return(
        <>
        <MenuHamburguer/>
        <VideoAulaComponent/>
        <UserButton />
        </>
    )
}

export default VideoAula