import Botao from "../../Components/Button";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import styled from "styled-components";

const ContainerVideo = styled.div`
  main {
    display: flex;

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: black;
    width: 100%;
    img{
      width: 200px;
      height:220px;
    }
    h2 {
      color: white;

    }
  }
  div {
    margin: 12px 12px;
  }
`;

const Categoria1 = styled.div`
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
`;
const Categoria2 = styled.div`
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
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
            <h2>categoria 1</h2>
          </div>
          <Categoria1>
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
          </Categoria1>
          <div>
            <h2>categoria 2</h2>
          </div>
          <Categoria2>
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
          </Categoria2>
        </main>
      </ContainerVideo>
      <Footer />
    </>
  );
}
