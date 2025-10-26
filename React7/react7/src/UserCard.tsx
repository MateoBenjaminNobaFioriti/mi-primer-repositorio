import './UserCard.css'

interface UserCardProps{
    name: string
    email: string
    phone: string
    website: string
    company: {
        name: string
        catchPrhase: string
        bs: string
    }
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
    },
}

export function UserCard(props: UserCardProps){
    return(
        <div className="contenedorUsuarios">
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p>{props.website}</p>
            <p>{props.name}</p>
            <p>{props.company.name}</p>
            <p>{props.company.catchPrhase}</p>
            <p>{props.company.bs}</p>
            <p>{props.address.street}</p>
            <p>{props.address.suite}</p>
            <p>{props.address.city}</p>
            <p>{props.address.zipcode}</p>
        </div>
    );
}