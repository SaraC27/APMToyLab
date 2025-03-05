import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import mermaid from "mermaid";
import pre from "../../Vid/Pre.mp4"
import post from "../../Vid/Post.mp4"
import './Mod1.css'

const TimeSeriesCharts = () => {
  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const years = Array.from({ length: 11 }, (_, i) => 2019 + i);
  const categories = years.flatMap(year =>
    months.map(month => `${month} ${year}`)
  );

  const options = {
    chart: { type: "line" as "line", zoom: { enabled: true } },
    xaxis: { categories: categories, title: { text: "Mes" } },
    yaxis: {
      title: { text: "Cantidad" },
      labels: {
        formatter: (value: number) => Math.round(value).toString(),
      },
    },
    stroke: { curve: "smooth" as "smooth" },
    tooltip: {
      shared: true, intersect: false,
      y: {
        formatter: (value: number) => Math.round(value).toString(),
      },
    },
    legend: { position: "top" as "top" },
    colors: ["#C9373B", "#007BFF", "#28A745"],
  };

  const series = [
    {
      name: "Carros",
      data: [
        73, 73, 192, 192, 173.5, 173.5, 119, 119, 192, 192, 685, 685,
        88, 88, 231.5, 231.5, 209.5, 209.5, 143.5, 143.5, 231.5, 231.5,
        827, 827, 103.5, 103.5, 272, 272, 246.5, 246.5, 168.5, 168.5,
        272, 272, 972, 972, 112, 112, 293.5, 293.5, 266, 266, 182, 182,
        293.5, 293.5, 1049, 1049, 123.5, 123.5, 324, 324, 293, 293,
        200.5, 200.5, 324, 324, 1157, 1157, 137.5, 137.5, 360.4, 360.4,
        326.35, 326.35, 223.15, 223.15, 360.4, 360.4, 1287.8, 1287.8,
        535.2, 535.2, 1404.4, 1404.4, 1270.7, 1270.7, 869.7, 869.7,
        1404.4, 1404.4, 5015.9, 5015.9, 579.65, 579.65, 1521, 1521,
        1376.2, 1376.2, 941.95, 941.95, 1521, 1521, 5432.35, 5432.35,
        624.1, 624.1, 1637.6, 1637.6, 1481.7, 1481.7, 1014.2, 1014.2,
        1637.6, 1637.6, 5848.8, 5848.8, 668.55, 668.55, 1754.2, 1754.2,
        1587.2, 1587.2, 1086.45, 1086.45, 1754.2, 1754.2, 6265.25, 6265.25,
        713, 713, 1870.8, 1870.8, 1692.7, 1692.7, 1158.7, 1158.7, 1870.8,
        1870.8, 6681.7, 6681.7,
      ],
    },
    {
      name: "Submarinos",
      data: [
        50.5, 50.5, 132, 132, 119.5, 119.5, 82, 82, 132, 132, 472, 472,
        60.5, 60.5, 159.5, 159.5, 144.5, 144.5, 98.5, 98.5, 159.5, 159.5,
        569.5, 569.5, 71.5, 71.5, 187.5, 187.5, 169.5, 169.5, 116, 116,
        187.5, 187.5, 669.5, 669.5, 77, 77, 202.5, 202.5, 183, 183, 125,
        125, 202.5, 202.5, 722.5, 722.5, 85, 85, 223, 223, 202, 202,
        138, 138, 223, 223, 797, 797, 94.55, 94.55, 248.4, 248.4, 224.75,
        224.75, 153.45, 153.45, 248.4, 248.4, 887, 887, 368.1, 368.1,
        967.3, 967.3, 875, 875, 598.9, 598.9, 967.3, 967.3, 3454.2, 3454.2,
        398.6, 398.6, 1047.6, 1047.6, 947.65, 947.65, 648.65, 648.65,
        1047.6, 1047.6, 3740.95, 3740.95, 429.1, 429.1, 1127.9, 1127.9,
        1020.3, 1020.3, 698.4, 698.4, 1127.9, 1127.9, 4027.7, 4027.7,
        459.6, 459.6, 1208.2, 1208.2, 1092.95, 1092.95, 748.15, 748.15,
        1208.2, 1208.2, 4314.45, 4314.45, 490.1, 490.1, 1288.5, 1288.5,
        1165.6, 1165.6, 797.9, 797.9, 1288.5, 1288.5, 4601.2, 4601.2,
      ],
    },
    {
      name: "Aviones",
      data: [
        28.5, 28.5, 74.5, 74.5, 67.5, 67.5, 46, 46, 74.5, 74.5, 265.5,
        265.5, 34, 34, 89.5, 89.5, 81, 81, 55.5, 55.5, 89.5, 89.5, 320.5,
        320.5, 40, 40, 105.5, 105.5, 95.5, 95.5, 65.5, 65.5, 105.5, 105.5,
        377, 377, 43.5, 43.5, 114, 114, 103, 103, 70.5, 70.5, 114, 114,
        406.5, 406.5, 48, 48, 125.5, 125.5, 113.5, 113.5, 77.5, 77.5,
        125.5, 125.5, 448.5, 448.5, 53.35, 53.35, 139.75, 139.75, 126.3,
        126.3, 86.4, 86.4, 139.75, 139.75, 499.2, 499.2, 207.7, 207.7,
        544.4, 544.4, 492.7, 492.7, 336.6, 336.6, 544.4, 544.4, 1944.3,
        1944.3, 225, 225, 589.6, 589.6, 533.6, 533.6, 364.5, 364.5, 589.6,
        589.6, 2105.75, 2105.75, 242.3, 242.3, 634.8, 634.8, 574.5, 574.5,
        392.4, 392.4, 634.8, 634.8, 2267.2, 2267.2, 259.6, 259.6, 680,
        680, 615.4, 615.4, 420.3, 420.3, 680, 680, 2428.65, 2428.65,
        276.9, 276.9, 725.2, 725.2, 656.3, 656.3, 448.2, 448.2, 725.2,
        725.2, 2590.1, 2590.1,
      ],
    },
  ];

  const etapas = `graph LR
    A[Mezclado de plástico con pigmentos y aditivos] --> B[Dosificación de plástico en pequeñas cantidades]
    B --> C[Inyección para formar diferentes piezas]
    C --> C1[Detalles]
    C --> C2[Partes móviles]
    C --> C3[Cuerpos]
    C1 --> D[Uso de herramientas para retirar rebabas]
    C2 --> D
    C3 --> D
    D --> E[Ensamble parcial de cuerpos y detalles específicos]
    E --> F[Ensamble parcial de piezas móviles]
    F --> G[Ensamble final del producto]
    G --> H[Empaque en papel burbuja y cajas individuales]
    H --> I[Paletizado de cajas para transporte y distribución]
  `

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
        fontSize: '30px'
      },
    });
    mermaid.contentLoaded();
  }, []);

  return (
    <div className="mod1-container">
      <div className="chart-container">
        <h2 className="mod1-h2">Demanda de Juguetes</h2>
        <p className="parr-graph">La gráfica muestra la demanda para la fábrica de juguetes.
          Los datos antes de Diciembre de 2024 corresponden a estimaciones
          para una acaparación de mercado promedio en una empresa colombiana, en base
          a los datos declarados por la DIAN para la actividad económica:
          Fabricación de juegos, juguetes y rompecabezas. Los datos posteriores a Diciembre de 2024,
          corresponden a una estimación obtenida mediante una regresión lineal de los datos mes a mes,
          pero para una acaparación 2% mayor al promedio del mercado.
          La gráfica muestra información al colocar el cursor encima, permite hacer zoom,
          descargarse en diferentes formatos, entre otras cosas.
        </p>
        <Chart options={options} series={series} type="line" height={350} />
      </div>
      <div className="chart-container">
        <h2 className="mod1-h2">Etapas de Manufactura</h2>
        <p className="parr-graph">
          La evaluación de las condiciones actuales de la planta es el primer paso hacia la mejora
          continua de los procesos. Este análisis no solo asegura la sostenibilidad de la calidad,
          sino también la posibilidad de implementar nuevas tecnologías. A continuación, se
          describen las etapas principales que definen el proceso de manufactura de la planta
          de juguetes.
        </p>
        <div className="mermaid">
          {etapas}
        </div>
      </div>
      <div className="chart-container">
        <h2 className="mod1-h2">Planta Pre - Automatizada</h2>
        <h3>Tecnomatix</h3>
        <video controls width="1024" height="480">
          <source src={pre} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
        <h3>Indicadores de Producción</h3>
        <table border={1} style={{ marginTop: 20 }}>
          <thead className="table-header">
            <tr>
              <th>KPI</th>
              <th>Descripción</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Takt Time (T)</td>
              <td>Cadencia con la que se debe fabricar el producto para satisfacer la demanda</td>
              <td>3.78 min/juguete</td>
            </tr>
            <tr>
              <td>Tiempo de ciclo (Tc)</td>
              <td>Tiempo de proceso</td>
              <td>3,16 min</td>
            </tr>
            <tr>
              <td>Tasa de producción (Rp)</td>
              <td>Número de partes producidas por hora</td>
              <td>18 juguetes/hora</td>
            </tr>
            <tr>
              <td>Capacidad de producción (Pc)</td>
              <td>Máxima tasa de salida que la fábrica puede alcanzar</td>
              <td>838 juguetes/semana</td>
            </tr>
            <tr>
              <td>Tiempo total de manufactura (MLT)</td>
              <td>Tiempo desde la orden de producción hasta la finalización del lote (143 juguetes)</td>
              <td>7,67 horas</td>
            </tr>
            <tr>
              <td>Disponibilidad (A)</td>
              <td>Disponibilidad de las máquinas</td>
              <td>80 %</td>
            </tr>
            <tr>
              <td>Eficiencia</td>
              <td>Eficiencia de desempeño</td>
              <td>70 %</td>
            </tr>
            <tr>
              <td>Calidad</td>
              <td>Porcentaje de producto defectuoso</td>
              <td>90 %</td>
            </tr>
            <tr>
              <td>Overall Equipment Effectiveness (OEE)</td>
              <td>Indicador general de desempeño</td>
              <td>50 %</td>
            </tr>
            <tr>
              <td>Utilización (U)</td>
              <td>Porcentaje de tiempo en que la fábrica está operativa</td>
              <td>85,26 %</td>
            </tr>
          </tbody>
        </table>
        <h3>VSM</h3>
        <button className="VSM-button" onClick={() => { window.open("PDF/VSM_Pre.pdf", '_blank'); }}>PDF</button>
      </div>
      <div className="chart-container" style={{ paddingLeft: 100, paddingRight: 100 }}>
        <h2 className="mod1-h2">Propuesta Automatización</h2>
        <h3 className="mod1-h3">Transporte de piezas desde las inyectoras hasta las estaciones de rebaba</h3>
        <p style={{ textAlign: 'start' }}>Actualmente, las piezas moldeadas son trasladadas desde las inyectoras hasta las estaciones de rebaba mediante un sistema de bandas transportadoras y un proceso manual. Para reducir tiempos y eliminar el almacenamiento intermedio, se propone:</p>
        <ul className="mod1-ul">
          <li><strong>Instalar un nuevo sistema de bandas transportadoras</strong> que conecte directamente las inyectoras con las estaciones de rebaba.</li>
          <li>Con esta mejora, el tiempo total de transporte se reducirá de 28 a 15 segundos, eliminando la necesidad de transporte manual y permitiendo la reubicación del operario a tareas más estratégicas.</li>
        </ul>

        <h3 className="mod1-h3">Pulido de ejes de acero inoxidable</h3>
        <p style={{ textAlign: 'start' }}>En la actualidad, los ejes de acero inoxidable cortados mediante láser son pulidos manualmente, requiriendo un operario que realice esta tarea uno a uno. La propuesta incluye:</p>
        <ul className="mod1-ul">
          <li><strong>Implementar una máquina de acabado por vibración</strong> para procesar múltiples ejes de manera simultánea.</li>
          <li>Esta mejora reducirá el tiempo de pulido por eje de 10 a 3,75 segundos y liberará al operario, quien asumirá tareas de supervisión, incrementando la eficiencia y ergonomía del área.</li>
        </ul>

        <h3 className="mod1-h3">Empacado y paletizado</h3>
        <p style={{ textAlign: 'start' }}>El proceso manual actual de empacado y paletizado consume tiempo significativo y requiere de varios operarios. Para optimizar este flujo, se propone:</p>
        <ul className="mod1-ul">
          <li><strong>Instalar una celda robotizada</strong> que automatice las tareas de empacado (envoltura en papel panal y empaque en cajas) y paletizado.</li>
          <li>Con esta automatización, el tiempo de empacado se reducirá de 60 a 40 segundos, y el tiempo de paletizado de 15 a 10 segundos por juguete. Los operarios, en lugar de realizar estas tareas repetitivas, pasarán a supervisar la celda robotizada.</li>
        </ul>

        <h3 className="mod1-h3">Beneficios esperados</h3>
        <p style={{ textAlign: 'start' }}>La implementación de estas propuestas permitirá:</p>
        <ul className="mod1-ul">
          <li>Reducir significativamente los tiempos de cada etapa clave del proceso.</li>
          <li>Optimizar el uso de recursos humanos, asignando a los operarios a tareas más estratégicas y menos repetitivas.</li>
          <li>Incrementar la productividad y la calidad del producto final, reforzando la competitividad de la empresa.</li>
        </ul>
      </div>
      <div className="chart-container">
        <h2 className="mod1-h2">Planta Automatizada</h2>
        <h3>Tecnomatix</h3>
        <video controls width="1024" height="480">
          <source src={post} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
        <h3>Indicadores de Producción</h3>
        <table border={1} style={{ marginTop: 20 }}>
          <thead className="table-header">
            <tr>
              <th>KPI</th>
              <th>Descripción</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Takt Time (T)</td>
              <td>Cadencia con la que se debe fabricar el producto para satisfacer la demanda</td>
              <td>2,34 min/juguete</td>
            </tr>
            <tr>
              <td>Tiempo de ciclo (Tc)</td>
              <td>Tiempo de proceso</td>
              <td>2,28 min</td>
            </tr>
            <tr>
              <td>Tasa de producción (Rp)</td>
              <td>Número de partes producidas por hora</td>
              <td>25 juguetes/hora</td>
            </tr>
            <tr>
              <td>Capacidad de producción (Pc)</td>
              <td>Máxima tasa de salida que la fábrica puede alcanzar</td>
              <td>1157 juguetes/semana</td>
            </tr>
            <tr>
              <td>Tiempo total de manufactura (MLT)</td>
              <td>Tiempo desde la orden de producción hasta la finalización del lote (231 juguetes)</td>
              <td>8,98 horas</td>
            </tr>
            <tr>
              <td>Disponibilidad (A)</td>
              <td>Disponibilidad de las máquinas</td>
              <td>88 %</td>
            </tr>
            <tr>
              <td>Eficiencia</td>
              <td>Eficiencia de desempeño</td>
              <td>71 %</td>
            </tr>
            <tr>
              <td>Calidad</td>
              <td>Porcentaje de producto defectuoso</td>
              <td>90 %</td>
            </tr>
            <tr>
              <td>Overall Equipment Effectiveness (OEE)</td>
              <td>Indicador general de desempeño</td>
              <td>57 %</td>
            </tr>
            <tr>
              <td>Utilización (U)</td>
              <td>Porcentaje de tiempo en que la fábrica está operativa</td>
              <td>61,78 %</td>
            </tr>
          </tbody>
        </table>
        <h3>VSM</h3>
        <button className="VSM-button" onClick={() => { window.open("PDF/VSM_Post.pdf", '_blank'); }}>PDF</button>
        <p className="parr-graph" style={{ backgroundColor: '#f86a6f', color: '#444', textAlign: 'center', fontWeight: 'bolder' }}>
          ANOTACIÓN (WORK IN PROGRESS):<br /> Los indicadores de la planta automatizada son un acercamiento.
          Seguimos revisando y aprendiendo sobre los valores, ya que se debe
          lograr mejoras significativas en la planta automatizada. También, somos conscientes de que
          la demanda y el VSM no concuerdan en la cantidad de juguetes que deben producirse, pero estamos
          ajustando la planta automatizada para poder lograr lo que la demanda solicita.
        </p>
      </div>
    </div>
  );
};

export default TimeSeriesCharts;
