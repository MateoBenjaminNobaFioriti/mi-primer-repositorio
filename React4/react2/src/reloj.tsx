import { useState } from 'react';
import { useEffect } from 'react';
import './reloj.css';


export function reloj(){
    const [hora, definirHora] = useState(new Date().toLocaleDateString());

    useEffect(() => {
  
        console.log('Reloj iniciado');
    
   
    
        const intervalo = setInterval(() => {
      
            definirHora(new Date().toLocaleTimeString());
        }, 1000);
    
        return () => {
            // **Detenemos el intervalo usando clearInterval**
            clearInterval(intervalo);
            console.log(' Reloj detenido');
        };
    
    },[]);

    return(
        <h2> {hora} </h2>
    )
}