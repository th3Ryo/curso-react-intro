import React from 'react'

function ContenedorHecho({children}) {
  return (
    <div className="contenedor">
      <ul className='lista'>
          {/* //meter los elementos dentro de ul */}
          {children}
      </ul>
    </div>
  )
}

export { ContenedorHecho }