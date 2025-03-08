import React from "react";
import vid1 from "../../Vid/Sensores_NX.mp4"
import vid2 from "../../Vid/Rutina_NX.mp4"
import vid3 from "../../Vid/Simulacion_NX.mp4"
import './Mod6.css'

const NX = () => {
  return (
    <div className="mod6-container">
      <h1>Módulo 6: Digital Factory</h1>
      <p className="parr-graph">
        La implementación de una fábrica digital mediante el software NX de Siemens ha permitido modelar y simular procesos clave en la automatización de la planta de fabricación de juguetes de plástico. A través de esta herramienta, se han representado virtualmente algunas etapas del proceso de producción, lo que permite analizar el desempeño de distintos componentes automatizados.
      </p>
      <div className="chart-container">
        <h2 className="mod6-h2">Sensores y actuadores virtuales</h2>
        <p className="parr-graph">
          Video sobre los sensores y actuadores virtuales utilziados en Siemens NX.
        </p>
        <video controls width="1024" height="480">
          <source src={vid1} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
      <div className="chart-container">
        <h2 className="mod6-h2">Explicación de la rutina</h2>
        <p className="parr-graph">
          Video explicativo sobre la rutina de producción simulada en el gemelo digital.
        </p>
        <video controls width="1024" height="480">
          <source src={vid2} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
      <div className="chart-container">
        <h2 className="mod6-h2">Simulación</h2>
        <p className="parr-graph">
          Video presentando la simulación en funcionamiento dentro de Siemens NX sobre el gemelo digital.
        </p>
        <video controls width="1024" height="480">
          <source src={vid3} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
    </div>
  );
};

export default NX;
