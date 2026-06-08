import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import InicioPage from './pages/inicioPage';
import FooterComponent from './components/footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<InicioPage/>}/>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
