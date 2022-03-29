import About from './components/About';
import Carrossel from './components/Carrossel';
import Header from './components/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from './components/Projects';
import Tecnologias from './components/Tecnologias';
import Footer from './components/Footer';

function App() {

  function irAte(posicao){
    const local = document.getElementById(posicao)
    console.log(local, typeof posicao)
    local.scrollIntoView({behavior: "smooth"})
  }



  return (
    <>
    <Header onClick={irAte} conteudo={[{c: "About"}, {c: "Projetos"}, {c: "Contato"}]}/>
    <About/>
    <Carrossel />
    <Projects/>
    <Tecnologias/>
    <Footer/>
    </>
  );
}

export default App;
