import './tarjetaEvento.css'


export interface Evento{
    titulo: string,
    fecha: string,
    lugar: string,
    asistente: number,
    categoria: string
}

export function tarjetaEvento(props:Evento){
    const claseEvento = `${props.categoria}`;
    const asistentesEvento = `👥${props.asistente}`

    return(
        <div className={claseEvento}>
            <h1>{props.titulo}</h1>
            <h2>{props.fecha}</h2>
            <h2>{props.lugar}</h2>
            <h3>{asistentesEvento}</h3>
        </div>
    )
}