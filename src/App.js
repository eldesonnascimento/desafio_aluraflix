import GlobalStyle from "./Globais";
import Inicio from "./Páginas/Inicio";
import NovoVideo from "./Páginas/Cadastro/VideoCadastro";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import NovaCategoria from "./Páginas/Cadastro/CategoriaCadastro";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/novovideo" element={<NovoVideo />} />
            <Route path="/novacategoria" element={<NovaCategoria />} />
            <Route path="*" element={<div>Página não Encontrada</div>} />
          </Routes>
          <GlobalStyle />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
