import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Inicio from './Inicio';
import Productos from './Productos';
import Integrantes from './Integrantes';
import Modulos from './Modulos';

export type pages = 'home' | 'productos' | 'integrantes' | 'modulos'

function App() {
  const [selectedPage, setSelectedPage] = useState<pages>('home');
  const [resetMod, setResetMod] = useState<boolean>(false);

  return (
    <div className="App">
      <Header setSelectedPage={setSelectedPage} resetMod={setResetMod}/>
      {selectedPage === 'home' ?
        <Inicio /> :
        selectedPage === 'productos' ?
          <Productos /> :
          selectedPage === 'integrantes' ?
            <Integrantes /> :
            selectedPage === 'modulos' ?
              <Modulos reset={resetMod}/> :
              (<></>)}
    </div>
  );
}

export default App;
