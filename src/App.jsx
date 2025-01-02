import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home/home.jsx';
import Produtos from './pages/produtos/produtos.jsx';
import Sobre from './pages/sobre/sobre.jsx';
import './App.css'

function App() {

  return (
    <main className="min-w-[100vw]">
        <Header/>
        <Home />
        <Produtos />
        <Sobre />
        <Footer/>
    </main>
  )
}

export default App
