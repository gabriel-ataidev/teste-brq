import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cadastro from './components/Cadastro'
import Consulta from './components/Consulta'

import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Cadastro/>}/>
            <Route path='/consulta' element={<Consulta/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
