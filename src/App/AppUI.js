import React from "react";

import { ContenedorTablero } from "../ContenedorTablero";
import { ContenedorPorHacer } from "../ContenedorPorHacer";
import { ContenedorHaciendo } from "../ContenedorHaciendo";
import { ContenedorHecho } from "../ContenedorHecho";

import { BuscadorTareas } from "../BuscadorTareas";
import { ContenedorTarea } from "../ContenedorTarea";
import { ContenedorBoton } from "../ContenedorBoton";

import { TareaContext } from "../TareaContext";
import { CargandoTareas } from "../CargandoTareas";
import { ErrorTareas } from "../ErrorTareas";
import { CrearTareas } from "../CrearTareas";
import { Modal } from "../Modal";


function AppUI() {
  const {
    loading,
          error,
          parcial,
          total,
          buscadorTareas,
          tareasUndefined,
          tareasHaciendo,
          tareasHechas,
          estadosCompletados,
          estadosEliminados,
          valorBuscador,
          setValorBuscador,
          abrirModalTarea, 
          setAbrirModalTarea,
  } = React.useContext(TareaContext)
  return (
    
    <React.Fragment>
{/*       //se mete el Tarea donde se piden los valores
 */}      <ContenedorTablero className="App" total={total} parcial={parcial} />
      <section className="contenedor">
        <BuscadorTareas
          valorBuscador={valorBuscador}
          setValorBuscador={setValorBuscador}
        />
        <ContenedorBoton 
          setAbrirModalTarea={setAbrirModalTarea}
        />
        {abrirModalTarea && (
          <Modal>
          el modal esta aki
          </Modal>
        )}
      </section>
      
          <section>
            <ContenedorPorHacer>
              {loading && <CargandoTareas />}
              {error && <ErrorTareas />}
              {!loading && buscadorTareas.length == 0 && <CrearTareas />}

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
              {loading && <CargandoTareas />}
              {error && <ErrorTareas />}
              {!loading && buscadorTareas.length == 0 && <CrearTareas />}

              {tareasHaciendo.map((todo) => (
                /* este tiene de funcionanr como identificador key={todo.texto} y este se va a enviar como promps a  contenedor tarea textoTarea={todo.texto} */
                <ContenedorTarea
                  key={todo.texto}
                  textoTarea={todo.texto}
                  textoEstado={todo.completada}
                  /* se coloca el arrow function para que no crashee react */
                  tareasCompletadas={() => estadosCompletados(todo.texto)}
                  tareasEliminadas={() => estadosEliminados(todo.texto)}
                />
              ))}
            </ContenedorHaciendo>

            <ContenedorHecho>
              {loading && <CargandoTareas />}
              {error && <ErrorTareas />}
              {!loading && buscadorTareas.length == 0 && <CrearTareas />}

              {tareasHechas.map((todo) => (
                /* este tiene de funcionanr como identificador key={todo.texto} y este se va a enviar como promps a  contenedor tarea textoTarea={todo.texto} */
                <ContenedorTarea
                  key={todo.texto}
                  textoTarea={todo.texto}
                  textoEstado={todo.completada}
                  /* se coloca el arrow function para que no crashee react */
                  tareasCompletadas={() => estadosCompletados(todo.texto)}
                  tareasEliminadas={() => estadosEliminados(todo.texto)}
                />
              ))}
            </ContenedorHecho>
          </section>
        
    </React.Fragment>

  );
}

export { AppUI };
