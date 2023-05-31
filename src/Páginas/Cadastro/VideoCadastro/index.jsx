import React from "react";
import styled from "styled-components";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import Botao from "../../../Components/Button";
import CampoTexto from "../../../Components/CampoTexto";

const Container = styled.div`
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
  input:nth-child(5) {
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
`;
const ContainerBTN = styled.div`
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
  }

  /* Estilos para telas maiores que 960px */
  @media (max-width: 960px) {
    a:nth-child(3) {
      position: absolute;
      display: none;
    }
  }
`;

export default function NovoVideo() {
  return (
    <>
      <Header />
      <main>
        <form>
          <div>
            <Container className="container">
              <div>
                <title>Novo Vídeo</title>
              </div>

              <CampoTexto
                label="Título"
                InputProps={{
                  style: { borderColor: "white" },
                }}
                focused
              />
              <CampoTexto label="Link do Vídeo" />
              <CampoTexto label="Link da imagem do Vídeo" />
              <CampoTexto label="Escolha uma Categoria" />
              <CampoTexto label="Descrição" />
              <CampoTexto
                className="codigo__seguranca"
                label="Código de Segurança"
              />
              <nav>
                <ContainerBTN>
                  <Botao>salvar</Botao>

                  <Botao>limpar</Botao>

                  <Botao className="ultimo__botao" to="/novacategoria">
                    Nova Categoria
                  </Botao>
                </ContainerBTN>
              </nav>
            </Container>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
