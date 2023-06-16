import React, { useState } from 'react';
import '../MenuHamburguer/Menu.css';

const MenuHamburguer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="menu-items">
        <li><a href="/">Home</a></li>
        <li><a href="/sobre">Área psicologo</a></li>
        <li><a href="/contato">Contato</a></li>
        <li><a href="/contato">Contato</a></li>
        <li><a href="/contato">Contato</a></li>
      </ul>
    </div>
  );
};

export default MenuHamburguer;
