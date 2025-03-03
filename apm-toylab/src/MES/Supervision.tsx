import { useEffect, useState } from "react";
import { IHistorico, IRealTime } from "./MES";
import Chart from "react-apexcharts";

interface SupervisionProps {
    token: string;
    info: IRealTime | undefined;
    hist: IHistorico[]
}

const Supervision = (props: SupervisionProps) => {
    const estadoClasses: { [key: number]: string } = {
        0: "mes-estado-offline",
        1: "mes-estado-stopped",
        2: "mes-estado-running",
        3: "mes-estado-maintenance",
        4: "mes-estado-failure",
        5: "mes-estado-setup",
    };

    const estadoLabels: { [key: number]: string } = {
        0: "Offline",
        1: "Stop",
        2: "Funcionando",
        3: "Mantenimiento",
        4: "Falla",
        5: "Setup",
    };

    const [data, setData] = useState([
        { elemento: "Inyectora A", estado: 0, indicadores: [0,0,0,0,0,0] },
        { elemento: "Inyectora B", estado: 0, indicadores: [0,0,0,0,0,0] },
        { elemento: "Inyectora C", estado: 0, indicadores: [0,0,0,0,0,0] },
        { elemento: "Banda Principal", estado: 0, indicadores: [0,0,0,0,0,0] },
        { elemento: "Estación A", estado: 0, indicadores: [0,0,0,0,0,0] },
        { elemento: "Estación B", estado: 0, indicadores: [0,0,0,0,0,0] },
        { elemento: "Estación C", estado: 0, indicadores: [0,0,0,0,0,0] },
        { elemento: "Celda Robótica", estado: 0, indicadores: [0,0,0,0,0,0] },
    ]);

    useEffect(() => {
        const updatedData = [...data];
        const totalTime = Number(props.hist.at(-1)?.SK) - Number(props.hist.at(0)?.SK)
        let prevTime = Number(props.hist.at(0)?.SK)
        for(let i of props.hist){
            let actualTime = Number(i.SK)
            let deltaT = actualTime - prevTime
            updatedData[0].indicadores[i.Estado_Inyectora_A] += deltaT
            updatedData[1].indicadores[i.Estado_Inyectora_B] += deltaT
            updatedData[2].indicadores[i.Estado_Inyectora_C] += deltaT
            updatedData[3].indicadores[i.Estado_Banda_Principal] += deltaT
            updatedData[4].indicadores[i.Estado_Estacion_A] += deltaT
            updatedData[5].indicadores[i.Estado_Estacion_B] += deltaT
            updatedData[6].indicadores[i.Estado_Estacion_C] += deltaT
            updatedData[7].indicadores[i.Estado_Celda] += deltaT
            prevTime = actualTime;
        }
        updatedData[0].estado = props.info?.Estado_Inyectora_A ?? 0;
        updatedData[1].estado = props.info?.Estado_Inyectora_B ?? 0;
        updatedData[2].estado = props.info?.Estado_Inyectora_C ?? 0;
        updatedData[3].estado = props.info?.Estado_Banda_Principal ?? 0;
        updatedData[4].estado = props.info?.Estado_Estacion_A ?? 0;
        updatedData[5].estado = props.info?.Estado_Estacion_B ?? 0;
        updatedData[6].estado = props.info?.Estado_Estacion_C ?? 0;
        updatedData[7].estado = props.info?.Estado_Celda ?? 0;
        [0,1,2,3,4,5].forEach(idx=>{
            updatedData[0].indicadores[idx] /= 0.01*(totalTime ?? 1)
            updatedData[1].indicadores[idx] /= 0.01*(totalTime ?? 1)
            updatedData[2].indicadores[idx] /= 0.01*(totalTime ?? 1)
            updatedData[3].indicadores[idx] /= 0.01*(totalTime ?? 1)
            updatedData[4].indicadores[idx] /= 0.01*(totalTime ?? 1)
            updatedData[5].indicadores[idx] /= 0.01*(totalTime ?? 1)
            updatedData[6].indicadores[idx] /= 0.01*(totalTime ?? 1)
            updatedData[7].indicadores[idx] /= 0.01*(totalTime ?? 1)
        })
        setData(updatedData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.info, props.hist]);

    return (
        <div className="mes-supervision-container">
            <h2 className="mes-supervision-title">Supervisión</h2>
            <table className="mes-supervision-table">
                <thead>
                    <tr>
                        <th>Elemento Planta</th>
                        <th>Estado Actual</th>
                        <th>Estados Máquina</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.elemento}</td>
                            <td className={`mes-estado ${estadoClasses[item.estado]}`}>
                                {estadoLabels[item.estado]}
                            </td>
                            <td>
                                <RadarChart data={item.indicadores} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Componente de gráfico de tela de araña
const RadarChart = ({ data }: { data: number[] }) => {
    const options = {
        chart: {
            type: "radar" as "radar",
            toolbar: { show: true },
            background: "#aaa"
        },
        xaxis: {
            categories: [
                "Offline",
                "Stop",
                "Funcionando",
                "Mantenimiento",
                "Falla",
                "Setup",
            ],
            labels: {
                style: {
                    colors: ["#333", "#333", "#333", "#333", "#333", "#333"], // Letras más oscuras (gris claro)
                    fontSize: "12px",
                },
            },
        },
        yaxis: {
            show: false,
        },
        stroke: {
            width: 2,
            colors: ["#FFF"],
        },
        fill: {
            opacity: 0.5,
            colors: ["#FFF"],
        },
        markers: {
            size: 3,
        },
        colors: ["#FFF"],
    };

    const series = [
        {
            name: "Porcentaje de tiempo %",
            data: data,
        },
    ];

    return (
        <div style={{ width: "100%", height: "100%", maxHeight: 300 }}>
            <Chart options={options} series={series} type="radar" height={'200%'} width={'100%'} />
        </div>
    );
};

export default Supervision;
