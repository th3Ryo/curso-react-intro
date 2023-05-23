import React from 'react'
import { ContenedorTablero } from './ContenedorTablero';
import { ContenedorPorHacer } from './ContenedorPorHacer';
import { BuscadorTareas } from './BuscadorTareas';
import { ContenedorTarea } from './ContenedorTarea';
import {ContenedorBoton } from './ContenedorBoton'; 
import './App.css';
/* rfce */
/* ver atajos control+ k control +s */

const tarreaArray = [
  {texto: "tarea", completada:true},
  {texto: "tarea2", completada:false},
  {texto: "tarea3", completada:false},
  {texto: "tarea4", completada:false},
  {texto: "tarea5", completada:true},
/*   {texto: "tarea6", completada:false},
 */]

function App() {
  const [tarea, setTarea] = React.useState(tarreaArray);
  const [valorBuscador, setValorBuscador ] = React.useState('');
  console.log("en el buscador se esta digitando "+ valorBuscador);

  const parcial = tarea.filter(
    /* !! con la doble negacion se asegura que sean falsos */
    tarea => !!tarea.completada 
  ).length;

  const total = tarea.length;

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


  return (
    /* para que no salga tanto div <div className="App"> se cambia la etiqueta por react <React.Fragment> */
    <React.Fragment>
      <ContenedorTablero className="App" total={total} parcial={parcial} />
        <section className="contenedor">
          <BuscadorTareas
          valorBuscador={valorBuscador}
          setValorBuscador={setValorBuscador}
          
          />
          <ContenedorBoton/>

        </section>
        
        <section className="contenedor">

        <ContenedorPorHacer> 
            {/* <ContenedorTarea/> sin array*/}
           {/*  renderizar un array  */}
           
            {buscadorTareas.map (todo => (
              /* este tiene de funcionanr como identificador key={todo.texto} y este se va a enviar como promps a  contenedor tarea textoTarea={todo.texto} */
              <ContenedorTarea key={todo.texto} textoTarea={todo.texto} textoEstado={todo.completada}/>
              ))}
        </ContenedorPorHacer>

        
        </section>
    </React.Fragment>
  );
}

export default App;
// se podria tambien asi export default ListaPorHacer;
