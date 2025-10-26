import { useState } from "react";
import { useEffect } from "react";
import { Loading } from "./Loading";
import { UserCard } from "./UserCard";
import { Boton } from './Button';
import { InputBuscar } from './Input';
import { Paginacion } from "./paginacion";
import './UserList.css';

interface Usuarios{
    id: number
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

export function UserList(){

    const [usuarios, setUsuario] = useState<Usuarios[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [valorBucar, setValorBuscar] = useState("");

    const [usuarioFiltrado, setUsuarioFiltrado] = useState<Usuarios[] | null>(null);

    const [paginaActual, setPaginaActual] = useState(1);

    const usuariosPorPagina = 5; 

    const indiceDelUltimoUsuario = paginaActual * usuariosPorPagina;
    const indiceDelPrimerUsuario = indiceDelUltimoUsuario - usuariosPorPagina;
    const usuariosActuales = usuarios.slice(indiceDelPrimerUsuario, indiceDelUltimoUsuario);
    const paginasTotales = Math.ceil(usuarios.length / usuariosPorPagina);

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
            setUsuarioFiltrado(null);
            setValorBuscar("");
        }
    }

    useEffect(() => {
        buscarUsuario();
    }, []);

    function filtrarUsuarios(){
        if(valorBucar.trim() === ""){
            setUsuarioFiltrado(null);
        }else{
            const filtrados = usuarios.filter((usuarios) => 
                usuarios.name.trim().toLowerCase() === valorBucar.trim().toLowerCase())
            setUsuarioFiltrado(filtrados);
        }
    }

    if(loading){
        return <Loading />;
    }

    if(error){
        return <div>{error}</div>;
    }

    const usuariosMostrar = usuarioFiltrado ?? usuariosActuales;

    return(
        <div className="usuarios">
            <InputBuscar
            type="text"
            value={valorBucar}
            onChange={(e) => setValorBuscar(e.target.value)}
            placeholder="Buscar por nombre"
            />
            <Boton
            texto="Buscar"
            onClick={filtrarUsuarios}
            disabled={false}
            />

            <h2>Lista de usuarios ({usuariosMostrar.length})</h2>
            <div className="divusuarios">
                {usuariosMostrar.map((usuarios) => (
                    <UserCard 
                    key={usuarios.id}
                    name={usuarios.name}
                    email={usuarios.email}
                    phone={usuarios.phone}
                    website={usuarios.website}
                    company={usuarios.company}
                    address={usuarios.address}
                    />
                )
                )}
            </div>
            <Boton
                texto="Recargar usuarios"
                onClick={buscarUsuario}
                disabled={false}
            />
            <Paginacion
                paginaActual={paginaActual}
                paginasTotales={paginasTotales}
                siguiente={() => setPaginaActual((p) => Math.min(p + 1, paginasTotales))}
                atras={() => setPaginaActual((p) => Math.max(p - 1, 1))}
            />
        </div>
    )
}