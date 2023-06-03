import React from "react";

import { ContenedorTablero } from "../ContenedorTablero";
import { ContenedorPorHacer } from "../ContenedorPorHacer";
import { ContenedorHaciendo } from "../ContenedorHaciendo";
import { ContenedorHecho } from "../ContenedorHecho";

import { BuscadorTareas } from "../BuscadorTareas";
import { ContenedorTarea } from "../ContenedorTarea";
import { ContenedorBoton } from "../ContenedorBoton";

import { CargandoTareas } from "../CargandoTareas";
import { ErrorTareas } from "../ErrorTareas";
import { CrearTareas } from "../CrearTareas";
import { Modal } from "../Modal";
import { TareaForms } from "../TareaForms";

import porHacer from "../img/porhacer.png"
import haciendo from "../img/haciendotarea.png"
import hecho from "../img/tareahecha.png"


import { TareaContext } from "../TareaContext";

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
            <TareaForms/>
          </Modal>
        )}
      </section>
      
          <section>
            <ContenedorPorHacer>
              {loading && <CargandoTareas />}
              {error && <ErrorTareas />}
              {!loading && buscadorTareas.length === 0 && (
                <>
                  <div className="imagenesVacio">
                    <img src={porHacer} alt="por Hacer" />
                  </div>
                  <CrearTareas />
                </>
              )}

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
              {!loading && buscadorTareas.length === 0 && (
                <>
                  <div className="imagenesVacio">
                    <img src={haciendo} alt="por Hacer" />
                  </div>
                  <CrearTareas />
                </>
              )}
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
              {!loading && buscadorTareas.length === 0 && (
                <>
                  <div className="imagenesVacio">
                    <img src={hecho} alt="por Hacer" />
                  </div>
                  <CrearTareas />
                </>
              )}

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
