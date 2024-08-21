import { FaSearch } from "react-icons/fa";
import "./TaksSearch.css";

function TaksSearch({totalTaks, taksComplete, searchValue, setSearchValueSearch}){
    return(
        <div className="containerSearch">
            <h2>Tus tareas</h2>
            <p>Completaste {taksComplete} de {totalTaks}</p>
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