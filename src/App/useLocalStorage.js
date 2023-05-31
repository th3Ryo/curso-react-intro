import React from 'react';

function useLocalStorage(itemName, initialValue) {
  /**
   * !localstorage
   */
  //verificar que existe
  const localStorageItems = localStorage.getItem(itemName);

  //crea array vacio para que no se rompa la app
  let parsedItem;
  //verifica que no este vacia
  if (!localStorageItems) {
    //crea un array vacio en caso de que este vacio
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    //en caso de que hayan datos de antes los combierte en un array
    parsedItem = JSON.parse(localStorageItems);
  }

  const [item, setItem] = React.useState(parsedItem);

  /**
   * !guardar estados en local storage
   */
  const guardarItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return [item, guardarItem];
}

export { useLocalStorage };
