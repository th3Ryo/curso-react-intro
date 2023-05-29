import React from 'react'
import { ContenedorTablero } from './ContenedorTablero';
import { ContenedorPorHacer } from './ContenedorPorHacer';
import { ContenedorHaciendo } from './ContenedorHaciendo';
import { ContenedorHecho } from './ContenedorHecho';

import { BuscadorTareas } from './BuscadorTareas';
import { ContenedorTarea } from './ContenedorTarea';
import {ContenedorBoton } from './ContenedorBoton'; 

import './App.css';
/* rfce */
/* ver atajos control+ k control +s */

const tarreaArray = [
  {texto: "tarea", completada:true},
  {texto: "tarea2", completada:undefined},
  {texto: "tarea3", completada:false},
  {texto: "tarea4", completada:false},
  {texto: "tarea5", completada:true},
  {texto: "tarea6", completada:undefined},
]

function App() {
  /**
   * !tareas 
   * */
  const [tarea, setTarea] = React.useState(tarreaArray);
  const [valorBuscador, setValorBuscador ] = React.useState('');
  /**
   * ! encontrar completadas y totales 
   * */
  const parcial = tarea.filter(
    /* !! con la doble negacion se asegura que sean falsos */
    tarea => !!tarea.completada 
  ).length;

  const total = tarea.length;

  /**
   * !buscador 
   * */
  const buscadorTareas = tarea.filter(
    (tarea) => {
      const noTildes = (texto) => {
      return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };
      const tareaTexto = noTildes(tarea.texto.toLocaleLowerCase());
      const valorBuscadorTexto = noTildes(valorBuscador.toLocaleLowerCase());

      return tareaTexto.includes(valorBuscadorTexto)
    }
  );
  

  const tareasUndefined = buscadorTareas.filter((tarea) => tarea.completada === undefined);

  const tareasHaciendo = buscadorTareas.filter((tarea) => tarea.completada === false);

  const tareasHechas = buscadorTareas.filter((tarea) => tarea.completada === true);


  /**
   * !estados completados 
   * */

  const estadosCompletados = (texto) => {
    const nuevaTarea = [...tarea]
    const tareaIndex=  nuevaTarea.findIndex (
      (tarea) => tarea.texto === texto
    )                                      /* esta es para que permita agregar el atributo completadao quitarlo si doy click */
    nuevaTarea[tareaIndex].completada = !nuevaTarea[tareaIndex].completada
    setTarea(nuevaTarea)
  }
  /**
   * !estados eliminados 
   * */

  const estadosEliminados = (texto) => {
    const nuevaTarea = [...tarea]
    const tareaIndex=  nuevaTarea.findIndex (
      (tarea) => tarea.texto === texto
    )
    nuevaTarea.splice(tareaIndex,1)
    setTarea(nuevaTarea)
  }

  
  
  

  /* no funciono
    const buscadorUndefined = tarea.filter((texto) => {
    const nuevaTarea = [...tarea];
    const tareaIndex = nuevaTarea.findIndex(
      (tarea) => tarea.texto === texto);
    nuevaTarea[tareaIndex].completada = undefined;
    setTarea(nuevaTarea);
  }); */
  

  
 

  return (
    /* para que no salga tanto div <div className="App"> se cambia la etiqueta por react <React.Fragment> */
    <React.Fragment>
      <ContenedorTablero className="App" total={total} parcial={parcial} />
        <section className="contenedor">
          <BuscadorTareas
          valorBuscador={valorBuscador}
          setValorBuscador={setValorBuscador}
          
          />
          <ContenedorBoton/>

        </section>
        
        <section >

        <ContenedorPorHacer  > 

          {tareasUndefined.map((todo) => (
          <ContenedorTarea
                key={todo.texto}
                textoTarea={todo.texto}
                textoEstado={todo.completada}
                tareasCompletadas={() => estadosCompletados(todo.texto)}
                tareasEliminadas={() => estadosEliminados(todo.texto)}
              />
            ))}
            {/* <ContenedorTarea/> sin array*/}
           {/*  renderizar un array  */}
           
            
        </ContenedorPorHacer>

        <ContenedorHaciendo>
          {tareasHaciendo.map (todo => (
              /* este tiene de funcionanr como identificador key={todo.texto} y este se va a enviar como promps a  contenedor tarea textoTarea={todo.texto} */
              <ContenedorTarea 
              key={todo.texto} 
              textoTarea={todo.texto} 
              textoEstado={todo.completada}
              /* se coloca el arrow function para que no crashee react */
              tareasCompletadas={() => estadosCompletados(todo.texto) }
              tareasEliminadas={() => estadosEliminados(todo.texto) }
              />
              ))}
        </ContenedorHaciendo>

        <ContenedorHecho>
              {tareasHechas.map (todo => (
              /* este tiene de funcionanr como identificador key={todo.texto} y este se va a enviar como promps a  contenedor tarea textoTarea={todo.texto} */
              <ContenedorTarea 
              key={todo.texto} 
              textoTarea={todo.texto} 
              textoEstado={todo.completada}
              /* se coloca el arrow function para que no crashee react */
              tareasCompletadas={() => estadosCompletados(todo.texto) }
              tareasEliminadas={() => estadosEliminados(todo.texto) }
              />
              ))}

        </ContenedorHecho>

        

        
        </section>
    </React.Fragment>
  );
}

export default App;
// se podria tambien asi export default ListaPorHacer;
