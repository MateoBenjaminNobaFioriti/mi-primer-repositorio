import './ModelCard.css'

interface UserCardProps{
    model_name: string
    model_make_id: string
}

export function UserCard(props: UserCardProps){
    return(
        <div className="contenedorUsuarios">
            <h3>{props.model_make_id}</h3>
            <p>{props.model_name}</p>
        </div>
    );
}