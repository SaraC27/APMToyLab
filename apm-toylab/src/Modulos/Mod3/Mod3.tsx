import React, { useState } from 'react';
import './Mod3.css';

const HierarchicalRenderer: React.FC = () => {
  const data: {
    [text1: string]: {
      [text2: string]: string[];
    }
  } = {
    "1. Realizar análisis del proceso educativo": {
      "1.1 Analizar gestión de proyecto": [
        "1.1.1 Definir dinámica de reuniones",
        "1.1.2 Analizar dinámica de reuniones posterior a la finalización del proyecto",
        "1.1.3 Crear sistema de bitácoras",
        "1.1.4 Analizar bitácoras",
        "1.1.5 Definir pasos a seguir para resolver problemáticas",
        "1.1.6 Retroalimentar los avances",
        "1.1.7 Interacción con docentes",
      ],
      "1.2 Analizar trabajo colaborativo": [
        "1.2.1 Definir roles de los participantes",
        "1.2.2 Tomar fotos del trabajo en equipo",
        "1.2.3 Comunicarse por WhatsApp",
        "1.2.4 Analizar colaboración con el equipo",
        "1.2.5 Analizar colaboración con los docentes",
      ],
      "1.3 Analizar proceso de aprendizaje": [
        "1.3.1 Analizar correspondencia entre actividades y resultados",
        "1.3.2 Identificar logros",
        "1.3.3 Identificar dificultades",
        "1.3.4 Analizar efectividad del proceso de aprendizaje",
      ],
      "1.4 Dar recomendaciones": [
        "1.4.1 Dar recomendaciones sobre PBL",
      ]
    },
    "2. Gestionar la producción y automatización": {
      "2.1 Analizar la simulación de la planta": [
        "2.1.1 Definir las posibles fallas",
        "2.1.1.1 Definir frecuencia de las fallas",
        "2.1.1.2 Definir el impacto de las fallas",
        "2.1.2 Definir parámetros de calidad",
        "2.1.3 Definir protocolo de mantenimiento",
        "2.1.4 Definir protocolo de setup",
        "2.1.5 Calcular indicadores",
        "2.1.5.1 Estimar producción",
        "2.1.5.2 Determinar OEE",
        "2.1.5.3 Calcular KPIs",
        "2.1.5.4 Balance de líneas",
      ],
      "2.2 Diseñar la planta antes de automatizar": [
        "2.2.1 Diagramas VSM-PRE",
        "2.2.2 Diagramas VSM-POS",
        "2.2.3 Aplicación de estrategias",
      ],
      "2.3 Automatizar la planta": [
        "2.3.1 Selección de tecnologías de automatización",
        "2.3.2 Implementación de sensores y actuadores",
        "2.3.3 Programación del sistema automatizado",
        "2.3.4 Verificación del sistema automatizado",
        "2.3.5 Capacitación de personal",
      ],
      "2.4 Desarrollar sistema MES": [
        "2.4.1 Base de datos",
        "2.4.2 API",
        "2.4.3 Autenticación",
        "2.4.4 AWS",
      ]
    },
    "3. Implementar la Industria 4.0 en la automatización del proyecto": {
      "3.1 Realizar diagramas de instrumentación": [
        "3.1.1 Seleccionar tipo de instrumentos a usar",
        "3.1.2 Definir ubicación de los instrumentos",
        "3.1.3 Definir flujo de información entre instrumentos",
        "3.1.4 Realizar diagrama",
      ],
      "3.2 Diseñar arquitectura de control y comunicaciones": [
        "3.2.1 Definir equipos necesarios para el proyecto",
        "3.2.2 Establecer arquitectura entre los distintos equipos",
        "3.2.3 Identificar protocolos de comunicación entre los distintos equipos",
        "3.2.4 Establecer red de comunicación entre los equipos",
        "3.2.5 Realizar pruebas de la red de comunicación",
        "3.2.6 Determinar la relación con otros niveles de la pirámide de automatización",
      ],
      "3.3 Digitalizar líneas de producción": [
        "3.3.1 Definir líneas de producción pre y post",
        "3.3.2 Modelar gemelo digital de la planta",
        "3.3.3 Implementar IIoT para complementar gemelo digital",
      ]
    },
    "4. Planear el proyecto": {
      "4.1 Realizar EDT del proyecto": [
        "4.1.1 Establecer entregables",
        "4.1.2 Desglosar entregables en distintas actividades",
        "4.1.3 Definir responsables para las actividades",
        "4.1.4 Establecer un entregable para cada actividad",
      ],
      "4.2 Realizar cronograma del proyecto": [
        "4.2.1 Definir tiempos para las actividades mencionadas en el EDT",
        "4.2.2 Presentar de forma grafica la informacion",
      ]
    },
    "5. Evaluar el proyecto económicamente": {
      "5.1 Determinar viabilidad económica del proyecto": [
        "5.1.1 Definir los equipos que se deben comprar",
        "5.1.2 Determinar el costo de los equipos y su transporte hasta el lugar del proyecto",
        "5.1.3 Definir cantidad de tiempo trabajado por cada integrante del equipo y asignarle un valor",
        "5.1.4 Realizar diagrama de flujo de caja",
        "5.1.5 Calcular indicadores de desempeño economico (TIR, VPN, Payback, ROI, FOB)",
        "5.1.6 Establecer AIU",
        "5.1.7 Consolidar presupuesto global del proyecto",
      ],
      "5.2 Presentar oferta al cliente": [
        "5.2.1 Crear oferta comercial para el cliente",
      ]
    },
    "6. Celda de manufactura robotizada": {
      "6.1 Análisis robot": [
        "6.1.1 Justificación robotización",
        "6.1.2 Selección de robot",
        "6.1.3 Valor agregado del robot",
        "6.1.4 Evaluación económica de la robotización",
        "6.1.5 Impacto ambiental",
      ],
      "6.2 Diseño celda robotizada": [
        "6.2.1 Selección del espacio",
        "6.2.2 Layout inicial",
        "6.2.3 Flujo de producto",
        "6.2.4 Interacción con personal",
        "6.2.5 Seguridad funcional",
        "6.2.5.1 Selección de elementos de seguridad",
        "6.2.6 Agarre del robot",
        "6.2.6.1 Selección o diseño del Gripper",
        "6.2.7 Ergonomía en el diseño",
      ],
      "6.3 Modelado robot": [
        "6.3.1 Programación robot",
        "6.3.2 Simulación RobotStudio",
        "6.3.3 Video simulación",
        "6.3.4 Validación en entorno físico",
      ],
      "6.4 Análisis riesgos": [
        "6.4.1 Identificación peligros",
        "6.4.2 Gestión del riesgo",
        "6.4.3 Análisis inicial de riesgos",
        "6.4.4 Mitigación del riesgo",
        "6.4.4.1 Implementación de plan de contingencias",
        "6.4.5 Evaluación del riesgo",
      ]
    },
    "7. Digital Factory": {
      "7.1 Construir prototipo inicial de la fábrica en Siemens NX": [
        "7.1.1 Aprender a utilizar Siemens NX",
        "7.1.2 Modelar una planta inicial en Siemens NX",
        "7.1.2.1 Configurar la secuencia en la planta",
      ],
      "7.2 Integrar gemelo digital con otros sistemas": [
        "7.2.1 Programar la lógica de funcionamiento de la planta",
        "7.2.2 Integrar sensores virtuales",
        "7.2.3 Integrar actuadores virtuales",
        "7.2.4 Integrar sistema MES y SCADA",
      ],
      "7.3 Probar funcionamiento del gemelo digital": [
        "7.3.1 Probar simulación",
        "7.3.2 Corregir errores de simulación",
        "7.3.3 Realizar video de la simulación",
      ]
    },
    "8. Controladores industriales (PLC)": {
      "8.1 Diseñar lógica de programación del sistema completo": [
        "8.1.1 Desglose del problema",
        "8.1.2 Operación",
        "8.1.3 Etapas",
        "8.1.4 Transiciones",
        "8.1.5 Modos",
      ],
      "8.2 Programar la lógica del sistema": [
        "8.2.1 Grafcet",
        "8.2.2 Ladder",
      ]
    },
    "9. Desarrollar el sistema SCADA del proyecto": {
      "9.1 Diseñar la interfaz HMI": [
        "9.1.1 Diseño de la interfaz de usuario en Ignition",
        "9.1.2 Disposición de los elementos gráficos del SCADA",
        "9.1.3 Asignación de las variables a controlar y supervisar desde el SCADA",
      ],
      "9.2 Incorporar la interfaz en el sistema": [
        "9.2.1 Conexión del SCADA con la base de datos en AWS",
        "9.2.2 Ejecuión en local de pruebas de funcionamiento del SCADA en variables de control y supervisión",
      ],
      "9.3 Mejorar la interfaz": [
        "9.3.1 Definición de elementos de alto desempeño",
        "9.3.2 Definición de variables clave de producción",
      ]
    }
  }  

  const [selectedText1, setSelectedText1] = useState<string | null>(null);
  const [selectedText2, setSelectedText2] = useState<string | null>(null);

  const handleText1Click = (text1: string) => {
    setSelectedText1(text1);
    setSelectedText2(null); // Reset text2 when a new text1 is selected
  };

  const handleText2Click = (text2: string) => {
    setSelectedText2(text2);
  };

  return (
    <div className="hierarchical-renderer">
      <h1>EDT</h1>
      {/* Render text1 keys */}
      <h2>Actividades Principales</h2>
      <ul className="level-list">
        {Object.keys(data).map((text1) => (
          <li
            key={text1}
            className={`level-item ${selectedText1 === text1 ? 'selected' : ''}`}
            onClick={() => handleText1Click(text1)}
          >
            {text1}
          </li>
        ))}
      </ul>

      {/* Render text2 keys */}
      {selectedText1 && (
        <>
          <h2>Actividades Secundarias:</h2>
          <ul className="level-list">
            {Object.keys(data[selectedText1]).map((text2) => (
              <li
                key={text2}
                className={`level-item ${selectedText2 === text2 ? 'selected' : ''}`}
                onClick={() => handleText2Click(text2)}
              >
                {text2}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Render string[] */}
      {selectedText1 && selectedText2 && (
        <>
          <h2>Actividades Detalladas:</h2>
          <ul className="level-list">
            {data[selectedText1][selectedText2].map((str, index) => (
              <li key={index} className="detail-item">
                {str}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default HierarchicalRenderer;
