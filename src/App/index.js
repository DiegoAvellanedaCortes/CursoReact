import './App.css';
import { NewTaksContainer } from '../newTaks';
import { TaksInfo } from '../TaksInfo';
import { TaksSearch } from '../TaksSearch';
import { PanelTask } from '../PanelTask';
import { TaksItem } from '../TaksItem';
//import { TaksContext } from '../TaksContext';
import React from 'react';

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

  //Variable para consultar si existe el item en localStorage
  const taks_localStorege=localStorage.getItem("Taks_V1");
  
  let parsedTaks;

  //If para preguntar si no existe el item y dar valor
  if(!taks_localStorege){
    parsedTaks=[];
    localStorage.setItem("Taks_v1", JSON.stringify([])); //Transformamos el array para localStorage
  }else{
    parsedTaks = JSON.parse(taks_localStorege) //Transformamos el string a array para renderizar 
    localStorage.setItem("Taks_v1", JSON.stringify(parsedTaks));
  }
  
  //Estado para las tareas
  const [taks, setTaks] = React.useState(parsedTaks); //Pasamos la variable como valor inicial

  const saveTaks=(newTaks)=>{ //Función actualizadora del estado y del LocalStorage
    localStorage.setItem("Taks_V1", JSON.stringify(newTaks));
    setTaks(newTaks);
  }



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
    <div className='containerApp'>
      <NewTaksContainer />
      <TaksInfo>
        <TaksSearch
          totalTaks={taks.length}
          taksComplete={countTaksCompleted}
          searchValue={searchValue}
          setSearchValueSearch={setSearchValueSearch}
        />
        <PanelTask>
          {searchTaks.map(tak => (
            <TaksItem
              key={tak.taks_name}
              name={tak.taks_name}
              completed={tak.completed}
              onComplete={() => completeTaks(tak.taks_name)}
              onDelete={() => deleteTaks(tak.taks_name)} //  Encapsular función para enviar como prop ()=>deleteTaks(tak.taks_name)
            />
          ))}
        </PanelTask>
      </TaksInfo>
    </div>
  );
}

export default App;
