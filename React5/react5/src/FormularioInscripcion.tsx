import { useEffect, useState } from "react";
import {InputField} from './InputField';
import { BotonSubmit } from "./BotonSubmit";

export function FormularioInscripcion(){

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensajeExito, setMensajeExito] = useState(false);

    
    const manejarEnvio = (e: React.FormEvent) => {
        e.preventDefault()
        
        if(!nombre || !apellido || !email || !telefono){
            alert("Por favor rellene los campos faltantes")
            setMensajeExito(false);
        }else{
            alert("Formulario enviado con exito")
            setMensajeExito(true);
            useEffect(() =>{
                if (mensajeExito){
                    document.title = 'Inscripcion exitosa';
                }else{
                    document.title = 'Sistema de inscripcion';
                }
            }, [mensajeExito]);
        }
    }
    
    
    return(
        <div>
            <form onSubmit={manejarEnvio}>
                <InputField
                    label="Nombre"
                    type="text"
                    value={nombre}
                    onChange= {(e) => setNombre(e.target.value)}
                    placeholder="Ingresa tu nombre"
                />
                <InputField
                    label="Apellido"
                    type="text"
                    value={apellido}
                    onChange= {(e) => setApellido(e.target.value)}
                    placeholder="Ingresa tu apellido"
                />
                <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange= {(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@gmail.com"
                />
                <InputField
                    label="Telefono"
                    type="tel"
                    value={telefono}
                    onChange= {(e) => setTelefono(e.target.value)}
                    placeholder="1234567890"
                />

                <BotonSubmit
                texto="Enviar formulario"
                onClick={manejarEnvio}
                />
            </form>
        </div>
    )
}