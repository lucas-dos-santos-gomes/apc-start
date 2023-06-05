import "../Material-Components/Material-explicacao.css"
import LivroAmarelo from "../../assets/images/Material-img/livro-amarelo.png"
import LivroAzul from "../../assets/images/Material-img/livro-azul.png"
import LivroVermelho from "../../assets/images/Material-img/livro-vermelho.png"

function MaterialExplica(){
    return(
        <>
        <section id="Materiais-explicacao">
            <div className="Mate-explicacao">
                <div className="livro-imagem">
                    <img src={LivroAmarelo} alt=""/>
                </div>

                <div className="livro-texto">
                    <h2><span className="mat-yellow">Alfabetizando com Jogos e Atividades Divertidas</span></h2>
                    <p>Este ebook apresenta uma série de jogos e atividades lúdicas para auxiliar na alfabetização de crianças em idade escolar. Com abordagem didática e divertida, o material oferece estratégias para tornar o processo de aprendizagem mais atrativo e eficaz, além de dicas e sugestões para os professores e pais.</p>
                </div>
            </div>

            <div className="Mate-explicacao">
                <div className="livro-imagem">
                    <img src={LivroAzul} alt=""/>
                </div>

                <div className="livro-texto">
                    <h2><span className="mat-blue">Alfabetizando com Jogos e Atividades Divertidas</span></h2>
                    <p>Com esta apostila, os pais podem auxiliar seus filhos no processo de alfabetização, por meio de atividades simples e eficazes, que podem ser realizadas em casa. O material apresenta exercícios de leitura e escrita, com orientações detalhadas e dicas para tornar o aprendizado mais leve e prazeroso para a criança.</p>
                </div>
            </div>

            <div className="Mate-explicacao">
                <div className="livro-imagem">
                    <img src={LivroVermelho} alt=""/>
                </div>

                <div className="livro-texto">
                    <h2><span className="mat-red">Alfabetizando com Jogos e Atividades Divertidas</span></h2>
                    <p>Este audiolivro leva as crianças a uma jornada lúdica pelo mundo das letras. Com narração envolvente e trilha sonora cativante, a obra apresenta histórias e curiosidades sobre o alfabeto e a linguagem escrita, contribuindo para o desenvolvimento da alfabetização e da imaginação das crianças.</p>
                </div>
            </div>
        </section>
        </>
        
    )
}

export default MaterialExplica