import React from 'react'

function ContenedorHaciendo({children}) {
  return (
    <div className="contenedor contenedorInterno haciendo">
      <h3>Haciendo</h3>
      <ul className='lista'>
          {/* //meter los elementos dentro de ul */}
          {children}
      </ul>
    </div>
  )
}

export { ContenedorHaciendo };
