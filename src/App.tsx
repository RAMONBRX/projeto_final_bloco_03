import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";
import FormCategoria from "./components/categorias/formcategorias/formcategoria";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategorias";
import ListarProdutos from "./components/produtos/listarprodutos/ListarProdutos";
import FormProduto from "./components/produtos/formproduto/FormProduto";
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/categorias" element={<ListarCategorias />}></Route>
          <Route path="/cadastrarcategoria" element={<FormCategoria />}></Route>
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          <Route path="/produtos" element={<ListarProdutos />}></Route>
          <Route path="/cadproduto" element={<FormProduto />} />
          <Route path="/editarproduto/:id" element={<FormProduto />} />
          <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
