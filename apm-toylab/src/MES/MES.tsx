import React, { useEffect, useState } from "react";
import "./MES.css";
import Produccion from "./Produccion";
import Supervision from "./Supervision";
import avion from '../Img/avion.jpeg'
import carro from '../Img/carro.jpeg'
import submarino from '../Img/submarino.jpeg'

export interface IRealTime {
  // Inyectoras
  Sensor_Inyectora_A: boolean;
  Banda_Inyectora_A: boolean;
  Sensor_Banda_Principal_A: boolean;
  Compuerta_Inyectora_A: number;
  Control_Inyectora_A: number;
  Contador_Inyectora_A: number;
  Estado_Inyectora_A: number;
  On_Inyectora_A: boolean;
  Off_Inyectora_A: boolean;
  Mantenimiento_Inyectora_A: boolean;
  Falla_Inyectora_A: boolean;
  Conexion_Inyectora_A: boolean;

  Sensor_Inyectora_B: boolean;
  Banda_Inyectora_B: boolean;
  Sensor_Banda_Principal_B: boolean;
  Compuerta_Inyectora_B: number;
  Control_Inyectora_B: number;
  Contador_Inyectora_B: number;
  Estado_Inyectora_B: number;
  On_Inyectora_B: boolean;
  Off_Inyectora_B: boolean;
  Mantenimiento_Inyectora_B: boolean;
  Falla_Inyectora_B: boolean;
  Conexion_Inyectora_B: boolean;

  Sensor_Inyectora_C: boolean;
  Banda_Inyectora_C: boolean;
  Sensor_Banda_Principal_C: boolean;
  Compuerta_Inyectora_C: number;
  Control_Inyectora_C: number;
  Contador_Inyectora_C: number;
  Estado_Inyectora_C: number;
  On_Inyectora_C: boolean;
  Off_Inyectora_C: boolean;
  Mantenimiento_Inyectora_C: boolean;
  Falla_Inyectora_C: boolean;
  Conexion_Inyectora_C: boolean;

  // Estaciones
  Compuerta_Estacion_A: number;
  Clindro_Estacion_A: number;
  Sensor_Banda_Estacion_A: boolean;
  Banda_Estacion_A: boolean;
  Sensor_Estacion_A: boolean;
  Contador_Estacion_A: number;
  Estado_Estacion_A: number;
  On_Estacion_A: boolean;
  Off_Estacion_A: boolean;
  Mantenimiento_Estacion_A: boolean;
  Falla_Estacion_A: boolean;
  Conexion_Estacion_A: boolean;

  Compuerta_Estacion_B: number;
  Clindro_Estacion_B: number;
  Sensor_Banda_Estacion_B: boolean;
  Banda_Estacion_B: boolean;
  Sensor_Estacion_B: boolean;
  Contador_Estacion_B: number;
  Estado_Estacion_B: number;
  On_Estacion_B: boolean;
  Off_Estacion_B: boolean;
  Mantenimiento_Estacion_B: boolean;
  Falla_Estacion_B: boolean;
  Conexion_Estacion_B: boolean;

  Compuerta_Estacion_C: number;
  Clindro_Estacion_C: number;
  Sensor_Banda_Estacion_C: boolean;
  Banda_Estacion_C: boolean;
  Sensor_Estacion_C: boolean;
  Contador_Estacion_C: number;
  Estado_Estacion_C: number;
  On_Estacion_C: boolean;
  Off_Estacion_C: boolean;
  Mantenimiento_Estacion_C: boolean;
  Falla_Estacion_C: boolean;
  Conexion_Estacion_C: boolean;

  // Banda Principal
  Banda_Principal: boolean;
  Estado_Banda_Principal: number;
  Mantenimiento_Banda_Principal: boolean;
  Falla_Banda_Principal: boolean;
  Conexion_Banda_Principal: boolean;

  // Celda
  Banda_Salida: boolean;
  Sensor_Banda_Salida: boolean;
  Sensor_Celda: boolean;
  On_Celda: boolean;
  Off_Celda: boolean;
  Estado_Celda: number;
  Mantenimiento_Celda: boolean;
  Contador_Celda: number;
  Falla_Celda: boolean;
  Reset_Celda: boolean;
  Conexion_Celda: boolean;
  Start_Celda: boolean;
  Stop_Celda: boolean;

  // Producción
  Producir_Carros: boolean;
  Producir_Submarinos: boolean;
  Producir_Aviones: boolean;
  Objetivo_Carros: number;
  Objetivo_Submarinos: number;
  Objetivo_Aviones: number;
}

export interface IHistorico {
  SK: string;
  Contador_Inyectora_A: number;
  Estado_Inyectora_A: number;
  Contador_Inyectora_B: number;
  Estado_Inyectora_B: number;
  Contador_Inyectora_C: number;
  Estado_Inyectora_C: number;
  Contador_Estacion_A: number;
  Estado_Estacion_A: number;
  Contador_Estacion_B: number;
  Estado_Estacion_B: number;
  Contador_Estacion_C: number;
  Estado_Estacion_C: number;
  Estado_Banda_Principal: number;
  Estado_Celda: number;
  Contador_Celda: number;
  Producir_Carros: boolean;
  Producir_Submarinos: boolean;
  Producir_Aviones: boolean;
  Objetivo_Carros: number;
  Objetivo_Submarinos: number;
  Objetivo_Aviones: number;
  // Extended
  Contador_Carros: number;
  Contador_Submarinos: number;
  Contador_Aviones: number;
}

interface KpiCardProps {
  title: string;
  value: number;
}

const KpiCard = ({ title, value }: KpiCardProps) => {
  return (
      <div className="kpi-card">
          <p className="kpi-title">{title}</p>
          <p className="kpi-value">{(100*value).toFixed(2)}%</p>
      </div>
  );
};

const dummyData: IHistorico[] = [
  {
    SK: new Date().valueOf().toString(),
    Contador_Inyectora_A: 120,
    Estado_Inyectora_A: 1,
    Contador_Inyectora_B: 150,
    Estado_Inyectora_B: 0,
    Contador_Inyectora_C: 170,
    Estado_Inyectora_C: 1,
    Contador_Estacion_A: 200,
    Estado_Estacion_A: 1,
    Contador_Estacion_B: 220,
    Estado_Estacion_B: 0,
    Contador_Estacion_C: 180,
    Estado_Estacion_C: 1,
    Estado_Banda_Principal: 1,
    Estado_Celda: 0,
    Contador_Celda: 190,
    Producir_Carros: true,
    Producir_Submarinos: false,
    Producir_Aviones: true,
    Objetivo_Carros: 300,
    Objetivo_Submarinos: 250,
    Objetivo_Aviones: 280,
    Contador_Carros: 0,
    Contador_Aviones: 0,
    Contador_Submarinos: 0,
  },
  {
    SK: (new Date().valueOf() + 60000).toString(), // +1 minuto
    Contador_Inyectora_A: 130,
    Estado_Inyectora_A: 0,
    Contador_Inyectora_B: 160,
    Estado_Inyectora_B: 1,
    Contador_Inyectora_C: 180,
    Estado_Inyectora_C: 1,
    Contador_Estacion_A: 210,
    Estado_Estacion_A: 1,
    Contador_Estacion_B: 230,
    Estado_Estacion_B: 1,
    Contador_Estacion_C: 190,
    Estado_Estacion_C: 0,
    Estado_Banda_Principal: 1,
    Estado_Celda: 1,
    Contador_Celda: 200,
    Producir_Carros: false,
    Producir_Submarinos: true,
    Producir_Aviones: true,
    Objetivo_Carros: 320,
    Objetivo_Submarinos: 260,
    Objetivo_Aviones: 290,
    Contador_Carros: 0,
    Contador_Aviones: 0,
    Contador_Submarinos: 0,
  },
  {
    SK: (new Date().valueOf() + 120000).toString(), // +2 minutos
    Contador_Inyectora_A: 140,
    Estado_Inyectora_A: 1,
    Contador_Inyectora_B: 170,
    Estado_Inyectora_B: 0,
    Contador_Inyectora_C: 190,
    Estado_Inyectora_C: 1,
    Contador_Estacion_A: 220,
    Estado_Estacion_A: 1,
    Contador_Estacion_B: 240,
    Estado_Estacion_B: 0,
    Contador_Estacion_C: 200,
    Estado_Estacion_C: 1,
    Estado_Banda_Principal: 0,
    Estado_Celda: 1,
    Contador_Celda: 210,
    Producir_Carros: true,
    Producir_Submarinos: true,
    Producir_Aviones: false,
    Objetivo_Carros: 330,
    Objetivo_Submarinos: 270,
    Objetivo_Aviones: 300,
    Contador_Carros: 0,
    Contador_Aviones: 0,
    Contador_Submarinos: 0,
  },
];


const MES = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPass] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [showToken, setShowToken] = useState<boolean>(false);
  const [info, setInfo] = useState<IRealTime | undefined>(undefined);
  const [hist, setHist] = useState<IHistorico[]>([]);
  const [kpis, setKpis] = useState({
    Ocupacion: 0,
    Eficiencia: 0,
    Disponibilidad: 0,
    Calidad: 0,
    OEE: 0,
  })
  const [produccion, setProduccion] = useState([
    { imgSrc: avion, producidas: 0, objetivo: 0 },
    { imgSrc: carro, producidas: 0, objetivo: 0 },
    { imgSrc: submarino, producidas: 0, objetivo: 0 },
  ]);

  useEffect(()=>{
    let tiempoCiclo = 0;
    const tiempoInicial = Number(hist.at(0)?.SK)
    for(let i of hist){
      if(i.Contador_Celda > 1){
        tiempoCiclo = Number(i.SK) - tiempoInicial;
        break;
      }
    }
    const tiempoTotal = (Number(hist.at(-1)?.SK) - Number(hist.at(0)?.SK)) / (60 * 60 * 1000) // horas
    tiempoCiclo /= (60 * 1000); // minutos
    const kpisUpdate = {...kpis};
    const totalProduccion = 45 * (produccion[0].producidas + produccion[1].producidas + produccion[2].producidas);
    kpisUpdate.Ocupacion = totalProduccion / 4613;
    kpisUpdate.Eficiencia = totalProduccion * tiempoCiclo * 1.75 / (60 * 45);
    kpisUpdate.Disponibilidad = 36 / (45*tiempoTotal);
    kpisUpdate.Calidad = 0.9;
    kpisUpdate.OEE = kpisUpdate.Eficiencia * kpisUpdate.Disponibilidad * kpisUpdate.Calidad;
    setKpis(kpisUpdate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hist, produccion])

  function handleLogin() {
    if (!loading) {
      if (!email || !password) {
        setError('Ingrese email y contraseña')
        return;
      }
      setLoading(true);
      fetch('https://zm3af0dzel.execute-api.us-east-1.amazonaws.com/prod/Auth', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
      })
        .then(async r => {
          if (r.status === 200) {
            return r.json()
          } else {
            const error = await r.json()
            return Promise.reject(error?.error ?? 'Login Error')
          }
        })
        .then(bodyResponse => bodyResponse?.results)
        .then(r => {
          if (r) {
            setError(null);
            setToken(r);
            load(r);
          }
        })
        .catch(e => {
          setError(e?.name ?? e?.message ?? e?.error ?? 'Login Error')
        })
        .finally(() => {
          setLoading(false);
        })
    }
  };

  function load(tokenForce?: string) {
    if(!token && !tokenForce){
      return;
    }
    fetch('https://zm3af0dzel.execute-api.us-east-1.amazonaws.com/prod/RT/MES', {
      headers: {
        Authorization: `Bearer ${tokenForce !== undefined ? tokenForce : token}`
      },
      method: 'GET',
    })
      .then(async r => {
        if (r.status === 200) {
          return r.json()
        } else {
          const error = await r.json()
          return Promise.reject(error?.error ?? error)
        }
      })
      .then(bodyResponse => bodyResponse?.results)
      .then(r => {
        if (r) {
          const infoR: IRealTime = r;
          setInfo(infoR);
        }
      })
      .catch(e => { })
    fetch('https://zm3af0dzel.execute-api.us-east-1.amazonaws.com/prod/Historico', {
      headers: {
        Authorization: `Bearer ${tokenForce !== undefined ? tokenForce : token}`
      },
      method: 'GET',
    })
      .then(async r => {
        if (r.status === 200) {
          return r.json()
        } else {
          const error = await r.json()
          return Promise.reject(error?.error ?? error)
        }
      })
      .then(bodyResponse => bodyResponse?.results)
      .then(r => {
        if (r) {
          const infoR: IHistorico[] = r;
          setHist(infoR);
        }
      })
      .catch(e => { })
  }

  const copyToClipboard = () => {
    if (token) {
      navigator.clipboard.writeText(token).then(() => {
        alert("Token copiado al portapapeles!");
      }).catch(err => {
        console.error("Error al copiar: ", err);
      });
    }
  };

  useEffect(() => {
    load()
    const interval = setInterval(() => {
      load()
    }, 600000); // 10 min

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="mes-container">
      {token ? (
        <div className="mes-dashboard">
          <h1 className="mes-title">Sistema MES</h1>
          <div className="mes-dashboard-container">
            <div className="mes-card">
              <Produccion token={token} info={info} hist={hist} data={produccion} setData={setProduccion}/>
            </div>
            <div className="mes-card">
              <Supervision token={token} info={info} hist={hist}/>
            </div>
          </div>

          <div className="mes-kpis-container">
            <h4>KPIs</h4>
            <div className="kpi-grid">
                <KpiCard title="Ocupación" value={kpis.Ocupacion} />
                <KpiCard title="Eficiencia" value={kpis.Eficiencia} />
                <KpiCard title="Disponibilidad" value={kpis.Disponibilidad} />
                <KpiCard title="Calidad" value={kpis.Calidad} />
                <KpiCard title="OEE" value={kpis.OEE} />
            </div>
          </div>

          <div className="mes-token-container">
            <h4>Token para usar la API</h4>
            <button className="mes-icon-btn" onClick={() => setShowToken(!showToken)} title={showToken ? "Ocultar token" : "Mostrar token"}>
              {showToken ? "Ocultar" : "Mostrar"}
            </button>
            <input
              type="text"
              className="mes-token-input"
              value={showToken ? token : "*****"}
              readOnly
              onClick={(e) => {
                copyToClipboard();
                e.currentTarget.select();
              }} // Permite seleccionar al hacer clic
            />
          </div>
        </div>
      ) : (
        <div className="mes-login-box">
          <h2>Ingresar</h2>
          {error && <p className="mes-error-message">{error}</p>}
          <input
            type="email"
            placeholder="Usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mes-input-field"
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPass(e.target.value)}
            className="mes-input-field"
            disabled={loading}
          />
          <button className={`mes-login-btn ${loading ? "mes-loading" : ""}`} onClick={handleLogin} disabled={loading}>
            {loading ? <div className="mes-spinner"></div> : "Ingresar"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MES;
