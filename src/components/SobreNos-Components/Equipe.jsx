import "../SobreNos-Components/Equipe.css"

import EquipeTitulo from "../../assets/images/SobreNos-img/Equipe.png"
import Caio from "../../assets/images/SobreNos-img/Caio.jpeg"
import Maciel from "../../assets/images/SobreNos-img/Maciel.jpeg"
import Lucas from "../../assets/images/SobreNos-img/Lucas.jpeg"
import Annyk from "../../assets/images/SobreNos-img/Annyk.jpeg"
import Brenda from "../../assets/images/SobreNos-img/Brenda.jpeg"
import Kath from "../../assets/images/SobreNos-img/Kath.jpeg"
import Gabriel from "../../assets/images/SobreNos-img/Gabriel.jpeg"


function Equipe(){
    return(
        <>
        <section id="EquipeSec">
            <div className="EquipeTitulo">
                <img src={EquipeTitulo} alt="Título Equipe" />
                <hr />
            </div>

            <div className="EquipeImgs">
                <div className="Equipeimg">
                    <img src={Caio} alt="" />
                    <p>Caio Oliveira</p>
                    <p><span className="FuncaoColor">Product Owner</span></p>
                </div>
                <div className="Equipeimg">
                    <img src={Lucas} alt="" />
                    <p>Lucas Guedes</p>
                    <p><span className="FuncaoColor">Scrum Master</span></p>
                </div>
                <div className="Equipeimg">
                    <img src={Annyk} alt="" />
                    <p>Annyk De Amantis</p>
                    <p><span className="FuncaoColor">Diretora Financeira</span></p>
                </div>
                <div className="Equipeimg">
                    <img src={Brenda} alt="" />
                    <p>Brenda Gomes</p>
                    <p><span className="FuncaoColor">Front End</span></p>
                </div>
            </div>
            <div className="EquipeImgs">
                <div className="Equipeimg">
                    <img src={Maciel} alt="" />
                    <p>Kayque Maciel</p>
                    <p><span className="FuncaoColor">Front End</span></p>
                </div>
                <div className="Equipeimg">
                    <img src={Kath} alt="" />
                    <p>Kath Gomes</p>
                    <p><span className="FuncaoColor">Front End</span></p>
                </div>
                <div className="Equipeimg">
                    <img src={Gabriel} alt="" />
                    <p>Gabriel Silva</p>
                    <p><span className="FuncaoColor">Front End</span></p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Equipe