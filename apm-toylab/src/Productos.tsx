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
            nombre: 'Maverick',
            imagenSrc: avion,
            descripcion: [
                'Avión de juguete color rojo con blanco',
                'Dimensiones: 277 x 323 x 72 mm',
                'Hecho en polipropileno con ejes de hierro',
                'Cuenta con hélices móviles',
                'No vuela'
            ]
        },
        {
            nombre: 'Ku-chaw',
            imagenSrc: carro,
            descripcion: [
                'Carro de juguete color rojo con blanco',
                'Dimensiones: 255 x 112 x 77 mm',
                'Hecho en polipropileno con ejes de hierro',
                'Cuenta con ruedas móviles'
            ]
        },
        {
            nombre: 'Submarino',
            imagenSrc: submarino,
            descripcion: [
                'Submarino de juguete color rojo con blanco',
                'Dimensiones: 248 x 69 x 40 mm',
                'Hecho en polipropileno con ejes de hierro',
                'Cuenta con hélice móvil',
                'No apto para sumergir en agua'
            ]
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
