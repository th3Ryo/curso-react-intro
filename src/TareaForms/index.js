import React from 'react'
import './TareaForms.css'
import { TareaContext } from "../TareaContext";


function TareaForms() {
  const {
    agregarTarea,
    setAbrirModalTarea,
  } = React.useContext(TareaContext)
  const [nuevaTareaTexto, setNuevaTareaTexto] = React.useState ('')

  const onSubmit = (event) => { 
    //evitar que la pagina se recarge por defecto
    event.preventDefault();
    agregarTarea(nuevaTareaTexto);
    setAbrirModalTarea(false);
  }
  const onCancel = () => { 
    setAbrirModalTarea(false);
  }
  const onChange = (event) => { 
    setNuevaTareaTexto(event.target.value)
  }
  
  return (
    <form onSubmit={onSubmit}>
        <label>Escribe la nueva Tarea</label>
        <textarea
            placeholder='escriba aki'
            value={nuevaTareaTexto}
            onChange={onChange}
            required
        />
        <div className='botonFormsContainer'>
          <button
              type='button'
              className='botonForms cancelarTarea'
              onClick={onCancel}
          >Cancelar</button>
          <button
              type='submit'
              className='botonForms añadirTarea'
          >Añadir</button>
        </div>
    </form>
  )
}

export {TareaForms}