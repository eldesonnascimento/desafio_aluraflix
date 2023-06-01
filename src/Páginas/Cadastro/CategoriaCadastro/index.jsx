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
  padding: 30px;
  height: 100vh;
  
  

  title {
    color: white;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 20px;
  }

  label {
    color: #f5f5f5;
    
  }

  input {
    background-color: #404142;
    color: white;
    border: none;
    padding-left: 8px;
    border-radius: 4px;
    
  }
  input:focus{
    
    color: #f5f5f5;
    background-color: black;
    border-radius: 6px;
    padding-left:6px;
    margin:5px;
  }
  input::placeholder {
    color: white;
  }
 

`;
const DivBTNCadastro = styled.div`
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
    .container {
      height: 37.3563232421875px;
      width: 299px;
    }
    a:nth-child(3) {
      display: none;
      position: absolute;
    }
  }`
function NovaCategoria() {
  return (
    <>
      <Header />
      <main>
        <form>
          <div>
            <ContainerCadastro>
              <div>
                <title>Nova Categoria</title>
              </div>
              <CampoTexto label="Nome" type={"text"} />
              <CampoTexto label="Descrição" type={"text"}/>
              <CampoTexto type={"color"} />
              <CampoTexto label="Código de Segurança" type={"text"} />
              
              <nav>
                <DivBTNCadastro>
                  <Botao>salvar</Botao>

                  <Botao>limpar</Botao>
                </DivBTNCadastro>
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
