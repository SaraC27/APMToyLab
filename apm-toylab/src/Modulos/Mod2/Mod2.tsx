import React from "react";
import './Mod2.css'

const Ind4 = () => {
  return (
    <div className="mod2-container">
      <h1>Módulo 2: Industria 4.0 en la Automatización</h1>
      <div className="chart-container" style={{ paddingLeft: 100, paddingRight: 100 }}>
        <h2 className="mod2-h2">Diagramas P&ID</h2>
        <h3>P&ID Planta Pre-Automatización</h3>
        <button className="VSM-button" onClick={() => { window.open("PDF/PID_PRE.pdf", '_blank'); }}>PDF</button>
        <h3>P&ID Planta Automatizada</h3>
        <button className="VSM-button" onClick={() => { window.open("PDF/PID_POST.pdf", '_blank'); }}>PDF</button>
      </div>
      <div className="chart-container" style={{ paddingLeft: 100, paddingRight: 100 }}>
        <h2 className="mod2-h2">Arquitectura del sistema - Industria 4.0</h2>

        <h3 className="mod2-h3">Tecnologías</h3>
        <ul className="mod2-ul">
          <li><strong>Siemens NX:</strong> Implementación del gemelo digital de la planta.</li>
          <li><strong>Studio 5000:</strong> Implementación de la lógica en lenguaje de programación Ladder.</li>
          <li><strong>RSLinx:</strong> Emulador de PLC para ejecución del código en Ladder.</li>
          <li><strong>RobotStudio:</strong> Implementación de la celda robotizada que forma parte de la planta (parte del gemelo digital).</li>
          <li><strong>Google Chrome:</strong> Navegador web para el alojamiento de los dashboard SCADA y el sistema MES.</li>
          <li><strong>AWS - Api Gateway:</strong> Servicio en la nube de AWS para la implementación de APIs públicas, es como un servidor HTTPS.</li>
          <li><strong>AWS - Lambda:</strong> Servicio en la nube de AWS para la implementación de funciones de código, se encarga de utilizar otros servicios para autenticar usuarios, leer y escribir en la base de datos y procesar las peticiones de la API.</li>
          <li><strong>AWS - DynamoDB:</strong> Servicio en la nube de AWS para almacenamiento de datos en una base de datos NoSQL, donde se guardará un registro para la comunicación en tiempo real entre los nodos del sistema, y se almacenará una copia de dicho registro cada 5 segundos para tener un histórico.</li>
          <li><strong>AWS - Cognito:</strong> Servicio en la nube de AWS para el registro y posterior autenticación de usuarios, donde se generan tokens JWT para autenticar y proteger las comunicaciones con la API.</li>
          <li><strong>React:</strong> Framework de desarrollo de aplicaciones web, donde se utiliza la API para colocar el sistema MES.</li>
          <li><strong>Ignition:</strong> Software que permite la comunicación de datos entre diferentes tecnologías y otros servicios de conexión a internet como NodeRed. También, permite la creación de Dashboards SCADA para el sistema.</li>
          <li><strong>Node Red:</strong> Software de configuración de red sobre el cual se monta una lógica de lectura y escritura de datos entre Ignition y la API del sistema.</li>
        </ul>

        <h3 className="mod2-h3">Comunicaciones</h3>
        <ul className="mod2-ul">
          <li><strong>OPC (Open Platform Comunications):</strong> Permite la comunicación de información entre diferentes tecnologías.</li>
          <li><strong>Ignition Node:</strong> Para comunicar la información disponible en el servidor OPC con la API en la nube, se requiere de un nodo dentro de Node Red llamado node-red-contrib-ignition-nodes.</li>
          <li><strong>HTTP (Hyper Text Transfer Protocol):</strong> Protocolo de comunicación web para el envío de información. Al ser un protocolo no seguro (no va encriptado), solamente se utiliza para envío de información con servidores locales.</li>
          <li><strong>HTTPS (Hyper Text Transfer Protocol Secured):</strong> Protocolo de comunicación web para el envío de información encriptada por internet, utilizado para la comunicación bidireccional con la API. Mencionar que la API se propone con funcionalidad WebSocket para una comunicación fluida y en tiempo real. Sin embargo, por costos reales de la utilización de la nube AWS, montamos la simulación sobre una API tipo request - response para que fuera menos costoso (lo cual generó delay entre las comunicaciones, pero lo ideal sería utilizar WebSocket para reducir el delay).</li>
          <li><strong>API AWS:</strong> Conjunto de funciones/protocolos/reglas que AWS dispone para la utilización de sus servicios dentro de la nube AWS.</li>
        </ul>

        
        <h3>Diagrama de la arquitectura</h3>
        <button className="VSM-button" onClick={() => { window.open("PDF/Arquitectura.pdf", '_blank'); }}>PDF</button>
      </div>
    </div>
  );
};

export default Ind4;
