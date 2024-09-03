import React from "react";

function useLocalStorage(itemName, itemValue) {
    //Variable para consultar si existe el item en localStorage
    const items_localStorege = localStorage.getItem(itemName);
    
    let parsedItems;
    
    //If para preguntar si no existe el item y dar valor
    if (!items_localStorege) {
      parsedItems = [];
      localStorage.setItem(itemName, JSON.stringify(itemValue)); //Transformamos el array para localStorage
    } else {
      parsedItems = JSON.parse(items_localStorege) //Transformamos el string a array para renderizar 
      localStorage.setItem(itemName, JSON.stringify(parsedItems));
    }
  
    const [item, setItem]=React.useState(parsedItems);
    
    const saveItems = (newTaks) => { //Función actualizadora del estado y del LocalStorage
      localStorage.setItem(itemName, JSON.stringify(newTaks));
      setItem(newTaks);
    }
  
    return [item, saveItems];
  }

  export {useLocalStorage}