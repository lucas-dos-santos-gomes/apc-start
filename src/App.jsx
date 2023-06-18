import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from './pages/Home'
import SobreNos from "./pages/SobreNos/SobreNos"
import Trilha from "./pages/TrilhaConhecimento/Trilha"
import './App.css'

export default function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/SobreNos" element={ <SobreNos/> } />
          <Route path="/" element={ <></> } />
          <Route path="/Trilha" element={ <Trilha/> } />
          <Route path="/" element={ <></> } />
        </Routes>
      </Router>
     
     
    </>
  )
}