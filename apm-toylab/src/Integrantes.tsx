import React from 'react';
import sara from './Img/sara.jpeg'
import juan from './Img/juan.jpeg'
import manuel from './Img/manuel.jpeg'
import felipe from './Img/felipe.jpg'

interface Integrante {
    nombre: string;
    imagenSrc: string;
    descripcion: string[];
}

interface IntegrantesProps {
}

const Integrantes: React.FC<IntegrantesProps> = (props: IntegrantesProps) => {
    const integrantes: Integrante[] = [
        {
            nombre: 'Sara Valentina Cardona Mejía',
            imagenSrc: sara,
            descripcion: [
                'Estudiante de Ingeniería Mecatrónica',
                'Organización del equipo y Tecnomatix'
            ],
        },
        {
            nombre: 'Juan Andrés Barrera Rodríguez',
            imagenSrc: juan,
            descripcion: [
                'Estudiante de Ingeniería Mecatrónica',
                'Tecnomatix y Siemens NX'
            ],
        },
        {
            nombre: 'Manuel Felipe Carranza Montenegro',
            imagenSrc: manuel,
            descripcion: [
                'Estudiante de Ingeniería Mecatrónica',
                'Modelado CAD y Celda Robotizada'
            ],
        },
        {
            nombre: 'Felipe Cruz Vásquez',
            imagenSrc: felipe,
            descripcion: [
                'Matemático y Estudiante de Ingeniería Mecatrónica',
                'Organización del Proyecto y Análisis de Mercado'
            ],
        }
    ]
    return (
        <div className="integrantes-container">
            <h1 className="componente-titulo">Integrantes</h1>
            {integrantes.map((integrante, index) => (
                <div key={index} className="integrante-card">
                    <img src={integrante.imagenSrc} alt={integrante.nombre} className="integrante-imagen" />
                    <h2 className="integrante-nombre">{integrante.nombre}</h2>
                    <ul className="integrante-descripcion">
                        {integrante.descripcion.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Integrantes;
