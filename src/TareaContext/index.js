import React from "react";
import { useLocalStorage } from './useLocalStorage';

const  TareaContext = React.createContext();

function TareaProvider ({children}) {
      /**
   * !tareas 
   * */
  const {
    //propiedad para cambiar
    item: tarea, 
    guardarItem: guardarTareas,
    loading,
    error,
  } = useLocalStorage('planFlow_v1', []);
  const [valorBuscador, setValorBuscador ] = React.useState('');
  const [abrirModalTarea, setAbrirModalTarea ] = React.useState(false);
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
    /* nuevaTarea[tareaIndex].completada = !nuevaTarea[tareaIndex].completada */
    if (nuevaTarea[tareaIndex].completada === undefined) {
      console.log("click undefined")
      nuevaTarea[tareaIndex].completada = false;
      return guardarTareas(nuevaTarea)



    }
    if (nuevaTarea[tareaIndex].completada === false) {
      console.log("click false")
      nuevaTarea[tareaIndex].completada = !nuevaTarea[tareaIndex].completada
      return guardarTareas(nuevaTarea)

    }

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
    guardarTareas(nuevaTarea)
  }


    return (
        <TareaContext.Provider value={{
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
        }}>
          {children}
        </TareaContext.Provider>
    );
};



export { TareaContext, TareaProvider };