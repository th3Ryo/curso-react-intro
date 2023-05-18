import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      //PARA INGRESAR LA ETIQUETA ES DEBAJO DE AL App
      <ListaPorHacer/>
      <ListaPorHacer/>
      <ListaPorHacer/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React
        </a>
      </header>
    </div>
  );
}

function ListaPorHacer () {
  return (
  
    <li>
    <span>
      v
    </span>
    <p>
      texto por hacer
    </p>
    <span>
      X
    </span>
  </li>
  )
}

export default App;
// se podria tambien asi export default ListaPorHacer;
