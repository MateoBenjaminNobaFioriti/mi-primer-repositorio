import React from 'react'
import './App.css'
import {Evento} from './tarjetaEvento'
import {tarjetaEvento} from './tarjetaEvento'


function App() {
  
  const eventos:Evento[] = [{
    titulo: "Concierto de Cecilia Immergreen",
    fecha: "11/11/25",
    lugar: "Venus",
    asistente: 200,
    categoria: "musica"
  },
  {
    titulo: "Boca vs River",
    fecha: "9/10/25",
    lugar: "Monumental",
    asistente: 500,
    categoria: "deportes"
  },
  {
    titulo: "Charla sobre la IA",
    fecha: "20/10/25",
    lugar: "Tecnopilis",
    asistente: 150,
    categoria: "tecnologia"
  },
  {
    titulo: "Fiesta del salame",
    fecha: "13/11/25",
    lugar: "San pedro",
    asistente: 50,
    categoria: "comida"
  }
  ]

  return (
   <div className='contenedor'>
      <div className='evento'>
        <h1>{tarjetaEvento(eventos[0])}</h1>
      </div>
      <br></br>
      <div className='evento'>
        <h1>{tarjetaEvento(eventos[1])}</h1>
      </div>
      <br></br>
      <div className='evento'>
        <h1>{tarjetaEvento(eventos[2])}</h1>
      </div>
      <br></br>
      <div className='evento'>
        <h1>{tarjetaEvento(eventos[3])}</h1>
      </div>
      <br></br>
    </div>
  )
}

export default App
