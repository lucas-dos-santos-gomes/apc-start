import "../Material-Components/Material-info.css"
import LivrosEncostados from "../../assets/images/Material-img/livros-encostados.png"
import LivroAberto from "../../assets/images/Material-img/livro-aberto.png"

function MaterialInfo(){
    return(
        <>
        <section id="Material-info">
            <div className="livro-encostado">
                <img src={LivrosEncostados} alt=""/>
            </div>

            <div className="Mate-texto">
                <p>Apresentamos nossa página de materiais de aula, onde você encontrará recursos educacionais de alta qualidade para apoiar o processo de aprendizagem dos seus alunos. Desde planos de aula prontos até atividades educativas interativas, nossos materiais foram criados por educadores experientes para oferecer o melhor suporte possível. Explore nossos recursos educacionais e enriqueça suas aulas com o que há de mais atual no mundo da educação.</p>
            </div>
                
            <div className="livro-aberto">
                <img src={LivroAberto} alt=""/>
            </div>
        </section>

        </>
        
    )
}

export default MaterialInfo