import React from "react";

function ContenedorHecho({ children }) {
  return (
    <div className="contenedor contenedorInterno hecho">
      <h3>Hecho</h3>
      <ul className="lista">
        {/* //meter los elementos dentro de ul */}
        {children}
      </ul>
    </div>
  );
}

export { ContenedorHecho };
