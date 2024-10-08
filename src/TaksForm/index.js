import React from "react";
import "./TaksForm.css"
import { TaksContext } from "../TaksContext";

function TaksForm() {
    const {setOpenModal, addTaks}=React.useContext(TaksContext);
    const [data, setData]=React.useState("");
    
    const onSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <form className="form_Create_Tak" onSubmit={onSubmit}>
            <label>Ingresa el nombre de tu nueva tarea: </label>
            <input 
            type="text" 
            placeholder="Leer" 
            value={data}
            onChange={
                (event)=>{
                    setData(event.target.value);
                }
            }
            />
            <div className="boton_Form">
                <button 
                type="submit"
                onClick={
                    ()=>{
                        addTaks(data);
                        setOpenModal(status=>!status);
                    }
                }
                >Crear</button>
                
                <button 
                type="buttom"
                onClick={
                    ()=>{
                        setOpenModal(status=>!status);
                    }
                }
                >Cancelar</button>
            </div>
        </form>
    );
}

export { TaksForm }