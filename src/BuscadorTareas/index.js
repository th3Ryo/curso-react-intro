import React, { useState } from 'react'
import './BuscadorTareas.css';
import react from 'react';

function BuscadorTareas({
    valorBuscador,
    setValorBuscador,
    }) 

{

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