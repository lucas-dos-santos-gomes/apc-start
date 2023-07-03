import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/index.jsx";
import SobreNos from "../pages/SobreNos/SobreNos.jsx";
import Faq from "../pages/Faq/Faq.jsx";

import LoginAluno from "../pages/LoginAluno/LoginAluno.jsx";
import CadastroAluno from "../pages/CadastroAluno/CadastroAluno.jsx";

import Trilha from "../pages/TrilhaConhecimento/Trilha.jsx";
import VideoAula from "../pages/VideoAula/VideoAula.jsx";
import Atividade from "../pages/Atividade/Atividade.jsx";
import Musica from "../pages/Musicas/Musica.jsx";
import Jogos from "../pages/Jogos/Jogos.jsx";

import useAuth from "../hooks/useAuth.js";

const Private = ({ Item }) => {
  const { verifyLogged } = useAuth();
  verifyLogged();
  return localStorage.getItem("user_logged") ? <Item /> : <LoginAluno />;
}

export default function Authentication() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/SobreNos" element={ <SobreNos/> } />
          <Route path="/Faq" element={ <Faq/> } />

          <Route exact path="/LoginAluno" element={ <LoginAluno/> } />
          <Route exact path="/CadastroAluno" element={ <CadastroAluno />} />

          <Route exact path="/Trilha" element={<Private Item={Trilha} />} />
          <Route exact path="/VideoAula" element={<Private Item={VideoAula} />} />
          <Route exact path="/Atividade" element={<Private Item={Atividade} />} />
          <Route exact path="/Musica" element={<Private Item={Musica} />} />
          <Route exact path="/Jogos" element={<Private Item={Jogos} />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}