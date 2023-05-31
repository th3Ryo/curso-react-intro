import React from 'react';
import './ContenedorTablero.css';
import imagen from './logopagina.png';


function ContenedorTablero( {total, parcial}) {
  /* props = { patito, peces, etc } */

  return (
    <header>
        <div className='logo'>
          <img src={imagen} alt="Logo de la página" />
        </div>
        <h1>Bienvenido al Tablero</h1>
        {total === parcial ? (
        <h2>Felicidades, todas las tareas están terminadas</h2>
      ) : (
        <h2>
          <span>{parcial}</span> Tareas completadas de <span>{total}</span> totales
        </h2>
      )}
        
    </header>
    
  )
}

export {ContenedorTablero }