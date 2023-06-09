import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from './pages/Home'
import Investidores from "./pages/Investidores/Investidores"
import './App.css'

export default function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/investidores" element={ <Investidores/> } />
          <Route path="/" element={ <></> } />
          <Route path="/" element={ <></> } />
          <Route path="/" element={ <></> } />
        </Routes>
      </Router>
     
     <areapsicologo/>
    </>
  )
}