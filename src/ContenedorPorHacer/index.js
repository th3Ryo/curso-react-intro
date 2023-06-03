import React from 'react'
import './ContenedorPorHacer.css'

//se coloca los elementos dentro de compoennte
function ContenedorPorHacer({children}) {
  return (
    <div className="contenedor contenedorInterno porHacer">
      <h3>Por Hacer</h3>
      <ul className='lista'>
          {/* //meter los elementos dentro de ul */}
          {children}
      </ul>
    </div>
  )
}

export {ContenedorPorHacer}