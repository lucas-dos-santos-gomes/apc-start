import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Private = ({ Item }) => {
  const signed = false;

  return signed > 0 ? <Item /> : <LoginAluno />;
}

export default function Authentication() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/Trilha" element={<Private item={Trilha} />} />
          <Route path="/" element={<LoginAluno />} />
          <Route exact path="/CadastroAluno" element={<Private item={<Trilha />} />} />
          <Route path="*" element={<LoginAluno />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
} 