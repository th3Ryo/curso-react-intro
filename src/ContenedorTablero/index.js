import React from 'react';
import './ContenedorTablero.css';
import imagen from '../img/logopagina.png';
import { TareaContext } from '../TareaContext';


function ContenedorTablero() {
  /* props = { patito, peces, etc } */
  const {
    parcial,
    total,
  } = React.useContext(TareaContext);

  return (
    <header>
        <div className='logo'>
          <img src={imagen} alt="Logo de la página" />
        </div>
        <h1>Bienvenido al Tablero</h1>
        {total === 0 ? (
          <h2>No hay tareas pendientes</h2>
        ) : total === parcial ? (
          <h2>Felicidades, todas las tareas están terminadas</h2>
        ) : (
          <h2>
            <span>{parcial}</span> Tareas completadas de <span>{total}</span> totales
          </h2>
        )}
        
    </header>
    
  )
}

export { ContenedorTablero }