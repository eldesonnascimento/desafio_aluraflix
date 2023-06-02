import Botao from "../../Components/Button";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import styled from "styled-components";

const ContainerVideo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 100%;
  img {
    width: 200px;
    height: 220px;
    margin: 12px 12px;
    box-shadow: 0px -1px 6px 6px rgba(116, 118, 113, 0.399);
  }
  h2 {
    color: white;
    margin-left: 12px;
    margin-top: 16px;
  }
`;

const Categoria = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

`;
const DivisaoCategoria = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-top: 16px;
  padding: 0 30px;
`;

export default function Inicio() {
  return (
    <>
      <Header>
        <Botao to="/novovideo">Novo Vídeo</Botao>
      </Header>
      <main>
        <ContainerVideo>
          <section>
            <Categoria>
              <h2>Filmes de Ação</h2>
              <DivisaoCategoria>
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_962881-MLB29449302654_022019-O.jpg"
                  alt="capa de filme"
                />

                <img
                  src="https://br.web.img3.acsta.net/pictures/22/05/24/16/14/3798761.png"
                  alt="capa de filme"
                />

                <img
                  src="https://img.wallpapic-br.com/i6762-343-437/medium/tomb-raider-filmes-poster-filme-de-acao-imagem-de-fundo.jpg"
                  alt="capa de filme"
                />

                <img
                  src="https://dvdefilme.files.wordpress.com/2012/11/o-codigo-bal-capas.jpg?w=729"
                  alt="capa de filme"
                />

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuY0jdbxyYvQrZ4GAj7v7odM-rS65plok-g&usqp=CAU"
                  alt="capa de filme"
                />

                <img
                  src="https://live.staticflickr.com/7143/6485852541_17eda1ff03_w.jpg"
                  alt="capa de filme"
                />
              </DivisaoCategoria>
            </Categoria>
          </section>
          <section>
            <Categoria>
              <h2>Filmes Infantis</h2>

              <DivisaoCategoria>
                <img
                  src="https://www.teamtex.com.br/wfiles/images/conteudo/17_galeria/d704486578f145699a7d5a10ed248a56.jpg"
                  alt="alura"
                />

                <img
                  src="https://one-cinema.s3.sa-east-1.amazonaws.com/filmes/minions-the-rise-of-gru/26062020/342/capa-minions-the-rise-of-gru.jpg"
                  alt="alura"
                />

                <img
                  src="https://jornaldaqui.com.br/wp-content/uploads/2016/06/procurando-dory.jpg"
                  alt="alura"
                />

                <img
                  src="https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/00/1100222_os-smurfs-e-a-vila-perdida-filme-infantil-ms_m1_637383512189143582.jpg"
                  alt="alura"
                />

                <img
                  src="https://i.pinimg.com/736x/48/7e/61/487e61537c1d9d93c96be0908d55c757.jpg"
                  alt="alura"
                />

                <img
                  src="https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/01/1101959_os-boxtrolls-ouse-ser-quadrado-dvd-filme-infantil-ms_m1_637383516263471264.jpg"
                  alt="alura"
                />
              </DivisaoCategoria>
            </Categoria>
          </section>
        </ContainerVideo>
      </main>
      <Footer />
    </>
  );
}
