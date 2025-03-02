import { FocusEvent, useEffect, useState } from 'react';
import avion from '../Img/avion.jpeg'
import carro from '../Img/carro.jpeg'
import submarino from '../Img/submarino.jpeg'
import { IHistorico, IRealTime } from './MES';
import Chart from "react-apexcharts";

interface ProduccionProps {
  token: string
  info: IRealTime | undefined
  hist: IHistorico[]
}

const Produccion = (props: ProduccionProps) => {
  const [data, setData] = useState([
    { imgSrc: avion, producidas: 0, objetivo: 0 },
    { imgSrc: carro, producidas: 0, objetivo: 0 },
    { imgSrc: submarino, producidas: 0, objetivo: 0 },
  ]);
  const [error, setError] = useState<string | null>(null)
  const [historic, setHistoric] = useState<Partial<IHistorico>[]>([])

  const historicKeys = [
    "Contador_Carros",
    "Contador_Submarinos",
    "Contador_Aviones",
    "Objetivo_Carros",
    "Objetivo_Submarinos",
    "Objetivo_Aviones"
  ]

  const castKey = (key:string):string=>{
    switch(key){
      case "Contador_Carros":
        return "Total de carros producidos"
      case "Contador_Submarinos":
        return "Total de submarinos producidos"
      case "Contador_Aviones":
        return "Total de aviones producidos"
      case "Objetivo_Carros":
        return "Objetivo de producción de carros"
      case "Objetivo_Submarinos":
        return "Objetivo de producción de submarinos"
      case "Objetivo_Aviones":
        return "Objetivo de producción de aviones"
      default:
        return key
    }
  }

  // Estado para filtrar series visibles
  const [selectedKeys, setSelectedKeys] = useState<string[]>(historicKeys);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // Datos para la gráfica
  const series = historicKeys
    .filter(key => selectedKeys.includes(key)) // Filtrar las series seleccionadas
    .map(key => ({
      name: key,
      data: historic.map(item => item[key as keyof IHistorico] as number),
    }));

  // Configuración del gráfico
  const options = {
    chart: {
      id: "historico-chart",
      toolbar: { show: true },
    },
    xaxis: {
      categories: historic.map(item =>
        new Date(parseInt(item.SK!)).toLocaleTimeString()
      ), // Convertir timestamp a hora legible
      title: { text: "Tiempo" },
    },
    stroke: { curve: "smooth" as "smooth" },
    dataLabels: { enabled: false },
    markers: { size: 4 },
    yaxis: { title: { text: "Valores" } },
    legend: { show: false },
  };

  // Manejar cambios en la selección de series
  const toggleSeries = (key: string) => {
    setSelectedKeys(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  useEffect(() => {
    const updatedData = [...data];
    const updatedHist: Partial<IHistorico>[] = [];
    let prevProd: 'Aviones' | 'Carros' | 'Submarinos' | undefined = undefined
    let prevCount: number = 0;
    let actualProd: 'Aviones' | 'Carros' | 'Submarinos' | undefined = undefined
    for (let i of props.hist) {
      updatedHist.push({
        SK: i.SK, 
        Contador_Carros: i.Producir_Carros ? i.Contador_Celda : 0,
        Contador_Submarinos: i.Producir_Submarinos ? i.Contador_Celda : 0,
        Contador_Aviones: i.Producir_Aviones ? i.Contador_Celda : 0,
        Objetivo_Carros: i.Objetivo_Carros,
        Objetivo_Submarinos: i.Objetivo_Submarinos,
        Objetivo_Aviones: i.Objetivo_Aviones,
      })
      actualProd = i.Producir_Aviones ? 'Aviones' : i.Producir_Carros ? 'Carros' : i.Producir_Submarinos ? 'Submarinos' : undefined
      if (prevProd !== actualProd) {
        switch (prevProd) {
          case 'Aviones':
            updatedData[0].producidas += Math.max(prevCount, i.Contador_Celda);
            break
          case 'Carros':
            updatedData[1].producidas += Math.max(prevCount, i.Contador_Celda);
            break
          case 'Submarinos':
            updatedData[2].producidas += Math.max(prevCount, i.Contador_Celda);
            break
        }
      }
      prevCount = i.Contador_Celda;
      prevProd = actualProd;
    }
    updatedData[0].objetivo = props.info?.Objetivo_Aviones ?? 0
    updatedData[1].objetivo = props.info?.Objetivo_Carros ?? 0
    updatedData[2].objetivo = props.info?.Objetivo_Submarinos ?? 0
    setData(updatedData);
    setHistoric(updatedHist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.info, props.hist])

  const handleChange = (index: number, event: FocusEvent<HTMLInputElement, Element>) => {
    const newObjetivo = event.target.value;
    const updatedData = [...data];
    const num = Number(newObjetivo)
    updatedData[index].objetivo = num;
    setError(null);
    setData(updatedData);
    if (isNaN(data[0].objetivo) || data[0].objetivo < 0) {
      setError('Objetivo de aviones inválido')
      return;
    }
    if (isNaN(data[1].objetivo) || data[1].objetivo < 0) {
      setError('Objetivo de carros inválido')
      return;
    }
    if (isNaN(data[2].objetivo) || data[2].objetivo < 0) {
      setError('Objetivo de submarinos inválido')
      return;
    }
    fetch('https://zm3af0dzel.execute-api.us-east-1.amazonaws.com/prod/RT/MES', {
      headers: {
        Authorization: `Bearer ${props.token}`
      },
      method: 'POST',
      body: JSON.stringify({
        Objetivo_Carros: data[1].objetivo,
        Objetivo_Submarinos: data[2].objetivo,
        Objetivo_Aviones: data[0].objetivo,
      }),
    })
      .then(async r => {
        if (r.status === 200) {
          setError(null);
        } else {
          const error = await r.json()
          setError(error?.name ?? error?.message ?? error?.error ?? 'Api Error')
        }
      })
      .catch(e => {
        setError(e?.name ?? e?.message ?? e?.error ?? 'Api Error')
      })
  };

  return (
    <div className="mes-produccion-container">
      <div className="mes-produccion-content">
        <h2 className="mes-produccion-title">Producción</h2>
        <p className="mes-produccion-error">{error}</p>
        {data.map((item, index) => (
          <div key={index} className="mes-produccion-row">
            <img src={item.imgSrc} alt={`Machine ${index + 1}`} className="mes-produccion-image" />
            <div className="mes-produccion-info">
              <p className="mes-produccion-unidades">Producidos: {item.producidas}</p>
              <p className="mes-produccion-objetivo">
                Objetivo:{" "}
                <input
                  key={`Input ${index}: ${item.objetivo}`}
                  type="number"
                  className="mes-produccion-objetivo-input"
                  defaultValue={item.objetivo}
                  onBlur={(e) => handleChange(index, e)}
                  min={0}
                  step={100}
                />
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mes-produccion-content">
        <h2 className="mes-produccion-title">Histórico</h2>
        <div className="dropdown-container">
          <button className="dropdown-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
            Filtrar Series ▼
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              {historicKeys.map(key => (
                <label key={key} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedKeys.includes(key)}
                    onChange={() => toggleSeries(key)}
                  />
                  {castKey(key)}
                </label>
              ))}
            </div>
          )}
        </div>
        <div className="mes-historico-chart">
          <Chart options={options} series={series} type="line" height={'100%'} width={'120%'} />
        </div>
      </div>
    </div>
  );
};

export default Produccion;
