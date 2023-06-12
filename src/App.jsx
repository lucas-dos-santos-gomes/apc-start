import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from './pages/Home'
import './App.css'

export default function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/" element={ <></> } />
          <Route path="/" element={ <></> } />
          <Route path="/" element={ <></> } />
          <Route path="/" element={ <></> } />
        </Routes>
      </Router>
     
     <areapsicologo/>
    </>
  )
}