import React, { useState } from 'react'
import { TareaContext } from "../TareaContext";

import './BuscadorTareas.css';

function BuscadorTareas()  {
const {
    valorBuscador,
    setValorBuscador,
  } = React.useContext(TareaContext);


    return (
    <input 
        placeholder='Buscar Tarea'
        className='barraBuscadora'
        /* donde se almacena el valor */
        value={valorBuscador}
        onChange={(Event)=> {
            console.log("escribiste en la barra");
            setValorBuscador(Event.target.value)
        } }   
    />
    )
}

export {BuscadorTareas}