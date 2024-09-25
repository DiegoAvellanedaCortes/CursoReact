import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  //Creamos el efecto => El efecto encapsula la parte pesada de la lógica 
  React.useEffect(() => {
    setTimeout(() => {
      try {
        //Variable para consultar si existe el item en localStorage
        const items_localStorege = localStorage.getItem(itemName);

        let parsedItems;

        //If para preguntar si no existe el item y dar valor
        if (!items_localStorege) {
          localStorage.setItem(itemName, JSON.stringify(initialValue)); //Transformamos el array para localStorage
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(items_localStorege) //Transformamos el string a array para renderizar 
          setItem(parsedItems);
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true);
      };
    }, 2000);
  }, []);

  const saveItems = (newTaks) => { //Función actualizadora del estado y del LocalStorage
    localStorage.setItem(itemName, JSON.stringify(newTaks));
    setItem(newTaks);
  }

  return { item, saveItems, loading, error };
}

export { useLocalStorage }