import React from 'react'
import './App.css'
import {Producto} from './productoTarjeta'
import {productoTarjeta} from './productoTarjeta'


function App() {
  
  const productos:Producto[] = [{
    nombre:"Piano",
    precio: 1200,
    imagen: "./src/assets/piano.png",
    stock: true
  },
  {nombre:"Trompeta",
    precio: 1200,
    imagen: "./src/assets/trompeta.png",
    stock: false
  },
  {nombre:"Violín",
    precio: 1200,
    imagen: "./src/assets/violin.png",
    stock: true
  }
  ]

  return (
   <div className='contenedor'>
      <div className='producto'>
        <h1>{productoTarjeta(productos[0])}</h1>
      </div>
      <br></br>
      <div className='producto'>
        <h1>{productoTarjeta(productos[1])}</h1>
      </div>
      <br></br>
      <div className='producto'>
        <h1>{productoTarjeta(productos[2])}</h1>
      </div>
      <br></br>
    </div>
  )
}

export default App
