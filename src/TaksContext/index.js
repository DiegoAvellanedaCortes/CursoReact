import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TaksContext = React.createContext();

function TaksProvider({children}) {

    //Logica de APP


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
    const {
        item: taks,
        saveItems: saveTaks,
        loading,
        error
    } = useLocalStorage("Taks_V1", []); //Pasamos la variable como valor inicial

    //Estado para modal
    const [openModal, setOpenModal]=React.useState(false);

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

    //Creamos nueva tarea, recibimos como parametro el nombre de la tarea
    const addTaks=(new_tak)=>{
        const tak={
            taks_name:new_tak,
            completed:false,
        }  //Objeto para crear tarea
        const newTaks = [...taks]; //Duplicamos el array de tareas
        newTaks.push(tak)//Agregamos el objeto al array de tareas
        saveTaks(newTaks); //Función actualizadora del array original y localstorage
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

    //Fin lógica App

    return (
        <TaksContext.Provider value={{
            countTaksCompleted,
            searchValue,
            setSearchValueSearch,
            taks,
            searchTaks,
            completeTaks,
            deleteTaks,
            loading,
            error,
            openModal,
            setOpenModal,
            addTaks,
        }}>
            {children}
        </TaksContext.Provider>
    );

}

export { TaksContext, TaksProvider }