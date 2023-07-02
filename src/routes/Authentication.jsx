import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/index.jsx";
import SobreNos from "../pages/SobreNos/SobreNos.jsx";
import Faq from "../pages/Faq/Faq.jsx";

import Perfil from "../pages/Perfil/Acesso.jsx";
import LoginAluno from "../pages/LoginAluno/LoginAluno.jsx";
import LoginProfissional from "../pages/LoginProfissional/LoginProfissional.jsx";
import CadastroProfissional from "../pages/CadastroProfissional/CadastroProfissional.jsx";

import Trilha from "../pages/TrilhaConhecimento/Trilha.jsx";
import VideoAula from "../pages/VideoAula/VideoAula.jsx";
import Atividade from "../pages/Atividade/Atividade.jsx";
import Musica from "../pages/Musicas/Musica.jsx"
import Jogos from "../pages/Jogos/Jogos.jsx"

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
          <Route path="/LoginProfissional" element={ <LoginProfissional/> } />
          <Route path="/CadastroProfissional" element={ <CadastroProfissional/> } />

          <Route exact path="/LoginAluno" element={ <LoginAluno/> } />
          <Route exact path="/CadastroAluno" element={<Private item={<Trilha />} />} />

          <Route exact path="/Trilha" element={<Private item={Trilha} />} />
          <Route exact path="/VideoAula" element={<Private item={VideoAula} />} />
          <Route exact path="/Atividade" element={<Private item={Atividade} />} />
          <Route exact path="/Musica" element={<Private item={Musica} />} />
          <Route exact path="/Jogos" element={<Private item={Jogos} />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}