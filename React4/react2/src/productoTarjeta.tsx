import { useState } from 'react';
import { useEffect } from 'react';
import './productoTarjeta.css';


export interface Producto{
    nombre: string,
    precio: number,
    imagen: string,
    stock: boolean
};

export function productoTarjeta(props:Producto){
    const [contador, definirConteo] = useState(0);

    const incrementar = () => {
        definirConteo(contador +1);
    };

    const decrementar = () => {
        definirConteo(contador -1);
    };

    const resetear = () => {
        definirConteo(0);
    };

    return(
        <div>
            <div className='contenedorTarjeta'>
                <img className="imagenProducto" src={props.imagen} alt={props.nombre}/>
                <h2>{props.nombre}</h2>
                <h3>{props.precio}</h3>
                <h3 className={props.stock === true ? "disponible" : "agotado" }>{props.stock ? "Disponible" : "Agotado"}</h3>
                <div className='botones'>
                    <h3>Contador: {contador}</h3>
                    <button className='botonIncrementar' onClick={incrementar}>
                        +1
                    </button>
                    <button className='botonDecrementar' onClick={decrementar}>
                        -1
                    </button>
                    <button className='botonResetear' onClick={resetear}>
                        Resetear
                    </button>
                </div>
            </div>
        </div>
    )
}