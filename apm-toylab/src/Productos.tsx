import React from 'react';
import avion from './Img/avion.jpeg'
import carro from './Img/carro.jpeg'
import submarino from './Img/submarino.jpeg'

interface Producto {
    nombre: string;
    imagenSrc: string;
    descripcion: string[];
}

interface ProductosProps {
}

const Productos: React.FC<ProductosProps> = (props: ProductosProps) => {
    const productos: Producto[] = [
        {
            nombre: 'Avión',
            imagenSrc: avion,
            descripcion: ['Propiedad1', 'Propiedad2']
        },
        {
            nombre: 'Carro',
            imagenSrc: carro,
            descripcion: ['Propiedad1', 'Propiedad2']
        },
        {
            nombre: 'Submarino',
            imagenSrc: submarino,
            descripcion: ['Propiedad1', 'Propiedad2']
        }
    ]
    return (
        <div className="productos-container">
            <h1 className="componente-titulo">Productos</h1>
            {productos.map((producto, index) => (
                <div key={index} className="producto-card">
                    <img src={producto.imagenSrc} alt={producto.nombre} className="producto-imagen" />
                    <h2 className="producto-nombre">{producto.nombre}</h2>
                    <ul className="producto-descripcion">
                        {producto.descripcion.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Productos;
