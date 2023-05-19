import React from 'react'
import { ContenedorTablero } from './ContenedorTablero';
import { ContenedorPorHacer } from './ContenedorPorHacer';
import { BuscadorTareas } from './BuscadorTareas';
import { ContenedorTarea } from './ContenedorTarea';
import {ContenedorBoton } from './ContenedorBoton'; 
import './App.css';
/* rfce */
/* ver atajos control+ k control +s */

const renderArray = [
  {texto: "tarea", completada:false},
  {texto: "tarea2", completada:false},
  {texto: "tarea3", completada:false},
  {texto: "tarea4", completada:false},
]

function App() {
  return (
    /* para que no salga tanto div <div className="App"> se cambia la etiqueta por react <React.Fragment> */
    <React.Fragment>
      <ContenedorTablero className="App" total={22} parcial={2} />
        <ContenedorPorHacer> 
          <BuscadorTareas/>
            {/* <ContenedorTarea/> sin array*/}
           {/*  renderizar un array  */}
            {renderArray.map (todo => (
              /* este tiene de funcionanr como identificador key={todo.texto} y este se va a enviar como promps a  contenedor tarea textoTarea={todo.texto} */
              <ContenedorTarea key={todo.texto} textoTarea={todo.texto}/>
            ))}
        <ContenedorBoton/>
        </ContenedorPorHacer>
    </React.Fragment>
  );
}

export default App;
// se podria tambien asi export default ListaPorHacer;
