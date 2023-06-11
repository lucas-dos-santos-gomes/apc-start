import "../Investidores-Components/Parceiros.css"
import Senac from "../../assets/images/Investidores-img/Senac.png"

function Parceiros(){
    return(
        <>
        <section id="Parceirossec">
            <div className="Parceirosfileira">
                <div className="Parce">
                    <img src={Senac} alt="" />
                </div>  
                <div className="Parce">
                    <img src={Senac} alt="" />
                </div>  
                <div className="Parce">
                    <img src={Senac} alt="" />
                </div>  
                <div className="Parce">
                    <img src={Senac} alt="" />
                </div>  
            </div>
            
        </section>
        </>
        
    )
}

export default Parceiros