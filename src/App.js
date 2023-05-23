import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { GlobalStyle } from "./styles";
import Inicio from "./Páginas/Inicio";
import NovoVideo from "./Páginas/NovoVideo";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import NovaCategoria from "./Páginas/NovaCategoria";

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
        </BrowserRouter>
      </>
      {/* <GlobalStyle/>
      <Header/>
      <Footer/> */}
    </div>
  );
}

export default App;
