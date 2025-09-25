import React from 'react'
import './App.css'
import Pepelopez from './assets/Pepelopez.png'

interface Persona {
  nombre: string,
  apellido: string,
  telefono: string,
  redsocial: string
  trabajo: string
}

const personas:Persona ={
  nombre: "Pepe",
  apellido: "Lopez",
  telefono: "11 3421-5465",
  redsocial: "@pepelopez",
  trabajo: "Cortar pasto a domicilio"
}

function App() {

  return (
    <div className='tarjeta'>
      <div className='divImagen'>
      <img className='imagenPepe' src={Pepelopez} alt='Pepelopez'/>
      </div>

      <div className='divTexto'>
      <h1 className='texto'>Trabajador pro😎</h1>
      <h3 className='texto'>Nombre: {personas.nombre} {personas.apellido}</h3>
      <h3 className='texto'>Telefono: {personas.telefono}</h3>
      <h3 className='texto'>Red social: {personas.redsocial}</h3>
      <h3 className='texto'>Trabajo: {personas.trabajo}</h3>
      <h3 className='texto'>No importa la zona </h3>
      </div>
    </div>
  )
}

export default App
