import './App.css';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';


function App() {
  // const taksDefault = [
  //   {
  //     taks_name: "Tender Cama",
  //     completed: true
  //   },
  //   {
  //     taks_name: "Leer",
  //     completed: false
  //   },
  //   {
  //     taks_name: "Escribir",
  //     completed: true
  //   },
  //   {
  //     taks_name: "Actualizar",
  //     completed: false
  //   },
  //   {
  //     taks_name: "Filtrado",
  //     completed: true
  //   },
  // ]


  //Estado del input para filtrar tareas
  const [searchValue, setSearchValueSearch] = React.useState("");

  //Custom Hook useLocalStorage
  const [taks, saveTaks] = useLocalStorage("Taks_V1", []); //Pasamos la variable como valor inicial

  //Estado derivado (En donde se filtran las tareas segun el input del usuario)
  const searchTaks = taks.filter((tak) => {
    const taksMinuscula = tak.taks_name.toLowerCase();
    const dataInput = searchValue.toLowerCase();
    return taksMinuscula.includes(dataInput);
  });

  //Estado derivado para contar las tareas completadas
  const countTaksCompleted = taks.filter((tak) => {
    return tak.completed === true;
  }).length;


  //Completar tareas
  const completeTaks = (text) => {
    const newTaks = [...taks];
    const taksIndex = newTaks.findIndex(
      (taks) => taks.taks_name === text
    );
    newTaks[taksIndex].completed = true;
    saveTaks(newTaks);
  }

  //Eliminar tareas
  const deleteTaks = (text) => {
    const newTaks = [...taks];
    const taksIndex = newTaks.findIndex(
      (taks) => taks.taks_name === text
    );
    newTaks.splice(taksIndex, 1) //Método que elimina una posición de Array
    saveTaks(newTaks);
  }

  return (
    <AppUI
      countTaksCompleted={countTaksCompleted}
      searchValue={searchValue}
      setSearchValueSearch={setSearchValueSearch}
      taks={taks}
      searchTaks={searchTaks}
      completeTaks={completeTaks}
      deleteTaks={deleteTaks}
    />
  );
}

export default App;
