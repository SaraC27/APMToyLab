import React from "react";
import robot from '../../Img/Robot.jpeg'
import sim from '../../Vid/SimulacionRobot.mov'
import emp1 from '../../Vid/Empacado.mov'
import emp2 from '../../Vid/Empacado2.mov'
import palet from '../../Vid/Paletizado.mov'
import vr from '../../Vid/VR.mp4'
import cobot from '../../Vid/Cobotica.mp4'
import "./Mod5.css";

const Robot = () => {
  return (
    <div className="mod5-container">
      <h1>Módulo 5: Celda de Manufactura Robotizada</h1>
      <p className="parr-graph">
        La celda robotizada diseñada para el proceso de empacado y paletizado recibe juguetes, cajas y papel panal como insumos y entrega juguetes empacados, sellados y paletizados. Se utilizan dos robots IRB 360 tipo delta para empacar: uno coloca el juguete en la caja y el otro cubre con papel panal, todo mientras se transportan por bandas. El sellado se realiza manualmente, permitiendo la inspección de calidad, y luego un robot IRB 1520 antropomórfico organiza los productos en palets para su almacenamiento. El layout de la celda es lineal y serial, asegurando un flujo continuo de materiales. Dado que hay interacción entre humanos y robots, se implementaron medidas de seguridad como cortinas láser, paradas de emergencia, torres de iluminación, barreras físicas y equipos de protección para garantizar la seguridad de los operarios conforme a las normativas industriales vigentes.
      </p>
      <div className="chart-container">
        <h2 className="mod5-h2">Productos de Entrada y Salida</h2>
        <img src={robot} alt="Imagen 1" className="robot-image" />
      </div>
      <div className="chart-container">
        <h2 className="mod5-h2">Simulación celda robotizada</h2>
        <video controls width="1024" height="480">
          <source src={sim} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
      <div className="chart-container">
        <h2 className="mod5-h2">Rutina de empacado # 1</h2>
        <video controls width="1024" height="480">
          <source src={emp1} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
      <div className="chart-container">
        <h2 className="mod5-h2">Rutina de empacado # 2</h2>
        <video controls width="1024" height="480">
          <source src={emp2} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
      <div className="chart-container">
        <h2 className="mod5-h2">Rutina de paletizado</h2>
        <video controls width="1024" height="480">
          <source src={palet} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
      <div className="chart-container">
        <h2 className="mod5-h2">Realidad aumentada</h2>
        <video controls width="1024" height="480">
          <source src={vr} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
      <div className="chart-container">
        <h2 className="mod5-h2">Mejora: Industria 5.0 (entornos cobóticos)</h2>
        <p className="parr-graph">
          Si el operario se duerme, la celda robotizada se apaga.
        </p>
        <video controls width="1024" height="480">
          <source src={cobot} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
    </div>
  );
};

export default Robot;
