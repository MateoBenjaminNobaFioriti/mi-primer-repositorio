import './productoTarjeta.css'


export interface Producto{
    nombre: string,
    precio: number,
    imagen: string,
    stock: boolean
}

export function productoTarjeta(props:Producto){
    return(
        <div className='contenedorTarjeta'>
            <img className="imagenProducto" src={props.imagen} alt={props.nombre}/>
            <h2>{props.nombre}</h2>
            <h3>{props.precio}</h3>
            <h3>{props.stock ? "Disponible" : "Agotado"}</h3>
        </div>
    )
}