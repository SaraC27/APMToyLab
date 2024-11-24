import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Inicio from './Inicio';
import Productos from './Productos';
import Integrantes from './Integrantes';

export type pages = 'home' | 'productos' | 'integrantes'

function App() {
  const [selectedPage, setSelectedPage] = useState<pages>('home');

  return (
    <div className="App">
      <Header setSelectedPage={setSelectedPage} />
      {selectedPage === 'home' ? <Inicio /> : selectedPage === 'productos' ? <Productos /> : selectedPage === 'integrantes' ? <Integrantes /> :(<></>)}
    </div>
  );
}

export default App;
