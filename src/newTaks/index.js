import React from 'react';
import './newTaks.css'
import { TaksContext } from '../TaksContext';

function NewTaksContainer() {
    const { setOpenModal } = React.useContext(TaksContext);
    const [datos, setDatos]=React.useState("");

    const onChange=(event)=>{
        setDatos(event.target.value);
    }
    return (
        <div className="NewTaksContainer">
            <h2>Creador de tarea</h2>
            <p>Nombre de tarea</p>
            <input
                type="text"
                placeholder="Leer"
                value={datos}
                onChange={onChange}
            />

            <div className="NewContainerButtonsTaks">
                <button
                    className='boton botonNewtaks'
                    onClick={
                        (event) => {
                            alert(datos);
                        }
                    }
                >Crear Tarea</button>
                <button
                    className='boton botonModal'
                    onClick={
                        () => {
                            setOpenModal(status => !status);
                        }
                    }
                >Crear Tarea Modal</button>
            </div>

        </div >
    );
}

export { NewTaksContainer }