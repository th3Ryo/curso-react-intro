import React from 'react'
import  { TareaProvider } from '../TareaContext';
import { AppUI } from './AppUI'




/* rfce */
/* ver atajos control+ k control +s */



function App() {
  return (
    /* para que no salga tanto div <div className="App"> se cambia la etiqueta por react <React.Fragment> */
    <TareaProvider>
      <AppUI/>
    </TareaProvider>
  );
}

export default App;
// se podria tambien asi export default ListaPorHacer;


{/*  <TareaContext.Consumer>
          {() => (
        
          )}
        </TareaContext.Consumer> */}