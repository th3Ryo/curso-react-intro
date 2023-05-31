import React from 'react'
import './ContenedorPorHacer.css'

//se coloca los elementos dentro de compoennte
function ContenedorPorHacer({children}) {
  return (
    <div className="contenedor">
      <ul className='lista'>
          {/* //meter los elementos dentro de ul */}
          {children}
      </ul>
    </div>
  )
}

export {ContenedorPorHacer}