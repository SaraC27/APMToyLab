import { useEffect, useState } from "react";
import { IRealTime } from "./MES";

interface SupervisionProps {
    token: string
    info: IRealTime | undefined
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
        { elemento: "Inyectora A", estado: 0 },
        { elemento: "Inyectora B", estado: 0 },
        { elemento: "Inyectora C", estado: 0 },
        { elemento: "Banda Principal", estado: 0 },
        { elemento: "Estación A", estado: 0 },
        { elemento: "Estación B", estado: 0 },
        { elemento: "Estación C", estado: 0 },
        { elemento: "Celda Robótica", estado: 0 },
    ]);

    useEffect(() => {
        const updatedData = [...data];
        updatedData[0].estado = props.info?.Estado_Inyectora_A ?? 0
        updatedData[1].estado = props.info?.Estado_Inyectora_B ?? 0
        updatedData[2].estado = props.info?.Estado_Inyectora_C ?? 0
        updatedData[3].estado = props.info?.Estado_Banda_Principal ?? 0
        updatedData[4].estado = props.info?.Estado_Estacion_A ?? 0
        updatedData[5].estado = props.info?.Estado_Estacion_B ?? 0
        updatedData[6].estado = props.info?.Estado_Estacion_C ?? 0
        updatedData[7].estado = props.info?.Estado_Celda ?? 0
        setData(updatedData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.info])

    return (
        <div className="mes-supervision-container">
            <h2 className="mes-supervision-title">Supervisión</h2>
            <table className="mes-supervision-table">
                <thead>
                    <tr>
                        <th>Elemento Planta</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.elemento}</td>
                            <td className={`mes-estado ${estadoClasses[item.estado]}`}>{estadoLabels[item.estado]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Supervision;
