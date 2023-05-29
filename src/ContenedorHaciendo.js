import React from 'react'

function ContenedorHaciendo({children}) {
  return (
    <div className="contenedor">
      <ul className='lista'>
          {/* //meter los elementos dentro de ul */}
          {children}
      </ul>
    </div>
  )
}

export { ContenedorHaciendo };
