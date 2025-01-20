import React from 'react';
import { pages } from './App';
import logo from './Img/logo.webp'

interface HeaderProps {
    setSelectedPage: React.Dispatch<React.SetStateAction<pages>>
    resetMod: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header>
      <nav>
        <div className="header-left">
          <img src={logo} alt="Logo" className="header-logo" />
        </div>
        <div className="header-center">
          <h1>APM - ToyLab</h1>
        </div>
        <div className="header-right">
          <button onClick={() => props.setSelectedPage('home')}>Inicio</button>
          <button onClick={() => props.setSelectedPage('productos')}>Productos</button>
          <button onClick={() => props.setSelectedPage('integrantes')}>Integrantes</button>
          <button onClick={() => {
            props.resetMod(prev=>!prev)
            props.setSelectedPage('modulos')
            }}>Módulos</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
