import { useState } from "react";
import { useEffect } from "react";
import { Loading } from "./Loading";
import { UserCard } from "./ModelCard";
import { Boton } from './Button';
import { InputBuscar } from './Input';
import { Paginacion } from "./paginacion";
import './ModelList.css';

interface Modelos{
    model_name: string
    model_make_id: string
}

export function ModelList(){

    const [modelos, setModelos] = useState<Modelos[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [valorBuscar, setValorBuscar] = useState("");

    const [modeloFiltrado, setModeloFiltrado] = useState<Modelos[] | null>(null);

    const [paginaActual, setPaginaActual] = useState(1);

    const modeloPorPagina = 5; 

    const indiceDelUltimoModelo = paginaActual * modeloPorPagina;
    const indiceDelPrimerModelo = indiceDelUltimoModelo - modeloPorPagina;
    const modelosActuales = modelos.slice(indiceDelPrimerModelo, indiceDelUltimoModelo);
    const paginasTotales = Math.ceil(modelos.length / modeloPorPagina);

    async function buscarModelo() {
        try{

            const url = `https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=honda`;

            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`


            const repuesta = await fetch(proxyUrl);
            if(!repuesta.ok){
                throw new Error("Error al cargar los usuarios");
            }
           
            const datosProxy = await repuesta.json();

            const textoLimpio = datosProxy.contents
            .replace(/^\?+\(|\);?$/g, ""); 

            const datos = JSON.parse(textoLimpio);

            setModelos(datos.Models);
            console.log(datos.Models);
        }catch (err){
            setError("No se pudieron cargar los usuarios");
            console.error(err);
        }finally{
            setLoading(false);
            setModeloFiltrado(null);
            setValorBuscar("");
        }
    }

    useEffect(() => {
        buscarModelo();
    }, []);

    function filtrarModelo(){
        if(valorBuscar.trim() === ""){
            setModeloFiltrado(null);
        }else{
            const filtrados = modelos.filter((modelos) => 
                modelos.model_name.trim().toLowerCase() === valorBuscar.trim().toLowerCase())
            setModeloFiltrado(filtrados);
        }
    }

    if(loading){
        return <Loading />;
    }

    if(error){
        return <div>{error}</div>;
    }

    const modelosMostrar = modeloFiltrado ?? modelosActuales;

    return(
        <div className="usuarios">
            <InputBuscar
            type="text"
            value={valorBuscar}
            onChange={(e) => setValorBuscar(e.target.value)}
            placeholder="Buscar por nombre"
            />
            <Boton
            texto="Buscar"
            onClick={filtrarModelo}
            disabled={false}
            />

            <h2>Lista de usuarios ({modelosMostrar.length})</h2>
            <div className="divusuarios">
                {modelosMostrar.map((modelos) => (
                    <UserCard 
                    key={modelos.model_make_id}
                    model_make_id={modelos.model_make_id}
                    model_name={modelos.model_name}
                    />
                )
                )}
            </div>
            <Boton
                texto="Recargar usuarios"
                onClick={buscarModelo}
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