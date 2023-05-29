import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Post from "./Post";
import {StyledBlog, StyledNewsLetter, StyledNoticias} from "./styles"
import Blog_noticia1 from '../../assets/Blog_noticia1.png'
import Blog_noticia2 from '../../assets/Blog_noticia2.png'
import Blog_noticia3 from '../../assets/Blog_noticia3.png'
import Blog_noticia4 from '../../assets/Blog_noticia4.png'
import Blog_noticia5 from '../../assets/Blog_noticia5.png'



const dados = [
    {
    imageSource: Blog_noticia1,
    titulo: "Carreira",
    corpo: "Boas práticas para devs em início de carreira",
    horario: "Há um ano • 4 min de leitura"
},
{
    imageSource: Blog_noticia2,
    titulo: "Carreira",
    corpo: "Next Level Week: os caminhos que trilhamos até aqui",
    horario: "Há um ano • 6 min de leitura"
},
{
    imageSource: Blog_noticia3,
    titulo: "Clean-code",
    corpo: "Codigo Limpo: reflexão e prática",
    horario: "Há um ano • 3 min de leitura"
},
{
    imageSource: Blog_noticia4,
    titulo: "Prisma",
    corpo: "Prisma: uma das melhores coisas que já aconteceu no ecossistema",
    horario: "Há um ano • 3 min de leitura"
},
{
    imageSource: Blog_noticia5,
    titulo: "Comunidade",
    corpo: "Comunidade: Guia prático de como contribuir para o ecossistema de tecnologia",
    horario: "Há um ano • 4 min de leitura"
}
]

export default function Blog() {
    
    const noticias = dados.map(n => (
        <Post dados={n} key={dados.imageSource}></Post>
    ))
    
    console.log(noticias)
    return (
    <>
        <Header underline="Blog"></Header>
        <StyledBlog>
        <StyledNewsLetter>
            <div>
                <h1>Blog da Rocketseat</h1>
                <p>Junte-se a milhares de devs e acelere na direção dos seus objetivos. Transforme sua carreira em uma jornada de evolução contínua através das melhores tecnologias.</p>
                <button>Inscreva-se em nossa newsletter</button>
            </div>
        </StyledNewsLetter>
        <StyledNoticias>
            {noticias}
        </StyledNoticias>
        </StyledBlog>
        <Footer></Footer>
    </>
    )
}
