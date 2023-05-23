import React from 'react'
import './ContenedorTarea.css'

/* function ContenedorTarea ({props}) {
 */function ContenedorTarea ({/* key, */ textoTarea , textoEstado}) {
    return (
    
      <li>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='icono icono-continuar'>
          <path d="M5 12h13l-6-6m0 12l6-6" />
        </svg>
           {textoEstado}
        </span>
        {/* <p>{props.text}</p> */}
        <p>{textoTarea}</p>
        <span className='icono icono-eliminar' >
          X
        </span>
    </li>
    )
  }


export  {ContenedorTarea}


/* import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem"> 
    *! asi se pone a leer los cambios de clase en react
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
        V
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem }; */