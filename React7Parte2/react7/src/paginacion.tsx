import { Boton } from './Button';
import './paginacion.css';

interface paginacionProps {
    paginaActual: number
    paginasTotales: number
    siguiente: () => void
    atras: () => void
}

export function Paginacion(props: paginacionProps){
    return(
        <div>
            <div>
                <Boton 
                texto="<- Atras"
                onClick={props.atras}
                disabled={props.paginaActual === 1}
                />
            
                <Boton 
                texto="Siguiente ->"
                onClick={props.siguiente}
                disabled={props.paginaActual === props.paginasTotales}
                />
            </div>
        </div>
    )
}