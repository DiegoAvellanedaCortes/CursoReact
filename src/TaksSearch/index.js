import { FaSearch } from "react-icons/fa";
import "./TaksSearch.css";
import React from "react";
import { TaksContext } from "../TaksContext";

function TaksSearch(){
    const {taks, countTaksCompleted, searchValue, setSearchValueSearch}=React.useContext(TaksContext);
      
    return(
        <div className="containerSearch">
            <h2>Tus tareas</h2>
            <p>Completaste {countTaksCompleted} de {taks.length}</p>
            <div className="dataSearch">
                <input 
                type="text" 
                placeholder="Escribir"
                value={searchValue}
                onChange={
                    (event)=>{
                        setSearchValueSearch(event.target.value)
                    }
                }
                />
                <span className="IconSearch">
                    <FaSearch/>
                </span>
            </div>
        </div>
    );
}

export {TaksSearch}