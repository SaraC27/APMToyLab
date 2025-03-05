import React, { useEffect, useState } from 'react';
import modulo1 from './Img/Modulo1.webp'
import modulo2 from './Img/Modulo2.webp'
import modulo3 from './Img/Modulo3.webp'
import modulo4 from './Img/Modulo4.webp'
import modulo5 from './Img/Modulo5.webp'
import modulo6 from './Img/Modulo6.webp'
import modulo7 from './Img/Modulo7.webp'
import modulo8 from './Img/Modulo8.webp'
import Mod1 from './Modulos/Mod1/Mod1'
import Mod2 from './Modulos/Mod2/Mod2'
import Mod3 from './Modulos/Mod3/Mod3'
import Mod4 from './Modulos/Mod4/Mod4'
import Mod5 from './Modulos/Mod5/Mod5'
import Mod6 from './Modulos/Mod6/Mod6'
import Mod7 from './Modulos/Mod7/Mod7'
import Mod8 from './Modulos/Mod8/Mod8'


interface Modulo {
    nombre: string;
    imagenSrc: string;
}

interface ModulosProps {
    reset: boolean;
}

const Modulos: React.FC<ModulosProps> = (props: ModulosProps) => {
    const [selected, setSelected] = useState<number>(0);

    useEffect(()=>{
        setSelected(0);
    }, [props.reset])

    const modulos: Modulo[] = [
        {
            nombre: 'Gestión de Producción y Automatización',
            imagenSrc: modulo1,
        },
        {
            nombre: 'Industria 4.0 en la Automatización',
            imagenSrc: modulo2,
        },
        {
            nombre: 'Planeación del Proyecto',
            imagenSrc: modulo3,
        },
        {
            nombre: 'Evaluación Económica de Proyectos',
            imagenSrc: modulo4,
        },
        {
            nombre: 'Celda de Manufactura Robotizada',
            imagenSrc: modulo5,
        },
        {
            nombre: 'Digital Factory',
            imagenSrc: modulo6,
        },
        {
            nombre: 'Controladores Industriales (PLC)',
            imagenSrc: modulo7,
        },
        {
            nombre: 'SCADA',
            imagenSrc: modulo8,
        }
    ]
    return (
        <div className="modulo-container">
            {selected ? (selected === 1 ? 
            <Mod1 /> :
            selected === 2 ? 
            <Mod2 /> : 
            selected === 3 ? 
            <Mod3 /> :
            selected === 4 ? 
            <Mod4 /> :
            selected === 5 ? 
            <Mod5 /> :
            selected === 6 ? 
            <Mod6 /> : 
            selected === 7 ? 
            <Mod7 /> : 
            selected === 8 ? 
            <Mod8 /> : 
            (<h1 style={{color: "#000000"}}>Este módulo no existe...</h1>)) : modulos.map((modulo, index) => (
                <div key={index} className="modulo-card" onClick={()=>setSelected(index + 1)}>
                    <img src={modulo.imagenSrc} alt={modulo.nombre} className="modulo-imagen" />
                    <h2 className="modulo-nombre">{modulo.nombre}</h2>
                </div>
            ))}
        </div>
    );
};

export default Modulos;
