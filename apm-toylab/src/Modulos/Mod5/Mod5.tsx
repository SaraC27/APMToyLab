import React, { useEffect } from "react";
import "./Mod5.css";
import mermaid from "mermaid";
import avion from '../../Img/avion.jpeg'
import carro from '../../Img/carro.jpeg'
import submarino from '../../Img/submarino.jpeg'
import cajaopen from '../../Img/CajaOpen.png'
import cajaclose from '../../Img/CajaClosed.png'
import burbuja from '../../Img/burbuja.png'

const Robot = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "base",
      themeVariables: {
        primaryColor: '#ccc',
        primaryTextColor: '#000',
        primaryBorderColor: '#ccc',
        lineColor: '#000000',
        secondaryColor: '#ccc',
        tertiaryColor: '#fff',
        fontSize: '40px'
      },
    });
    mermaid.contentLoaded();
  }, []);

  const flujo = `
  flowchart LR
    A[Orientación del Proyecto] --> B[Definir objetivos, alcance, recursos y cronograma]
    B --> C[Identificación de Procesos]
    C --> D[Analizar operaciones, identificar mejoras y calcular indicadores actuales]
    D --> E[Definición del Diagrama de Flujo]
    E --> F[Elaborar un diagrama que incluya espacios, acciones, flujo de materiales y herramientas]
    F --> G[Análisis del Espacio]
    G --> H[Determinar necesidades de espacio y restricciones, considerando el robot]
    H --> I[Proponer Layout 1]
    H --> J[Proponer Layout N]
    I & J --> K{¿Layouts cumplen requisitos mínimos?}
    K -->|Sí| L[Seleccionar el mejor layout]
    K -->|No| M[Ajustar y mejorar los layouts]
    L & M --> N[Seguridad]
    N --> O[Identificar riesgos, definir protecciones y protocolos de emergencia]
    O --> P[Simulación]
    P --> Q[Simular la celda en RobotStudio para obtener indicadores y probar programación]
  `

  const data = [
    { id: 'R1', activity: 'Instalación de cortinas láser, instalación de mallas de celda, programación de la celda con interrupciones en las rutinas, botones de parada de emergencia, uso de EPP.' },
    { id: 'R2', activity: 'Señalización del espacio de trabajo de cada uno de los robots, uso de EPP.' },
    { id: 'R3', activity: 'Uso de EPP, verificación continua de las condiciones del gripper.' },
    { id: 'R4', activity: 'Creación de protocolos de seguridad para cambios de gripper, apagar todas las fuentes de energía de la celda durante el procedimiento, uso de EPP.' },
    { id: 'R5', activity: 'Verificación de las rutinas en simulación, no permitir el ingreso al área de trabajo durante la prueba de las rutinas, uso del teach pendant con dead man switch, uso de EPP.' },
    { id: 'R6', activity: 'Apagar todas las fuentes de energía del robot, uso de protecciones dieléctricas, uso de EPP.' },
    { id: 'R7', activity: 'Creación de protocolos de seguridad para limpieza de la celda, apagar todas las fuentes de energía de la celda durante el procedimiento, uso de EPP.' },
    { id: 'R8', activity: 'Señalización del espacio de trabajo de cada uno de los robots, uso de EPP.' },
    { id: 'R9', activity: 'Identificar y señalizar los puntos de atrapamiento, uso de guantes resistentes a químicos, protocolos para limpieza y manejo de productos químicos.' },
    { id: 'R10', activity: 'Apagar equipos antes de la verificación de sensores, uso de sistemas de bloqueo y etiquetado (LOTO), uso de EPP.' },
    { id: 'R11', activity: 'Inspección regular de herramientas, protocolos para el manejo seguro de piezas filosas, uso de guantes de protección.' },
    { id: 'R12', activity: 'Delimitar áreas de trabajo de robots, sistemas de monitoreo para detectar presencia humana, señalización adecuada, uso de EPP.' },
    { id: 'R13', activity: 'Asegurar alineación de cajas o juguetes en bandas, protocolos para evitar tropiezos, mantenimiento preventivo de equipos.' },
    { id: 'R14', activity: 'Capacitación en levantamiento de cargas, uso de herramientas de asistencia ergonómica, pausas activas para evitar lesiones musculoesqueléticas.' },
    { id: 'R15', activity: 'Mantenimiento preventivo para evitar atascos, instalación de sistemas de parada automática en bandas transportadoras, señalización de zonas de riesgo.' },
  ];

  const data2 = [
    { id: 'R1', severidad: 4, frecuencia: 3, probabilidad: 2, evitarDano: 2, clase: 7, clasificacion: 'SIL2' },
    { id: 'R2', severidad: 3, frecuencia: 2, probabilidad: 2, evitarDano: 1, clase: 5, clasificacion: 'OM' },
    { id: 'R3', severidad: 4, frecuencia: 2, probabilidad: 3, evitarDano: 1, clase: 6, clasificacion: 'SIL1' },
    { id: 'R4', severidad: 2, frecuencia: 2, probabilidad: 3, evitarDano: 3, clase: 7, clasificacion: 'N/A' },
    { id: 'R5', severidad: 4, frecuencia: 2, probabilidad: 2, evitarDano: 2, clase: 7, clasificacion: 'SIL1' },
    { id: 'R6', severidad: 3, frecuencia: 1, probabilidad: 2, evitarDano: 2, clase: 5, clasificacion: 'OM' },
    { id: 'R7', severidad: 4, frecuencia: 3, probabilidad: 2, evitarDano: 2, clase: 7, clasificacion: 'SIL2' },
    { id: 'R8', severidad: 3, frecuencia: 2, probabilidad: 2, evitarDano: 1, clase: 5, clasificacion: 'OM' },
    { id: 'R9', severidad: 4, frecuencia: 2, probabilidad: 3, evitarDano: 2, clase: 7, clasificacion: 'SIL2' },
    { id: 'R10', severidad: 4, frecuencia: 3, probabilidad: 2, evitarDano: 2, clase: 7, clasificacion: 'SIL2' },
    { id: 'R11', severidad: 3, frecuencia: 2, probabilidad: 3, evitarDano: 1, clase: 6, clasificacion: 'SIL2' },
    { id: 'R12', severidad: 3, frecuencia: 2, probabilidad: 2, evitarDano: 1, clase: 5, clasificacion: 'OM' },
    { id: 'R13', severidad: 3, frecuencia: 2, probabilidad: 2, evitarDano: 1, clase: 5, clasificacion: 'OM' },
    { id: 'R14', severidad: 3, frecuencia: 2, probabilidad: 2, evitarDano: 1, clase: 5, clasificacion: 'OM' },
    { id: 'R15', severidad: 4, frecuencia: 3, probabilidad: 2, evitarDano: 2, clase: 7, clasificacion: 'SIL2' },
  ];

  const data3 = [
    { id: 'R1', before: 'SIL 3', after: 'SIL 2' },
    { id: 'R2', before: 'SIL 2', after: 'OM' },
    { id: 'R3', before: 'SIL 2', after: 'SIL 1' },
    { id: 'R4', before: 'SIL 1', after: 'N/A' },
    { id: 'R5', before: 'SIL 2', after: 'SIL 1' },
    { id: 'R6', before: 'SIL 1', after: 'OM' },
    { id: 'R7', before: 'SIL 3', after: 'SIL 2' },
    { id: 'R8', before: 'SIL 2', after: 'OM' },
    { id: 'R9', before: 'SIL 3', after: 'SIL 2' },
    { id: 'R10', before: 'SIL 3', after: 'SIL 2' },
    { id: 'R11', before: 'SIL 2', after: 'SIL 1' },
    { id: 'R12', before: 'SIL 2', after: 'OM' },
    { id: 'R13', before: 'SIL 1', after: 'OM' },
    { id: 'R14', before: 'SIL 1', after: 'OM' },
    { id: 'R15', before: 'SIL 3', after: 'SIL 2' },
  ];

  return (
    <div className="robot-container">
      <div className="robot-container2">
        <h2 className="robot-h2">Productos de Entrada y Salida</h2>
        <div className="robot-flujo">
          <p className="parr-graph">
            Productos de Entrada
            (Juguetes + Cajas Vacías + papel panal)
          </p>
          <div className="robot-arrow">➡️</div>
          <p className="parr-graph">
            Productos de Salida
            (Juguetes Empacados y Sellados)
          </p>
        </div>
        <div className="robot-flujo">
          <div className="robot-column">
            <img src={avion} alt="Imagen 1" className="robot-image" />
            <img src={carro} alt="Imagen 2" className="robot-image" />
            <img src={submarino} alt="Imagen 3" className="robot-image" />
          </div>
          <span className="robot-symbol">+</span>
          <img src={cajaopen} alt="Imagen 4" className="robot-image" />
          <span className="robot-symbol">+</span>
          <img src={burbuja} alt="Imagen 5" className="robot-image" />
          <div className="robot-arrow">➡️</div>
          <div className="robot-final">
            <img src={cajaclose} alt="Imagen final" className="robot-final-image" />
          </div>
        </div>
      </div>
      <div className="robot-container2">
        <h2 className="robot-h2">Flujo de Diseño</h2>
        <div className="mermaid">
          {flujo}
        </div>
      </div>
      <div className="robot-container2">
        <h2 className="robot-h2">Análisis y Gestión de Riesgos</h2>
        <p className="parr-graph">
          En el desarrollo de la celda robotizada, es fundamental identificar y
          gestionar los posibles riesgos asociados a cada etapa del proceso.
          La siguiente tabla detalla las tareas principales, sub-tareas y los riesgos
          potenciales relacionados con el funcionamiento, mantenimiento y manejo de
          productos en la celda. Este análisis permite implementar medidas preventivas
          y protocolos de seguridad que garanticen un entorno de trabajo seguro y
          eficiente tanto para los operarios como para los equipos involucrados.
        </p>
        <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead className="table-header">
            <tr>
              <th>Tarea</th>
              <th>Subtarea</th>
              <th>Riesgo</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={5} className="table-row-title">Funcionamiento</td>
              <td>NA</td>
              <td>Ingreso de personal en el área de los Robots.</td>
              <td>R1</td>
            </tr>
            <tr>
              <td>NA</td>
              <td>Operarios interrumpiendo el camino de los Robots.</td>
              <td>R2</td>
            </tr>
            <tr>
              <td>NA</td>
              <td>Los juguetes pueden caer por sujeción incorrecta del Robot.</td>
              <td>R3</td>
            </tr>
            <tr>
              <td>Supervisión del proceso</td>
              <td>Fatiga visual o distracción del personal encargado de la monitorización de los procesos.</td>
              <td>R4</td>
            </tr>
            <tr>
              <td>Reabastecimiento de materiales</td>
              <td>Contacto con partes móviles, riesgo de atrapamiento.</td>
              <td>R5</td>
            </tr>
            <tr>
              <td rowSpan={6} className="table-row-title">Mantenimiento</td>
              <td>Ajuste o cambio del gripper</td>
              <td>Caída de objetos, puntos de atrapamiento, resbalones/tropiezos, superficies filosas.</td>
              <td>R6</td>
            </tr>
            <tr>
              <td>Ajuste de rutina de robot</td>
              <td>Entrada a espacio confinado: equipo en movimiento, golpe por objetos, atrapamiento, aplastamiento.</td>
              <td>R7</td>
            </tr>
            <tr>
              <td>Cambio de batería de robot</td>
              <td>Contacto con electricidad, puntos de atrapamiento, superficies filosas.</td>
              <td>R8</td>
            </tr>
            <tr>
              <td>Limpieza de celda</td>
              <td>Puntos de atrapamiento, resbalones/tropiezos, superficies filosas, exposición a productos químicos.</td>
              <td>R9</td>
            </tr>
            <tr>
              <td>Verificación de sensores</td>
              <td>Contacto con partes móviles, riesgo de atrapamiento.</td>
              <td>R10</td>
            </tr>
            <tr>
              <td>Inspección de piezas críticas</td>
              <td>Lesiones por herramientas mal usadas o deterioradas, exposición a piezas filosas o cortantes.</td>
              <td>R11</td>
            </tr>
            <tr>
              <td rowSpan={4} className="table-row-title">Entrada y salida del producto</td>
              <td>NA</td>
              <td>Operarios interrumpiendo el espacio de trabajo de los Robots.</td>
              <td>R12</td>
            </tr>
            <tr>
              <td>Revisión de entrada/salida</td>
              <td>Desalineación de cajas o juguetes, riesgo de golpes o tropiezos.</td>
              <td>R13</td>
            </tr>
            <tr>
              <td>Manipulación manual</td>
              <td>Levantamiento inadecuado de cargas, riesgo de lesiones musculoesqueléticas.</td>
              <td>R14</td>
            </tr>
            <tr>
              <td>Control de flujo</td>
              <td>Atascos en bandas transportadoras, atrapamiento por correas.</td>
              <td>R15</td>
            </tr>
          </tbody>
        </table>
        <p className="parr-graph">
          Como parte del diseño de la celda robotizada, se elaboró una matriz de riesgos
          siguiendo los lineamientos establecidos en la norma <strong>IEC 62061</strong>, que proporciona
          un marco para evaluar y gestionar los riesgos en sistemas de control eléctricos
          relacionados con la seguridad. Este análisis permitió comparar los niveles de
          riesgo antes y después de implementar medidas de mitigación.
        </p>
        <p className="parr-graph">
          La matriz de riesgos se construyó identificando peligros potenciales, evaluando
          su probabilidad de ocurrencia y las posibles consecuencias, tanto en el estado
          inicial como tras aplicar las medidas de seguridad. Este enfoque sistemático
          asegura una reducción efectiva de los riesgos, priorizando la seguridad de los
          operarios y la funcionalidad confiable del sistema.
        </p>
        <h3>Clasificación de Riesgos</h3>
        <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead className="table-header">
            <tr>
              <th>ID</th>
              <th>Severidad (S)</th>
              <th>Frecuencia (F)</th>
              <th>Probabilidad (W)</th>
              <th>Probabilidad de evitar o limitar daño (P)</th>
              <th>Clase (K)</th>
              <th>Clasificación de riesgo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>R1</td>
              <td>4</td>
              <td>4</td>
              <td>4</td>
              <td>5</td>
              <td>13</td>
              <td>SIL 3</td>
            </tr>
            <tr>
              <td>R2</td>
              <td>3</td>
              <td>5</td>
              <td>3</td>
              <td>5</td>
              <td>13</td>
              <td>SIL 2</td>
            </tr>
            <tr>
              <td>R3</td>
              <td>4</td>
              <td>2</td>
              <td>3</td>
              <td>5</td>
              <td>10</td>
              <td>SIL 2</td>
            </tr>
            <tr>
              <td>R4</td>
              <td>2</td>
              <td>2</td>
              <td>4</td>
              <td>4</td>
              <td>10</td>
              <td>SIL 1</td>
            </tr>
            <tr>
              <td>R5</td>
              <td>4</td>
              <td>2</td>
              <td>3</td>
              <td>5</td>
              <td>9</td>
              <td>SIL 1</td>
            </tr>
            <tr>
              <td>R6</td>
              <td>3</td>
              <td>1</td>
              <td>3</td>
              <td>5</td>
              <td>9</td>
              <td>SIL 1</td>
            </tr>
            <tr>
              <td>R7</td>
              <td>4</td>
              <td>3</td>
              <td>3</td>
              <td>5</td>
              <td>11</td>
              <td>SIL 3</td>
            </tr>
            <tr>
              <td>R8</td>
              <td>3</td>
              <td>5</td>
              <td>3</td>
              <td>5</td>
              <td>13</td>
              <td>SIL 2</td>
            </tr>
            <tr>
              <td>R9</td>
              <td>4</td>
              <td>2</td>
              <td>3</td>
              <td>5</td>
              <td>10</td>
              <td>SIL 2</td>
            </tr>
            <tr>
              <td>R10</td>
              <td>4</td>
              <td>3</td>
              <td>3</td>
              <td>5</td>
              <td>11</td>
              <td>SIL 3</td>
            </tr>
            <tr>
              <td>R11</td>
              <td>4</td>
              <td>2</td>
              <td>3</td>
              <td>5</td>
              <td>10</td>
              <td>SIL 2</td>
            </tr>
            <tr>
              <td>R12</td>
              <td>3</td>
              <td>5</td>
              <td>3</td>
              <td>5</td>
              <td>13</td>
              <td>SIL 2</td>
            </tr>
            <tr>
              <td>R13</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>9</td>
              <td>SIL 1</td>
            </tr>
            <tr>
              <td>R14</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>9</td>
              <td>SIL 1</td>
            </tr>
            <tr>
              <td>R15</td>
              <td>4</td>
              <td>3</td>
              <td>3</td>
              <td>5</td>
              <td>11</td>
              <td>SIL 3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="robot-container2">
        <h2 className="robot-h2">Seguridad</h2>
        <p className="parr-graph">
          Con el objetivo de garantizar un entorno de trabajo seguro y eficiente
          en la operación de la celda robotizada, se han diseñado e implementado
          una serie de acciones específicas para mitigar los riesgos identificados.
          Estas medidas no solo buscan prevenir incidentes, sino también promover la
          continuidad operativa, proteger a los operarios y optimizar el desempeño de
          los equipos. Las acciones planificadas incluyen:
        </p>
        <h3>Mitigación del Riesgo</h3>
        <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead className="table-header">
            <tr>
              <th>ID</th>
              <th>Actividades de Mitigación</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="parr-graph">
          Después de implementar las medidas de mitigación correspondientes,
          se elaboró una nueva matriz de riesgos actualizada. Esta matriz refleja
          la reducción en la probabilidad y/o severidad de los riesgos previamente
          identificados, demostrando la efectividad de las acciones correctivas aplicadas.
        </p>
        <h3>Reclasificación del Riesgo</h3>
        <table border={1} style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead className="table-header">
            <tr>
              <th>ID</th>
              <th>Severidad (S)</th>
              <th>Frecuencia (F)</th>
              <th>Probabilidad (W)</th>
              <th>Probabilidad evitar o limitar daño (P)</th>
              <th>Clase (K)</th>
              <th>Clasificación de riesgo</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.severidad}</td>
                <td>{row.frecuencia}</td>
                <td>{row.probabilidad}</td>
                <td>{row.evitarDano}</td>
                <td>{row.clase}</td>
                <td>{row.clasificacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="parr-graph">
          Por último, se lleva a cabo una comparación detallada de las clasificaciones
          de riesgo antes y después de implementar las medidas de mitigación. Los
          resultados evidencian una disminución significativa en los niveles de riesgo
          identificados, lo que refleja la efectividad de las acciones correctivas y
          preventivas adoptadas. Este análisis no solo demuestra la mejora en la seguridad
          operativa, sino que también valida el enfoque estratégico utilizado para minimizar
          peligros, garantizando un entorno más seguro y eficiente para los operarios y el equipo.
        </p>
        <h3>Comparación del Riesgo</h3>
        <table border={1} style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead className="table-header">
            <tr>
              <th>ID</th>
              <th>Clasificación de riesgo antes</th>
              <th>Clasificación de riesgo después</th>
            </tr>
          </thead>
          <tbody>
            {data3.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.before}</td>
                <td>{row.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Robot;
