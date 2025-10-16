import './BotonSubmit.css';

interface BotonSubmitProps {
    texto: string;
    onClick: (e: React.FormEvent) => void;
}

export function BotonSubmit(props: BotonSubmitProps){


    return(
        <div>
            <button type="submit" onClick={props.onClick}>{props.texto}</button>
        </div>
    )
}