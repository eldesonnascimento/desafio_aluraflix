import Botao from "../../../Components/Button";
import styled from "styled-components";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import CampoTexto from "../../../Components/CampoTexto";

const ContainerCadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 10px;
  background-color: var(--cor-fundo);
  width: 100%;
  padding: 32px;
  height: 100%;

  main {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  title {
    color: white;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 20px;
  }

  label {
    display: block;
    color: #f5f5f5;
  }

  input {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  ul li {
    height: 50px;
    padding-top: 30px;
    list-style: none;
    padding-bottom: 30px;
  }
  ul li input {
    background-color: #53585d;
    color: white;
    border: none;
    padding-left: 8px;
    border-radius: 4px;
    display: block;
  }
  li input:nth-child(5) {
    height: 153px;
  }
  input::placeholder {
    color: white;
  }
  .descricao {
    overflow: auto;
    display: block;
    border: none;
    width: 100%;
    border-radius: 4px;
    color: white;
    resize: none;
    background-color: #53585d;
    place-content: inherit;
    box-sizing: border-box;
  }
  .descricao::placeholder {
    color: white;
    padding-left: 8px;
  }
  .codigo__seguranca {
  }
`;
const ContainerBTNN = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  justify-content: flex-start;
  gap: 1%;

  a {
    width: 180px;
    text-align: center;
  }

  a:nth-child(2) {
    background-color: #9e9e9e;
    color: #000000;
  }
  a:nth-child(3) {
    position: absolute;
    right: 31px;
  }
  /* Estilos para telas maiores que 600px */
  @media (max-width: 300px) {
    a:nth-child(3) {
      display: none;
      position: absolute;
    }
  }

  /* Estilos para telas maiores que 960px */
  @media (max-width: 960px) {
    a:nth-child(3) {
      position: absolute;
      display: none;
    }
  }
`;
function NovaCategoria() {
  return (
    <>
      <Header/>
      <main>
        <form>
          <div>
            <ContainerCadastro>
              <div>
                <title>Novo Vídeo</title>
              </div>
              <CampoTexto label="Nome"  />
              <ul>
                <li>
                  <input placeholder="Nome"></input>
                </li>
                <li>
                  <textarea
                    className="descricao"
                    type="text"
                    placeholder="Descrição"
                  ></textarea>
                </li>
                <li>
                  <input type="color" />
                </li>
                <li>
                  <input type="text" placeholder="Código de segurança" />
                </li>
              </ul>
              <nav>
                <ContainerBTNN>
                  <Botao>salvar</Botao>

                  <Botao>limpar</Botao>
                </ContainerBTNN>
              </nav>
            </ContainerCadastro>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
export default NovaCategoria;
