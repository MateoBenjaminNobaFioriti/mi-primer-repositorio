import { useState } from "react";
import { useEffect } from "react";
import { Loading } from "./Loading";
import { UserCard } from "./Usercard";
import './UserList.css';

interface Usuarios{
    id: number
    name: string
    email: string
    phone: string
    website: string
}

export function UserList(){

    const [usuarios, setUsuario] = useState<Usuarios[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        async function buscarUsuario() {
            try{
                const repuesta = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!repuesta.ok){
                    throw new Error("Error al cargar los usuarios");
                }

                const datos = await repuesta.json();

                setUsuario(datos);
            }catch (err){
                setError("No se pudieron cargar los usuarios");
                console.error(err);
            }finally{
                setLoading(false);
            }

            console.log(usuarios);
        }
        buscarUsuario();
    }, []);

    if(loading){
        return <Loading />;
    }

    if(error){
        return <div>{error}</div>;
    }

    return(
        <div className="usuarios">
            <h2>Lista de usuarios ({usuarios.length})</h2>
            <div className="divusuarios">
                {usuarios.map((usuarios) => (
                    <UserCard 
                    key={usuarios.id}
                    name={usuarios.name}
                    email={usuarios.email}
                    phone={usuarios.phone}
                    website={usuarios.website}
                    />
                )
                )}
            </div>
        </div>
    )
}