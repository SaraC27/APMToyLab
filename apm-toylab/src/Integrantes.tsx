import React from 'react';
import sara from './Img/sara.jpeg'
import juan from './Img/juan.jpeg'
import manuel from './Img/manuel.jpeg'
import felipe from './Img/felipe.jpg'

interface Integrante {
    nombre: string;
    imagenSrc: string;
}

interface IntegrantesProps {
}

const Integrantes: React.FC<IntegrantesProps> = (props: IntegrantesProps) => {
    const integrantes: Integrante[] = [
        {
            nombre: 'Sara Valentina Cardona Mejía',
            imagenSrc: sara,
        },
        {
            nombre: 'Juan Andrés Barrera Rodríguez',
            imagenSrc: juan,
        },
        {
            nombre: 'Manuel Felipe Carranza Montenegro',
            imagenSrc: manuel,
        },
        {
            nombre: 'Felipe Cruz Vásquez',
            imagenSrc: felipe,
        }
    ]
    return (
        <div className="integrantes-container">
            <h1 className="componente-titulo">Integrantes</h1>
            {integrantes.map((integrante, index) => (
                <div key={index} className="integrante-card">
                    <img src={integrante.imagenSrc} alt={integrante.nombre} className="integrante-imagen" />
                    <h2 className="integrante-nombre">{integrante.nombre}</h2>
                </div>
            ))}
        </div>
    );
};

export default Integrantes;
