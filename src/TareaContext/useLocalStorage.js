import React from 'react';

function useLocalStorage(itemName, initialValue) {
  /**
   * !localstorage
   */
  //verificar que existe
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  
  //crea array vacio para que no se rompa la app
  let parsedItem;
  
  React.useEffect (() => {
    //con el setTimeout se evita que se este ejecutando la funcion buscar en bucle
    setTimeout (() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
    
    
          //verifica que no este vacia
        if (!localStorageItems) {
          //crea un array vacio en caso de que este vacio
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          //en caso de que hayan datos de antes los combierte en un array
          parsedItem = JSON.parse(localStorageItems);
          setItem(parsedItem);
        }
    
        setLoading(false);
      } catch(error) {
          setLoading(false);
          setError(error);
      }
    }, 2000);
  }, []);

  


  /**
   * !guardar estados en local storage
   */
  const guardarItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return {
    item, 
    guardarItem,
    loading,
    error,
  };
}

export { useLocalStorage };


/* const tarreaArray = [
  {texto: "tarea", completada:true},
  {texto: "tarea2", completada:undefined},
  {texto: "tarea3", completada:false},
  {texto: "tarea4", completada:false},
  {texto: "tarea5", completada:true},
  {texto: "tarea6", completada:undefined},
]

localStorage.setItem('planFlow_v1', JSON.stringify(tarreaArray)) */
