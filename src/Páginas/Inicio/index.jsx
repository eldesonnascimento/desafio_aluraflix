import Botao from "../../Components/Button";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function Inicio(){
  return(
    <>
      <Header>
        <Botao to="/novovideo">Novo Vídeo</Botao>
      </Header>
      <Footer/>
    </>
    
  )
}