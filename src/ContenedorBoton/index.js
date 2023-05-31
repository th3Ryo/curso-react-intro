import React from 'react'
import './ContenedorBoton.css'


function ContenedorBoton() {
  let [click,setClick] = React.useState(0);
  console.log("estes el click "+ click)
  return (
    <button 
      className='botonCrear'
      value={click}
      onClick={
        ( ) => { 
          setClick(click++)
        }
      }
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" className='imagenBoton'>
        <line x1="30" y1="50" x2="70" y2="50" stroke="red" strokeWidth="5" strokeLinecap="round" />
        <line x1="50" y1="30" x2="50" y2="70" stroke="green" strokeWidth="5" strokeLinecap="round" />
      </svg>

      </button>
  )
}

export {ContenedorBoton}