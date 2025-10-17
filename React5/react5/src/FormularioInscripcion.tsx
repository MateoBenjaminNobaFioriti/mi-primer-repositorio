import { useEffect, useState } from "react";
import {InputField} from './InputField';
import { BotonSubmit } from "./BotonSubmit";

export function FormularioInscripcion(){

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensajeExito, setMensajeExito] = useState(false);
    
    useEffect(() =>{
        if (mensajeExito){
            document.title = 'Inscripcion exitosa';
        }else{
            document.title = 'Sistema de inscripcion';
        }
    }, [mensajeExito]);
    
    const manejarEnvio = (e: React.FormEvent) => {
        e.preventDefault()
        
        if(!nombre || !apellido || !email || !telefono){
            alert("Por favor rellene los campos faltantes")
        }else{
            setMensajeExito(true);
        }
    }
    
    function manejarReseteo(){
        setNombre("");
        setApellido("");
        setEmail("");
        setTelefono("");
        setMensajeExito(false);
    }
    
    return(
        <div>
            {!mensajeExito &&(
                <div>
                    <h1><u><b>π Incripcion a curso de matematica π</b></u></h1>
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
            )}
            {mensajeExito &&(
                <div>
                    <h1><u><b>Inscripcion exitosa</b></u></h1>
                    <h2><b>Los datos ingresados fueron:</b></h2>
                    <p><b>Nombre: {nombre}</b></p>
                    <p><b>Apellido: {apellido}</b></p>
                    <p><b>Email: {email}</b></p>
                    <p><b>Telefono: {telefono}</b></p>
                    <BotonSubmit
                    texto="Nueva inscripcion"
                    onClick={manejarReseteo}
                    />
                </div>
            )}
        </div>
    )
}