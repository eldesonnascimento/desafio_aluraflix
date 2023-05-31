import { Container } from "@material-ui/core";
import Botao from "../../Components/Button";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import styled from "styled-components"
const ContainerVideo = styled.div`
  main{
    display: flex;
  flex-direction: row;
 
  flex-wrap: wrap;
  justify-content: center;
  background-color: black;
  width: 100%;
  }
  div{
    margin:32px 32px;
  }
`;
export default function Inicio() {
  return (
    <>
      <Header>
        <Botao to="/novovideo">Novo Vídeo</Botao>
      </Header>
      <ContainerVideo>
        <main>
          <div>
            <img src="http://github.com/franciscocha.png" alt="alura" />
          </div>
          <div>
            <img src="http://github.com/franciscocha.png" alt="alura" />
          </div>
          <div>
            <img src="http://github.com/franciscocha.png" alt="alura" />
          </div>
          <div>
            <img src="http://github.com/franciscocha.png" alt="alura" />
          </div>
          <div>
            <img src="http://github.com/franciscocha.png" alt="alura" />
          </div>
          <div>
            <img src="http://github.com/franciscocha.png" alt="alura" />
          </div>
          <div>
            <img src="http://github.com/franciscocha.png" alt="alura" />
          </div>
          <div>
            <img src="http://github.com/franciscocha.png" alt="alura" />
          </div>
        </main>
      </ContainerVideo>
      <Footer />
    </>
  );
}
