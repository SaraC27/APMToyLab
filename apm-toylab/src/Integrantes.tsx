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
                'Gestión de producción y automatización',
                'SCADA'
            ],
        },
        {
            nombre: 'Juan Andrés Barrera Rodríguez',
            imagenSrc: juan,
            descripcion: [
                'Estudiante de Ingeniería Mecatrónica',
                'Gestión de producción y automatización',
                'Digital Factory'
            ],
        },
        {
            nombre: 'Manuel Felipe Carranza Montenegro',
            imagenSrc: manuel,
            descripcion: [
                'Estudiante de Ingeniería Mecatrónica',
                'Evaluación económica de proyectos',
                'Celda de manufactura robotizada'
            ],
        },
        {
            nombre: 'Felipe Cruz Vásquez',
            imagenSrc: felipe,
            descripcion: [
                'Matemático y Estudiante de Ingeniería Mecatrónica',
                'Planeación de proyecto',
                'Controladores industriales',
                'Industria 4.0 en la automatización'
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
                    <h4>{integrante.descripcion[0]}</h4>
                    <ul className="integrante-descripcion">
                        {integrante.descripcion.slice(1).map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Integrantes;
