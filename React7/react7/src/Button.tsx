import './button.css';

interface BotonProps {
    texto: string;
    onClick: (e: React.FormEvent) => void;
    disabled: boolean
}

export function Boton(props: BotonProps){


    return(
        <div>
            <br></br>
            <button onClick={props.onClick} disabled={props.disabled}>{props.texto}</button>
        </div>
    )
}