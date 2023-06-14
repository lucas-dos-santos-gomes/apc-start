import "../SobreNos-Components/Equipe.css"

import EquipeTitulo from "../../assets/images/SobreNos-img/Equipe.png"
import perso1 from "../../assets/images/SobreNos-img/perso1.png"


function Equipe(){
    return(
        <>
        <section id="EquipeSec">
            <div className="EquipeTitulo">
                <img src={EquipeTitulo} alt="" />
                <hr />
            </div>

            <div className="EquipeImgs">
                <div className="Equipeimg">
                    <img src={perso1} alt="" />
                    <p>Caio Oliveira</p>
                    <p><span className="FuncaoColor">Product Owner</span></p>
                </div>
                <div className="Equipeimg">
                    <img src={perso1} alt="" />
                    <p>Lucas Guedes</p>
                    <p><span className="FuncaoColor">Scrum Master</span></p>
                </div>
                <div className="Equipeimg">
                    <img src={perso1} alt="" />
                    <p>Annyk De Amantis</p>
                    <p><span className="FuncaoColor">Diretora Financeira</span></p>
                </div>
                <div className="Equipeimg">
                    <img src={perso1} alt="" />
                    <p>Brenda Gomes</p>
                    <p><span className="FuncaoColor">Front End</span></p>
                </div>
            </div>
            <div className="EquipeImgs">
                <div className="Equipeimg">
                    <img src={perso1} alt="" />
                    <p>Kayque Maciel</p>
                    <p><span className="FuncaoColor">Front End</span></p>
                </div>
                <div className="Equipeimg">
                    <img src={perso1} alt="" />
                    <p>Kath Gomes</p>
                    <p><span className="FuncaoColor">Front End</span></p>
                </div>
                <div className="Equipeimg">
                    <img src={perso1} alt="" />
                    <p>Gabriel Silva</p>
                    <p><span className="FuncaoColor">Front End</span></p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Equipe