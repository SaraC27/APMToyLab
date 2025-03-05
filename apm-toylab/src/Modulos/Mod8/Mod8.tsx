import React from "react";
import vid from "../../Vid/SCADA.mp4"
import './Mod8.css'

const SCADA = () => {
  return (
    <div className="mod8-container">
      <h1>Módulo 8: SCADA</h1>
      <p className="parr-graph">
        El SCADA desarrollado para este proyecto permite la adquisición de datos de la planta en NX y la celda robotizada en RobotStudio a través de la conexión bidireccional mediante un sistema en la nube. Esto permite que el SCADA pueda enviar y recibir datos, lo que se traduce en operación y supervisión de la planta de forma remota.
      </p>
      <div className="chart-container">
        <h2 className="mod8-h2">Dashboards SCADA</h2>
        <video controls width="1024" height="480">
          <source src={vid} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
    </div>
  );
};

export default SCADA;
