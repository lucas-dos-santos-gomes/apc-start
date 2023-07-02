import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAluno from "../pages/LoginAluno/LoginAluno.jsx";
import Trilha from "../pages/TrilhaConhecimento/Trilha.jsx";
import Home from "../pages/Home/index.jsx";
import SobreNos from "../pages/SobreNos/SobreNos.jsx";
import Faq from "../pages/Faq/Faq.jsx";
import Perfil from "../pages/Perfil/Acesso.jsx";
import LoginProfissional from "../pages/LoginProfissional/LoginProfissional.jsx";
import CadastroProfissional from "../pages/CadastroProfissional/CadastroProfissional.jsx";

const Private = ({ Item }) => {
  const signed = false;

  return signed > 0 ? <Item /> : <LoginAluno />;
}

export default function Authentication() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/SobreNos" element={ <SobreNos/> } />
          <Route path="/Faq" element={ <Faq/> } />
          <Route path="/Perfil" element={ <Perfil/> } />
          <Route path="/LoginAluno" element={ <LoginAluno/> } />
          <Route path="/LoginProfissional" element={ <LoginProfissional/> } />
          <Route path="/CadastroProfissional" element={ <CadastroProfissional/> } />

          <Route exact path="/Trilha" element={<Private item={Trilha} />} />
          <Route exact path="/CadastroAluno" element={<Private item={<Trilha />} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}