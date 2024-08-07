import { FaSearch } from "react-icons/fa";
import "./TaksSearch.css";

function TaksSearch(){
    let taksComplete=3;
    let totalTaks=5;
    return(
        <div className="containerSearch">
            <h2>Tus tareas</h2>
            <p>Completaste {taksComplete} de {totalTaks}</p>
            <div className="dataSearch">
                <input type="text" placeholder="Escribir"/>
                <span className="IconSearch">
                    <FaSearch/>
                </span>
            </div>
        </div>
    );
}

export {TaksSearch}