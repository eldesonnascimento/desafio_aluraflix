import React from "react";
import styled from "styled-components";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import Botao from "../../../Components/Button";

const Container = styled.div`
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
    text-align: center;
    display: block;
    height: 70px;
    width: 299px;
  }

  label {
    display: block;
    color: #f5f5f5;
  }

  input {
    width: calc(100% - 5.55%);
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
`;

export default function NovoVideo() {
  return (
    <>
      <Header />
      <main>
        <form>
          <div>
            <Container>
              <div>
                <title>Novo Vídeo</title>
              </div>

              <ul>
                <li>
                  <input type="text" placeholder="Título"></input>
                </li>

                <li>
                  <input type="text" placeholder="Link do Vídeo"></input>
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Link da imagem do Vídeo"
                  ></input>
                </li>
                <li>
                  <input type="text" placeholder="Escolha a categoria"></input>
                </li>
                <li>
                  <input type="text" placeholder="Descrição"></input>
                </li>
                <li>
                  <input placeholder="Código de Segurança"></input>
                </li>
              </ul>

              <nav>
                <ContainerBTN>
                  <Botao>salvar</Botao>

                  <Botao>limpar</Botao>

                  <Botao to="/novacategoria">Nova Categoria</Botao>
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
