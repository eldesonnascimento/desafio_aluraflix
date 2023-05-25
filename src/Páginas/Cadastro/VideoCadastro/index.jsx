import React from "react";
import styled from "styled-components";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import Botao from "../../../Components/Button";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 10px;
  background-color: var(--cor-fundo);
  height: 100vh;
  width: 100vw;

  title {
    display: block;
    text-align: center;
    font-size: 40px;
    color: #f5f5f5;
    margin-bottom: 50px;
  }

  label {
    display: block;
    color: #f5f5f5;
  }

  input {
    width: 94vw;
  }

  textarea {
    width: 94vw;
    border-style: none;
    resize: none;
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
              <div>
                <label>Título</label>
                <input type="text" placeholder="Título"></input>
              </div>

              <div>
                <label>Link do Vídeo</label>
                <input type="text" placeholder="Link do Vídeo"></input>
              </div>

              <div>
                <label>Link da imagem do Vídeo</label>
                <input
                  type="text"
                  placeholder="Link da imagem do Vídeo"
                ></input>
              </div>

              <div>
                <label>Escolha a categoria</label>
                <input type="text" placeholder="Escolha a categoria"></input>
              </div>

              <div>
                <label>Descrição</label>
                <textarea type="text" placeholder="Descrição"></textarea>
              </div>

              <div>
                <label>Código de Segurança</label>
                <input placeholder="Código de Segurança"></input>
              </div>
              <div>
                <nav>
                  <Botao>salvar</Botao>
                  <div>
                    <Botao>limpar</Botao>
                  </div>
                  <Botao to="/novacategoria">Nova Categoria</Botao>
                </nav>
              </div>
            </Container>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
