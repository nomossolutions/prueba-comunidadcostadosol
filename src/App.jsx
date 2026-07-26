import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import InicioPage from './pages/inicioPage';
import FooterComponent from './components/footer';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <BrowserRouter>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-[#203246] focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium">
        Pular para o conteúdo principal
      </a>
      <Header/>
      <main id="main-content">
        <Routes>
          <Route path='/' element={<InicioPage/>}/>
        </Routes>
      </main>
      <FooterComponent/>
    </BrowserRouter>
  )
}

export default App
