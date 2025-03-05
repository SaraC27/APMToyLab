import React from "react";
import gf1 from "../../Img/GF_Celda.png"
import gf2 from "../../Img/GF_Estacion.png"
import gf3 from "../../Img/GF_Inyectora.png"
import './Mod7.css'

const PLC = () => {
  return (
    <div className="mod7-container">
      <h1>Módulo 7: Controladores Industriales (PLC)</h1>
      <div className="chart-container">
        <h2 className="mod7-h2">Elementos a controlar</h2>
        <p className="parr-graph-plc">
          <li>Inyectora A</li>
          <li>Inyectora B</li>
          <li>Inyectora C</li>
          <li>Banda Principal</li>
          <li>Estación A</li>
          <li>Estación B</li>
          <li>Estación C</li>
          <li>Celda</li>
        </p>
      </div>
      <div className="chart-container" style={{ paddingLeft: 100, paddingRight: 100 }}>
        <h2 className="mod2-h2">Definición de los tags</h2>
        <button className="xlsx-button" onClick={() => { window.open("https://docs.google.com/spreadsheets/d/1oqZhOOZPl5f3jWQ0WVN2gPUb6cW17BkazmqUBOSVorU", '_blank'); }}>Excel</button>
      </div>
      <div className="chart-container">
        <h2 className="mod7-h2">Rutinas del Sistema</h2>
        <p className="parr-graph-plc">
          <li>Main: Rutina para llamar a las demás subrutinas constantemente.</li>
          <li>Actuadores: Rutina para la gestión de los tags que se relacionan con los actuadores (encender, apagar o controlar actuadores).</li>
          <li>Contadores: Rutina para la actualización de los valores de los contadores en base a los flancos de subida/bajada de los sensores.</li>
          <li>Control: Rutina para el control del paso de elementos por la banda principal. Se encarga de balancear las líneas en caso de ser necesario y define cuáles piezas de inyectora/estación deben esperar y cuáles deben avanzar.</li>
          <li>Estados: Rutina para gestionar los estados en los que se encuentra cada elemento. Gestiona las señales de falla, mantenimiento, on, off.</li>
          <li>Rutina_Celda: Rutina de etapas y transiciones para el control de los actuadores que conectan con la celda.</li>
          <li>Rutina_Estaciones: Rutina de etapas y transiciones para el control de los actuadores que conectan con la zona de almacenaje de piezas.</li>
          <li>Rutina_Inyectoras: Rutina de etapas y transiciones para el control de los actuadores de la zona de las inyectoras.</li>
          <li>Sensores: Rutina para la detección de flancos de subida y de bajada de los sensores.</li>
          <li>Setup: Rutina que, cuando cambia la indicación de cuál juguete producir, realiza una espera para dar tiempo a los operarios que hagan el setup.</li>
        </p>
      </div>
      <div className="chart-container">
        <h2 className="mod7-h2">GRAFCET</h2>
        <p className="parr-graph-plc">
          No todas las rutinas anteriores se programaron bajo la filosofía del GRAFCET. Sin embargo, a continuación se presentan las 3 rutinas realizadas en GRAFCET que luego se implementaron en Ladder.
        </p>
        <h3>Rutina de la celda</h3>
        <img src={gf1} alt="Imagen 1" className="grafcet-image" />
        <h3>Rutina de cada estación</h3>
        <img src={gf2} alt="Imagen 1" className="grafcet-image" />
        <h3>Rutina de cada inyectora</h3>
        <img src={gf3} alt="Imagen 1" className="grafcet-image" />
      </div>
    </div>
  );
};

export default PLC;
