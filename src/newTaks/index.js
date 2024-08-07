import './newTaks.css'

function NewTaksContainer(){
    return(
        <div className="NewTaksContainer">
            <h2>Creador de tarea</h2>
            <p>Nombre de tarea</p>
            <input type="text" placeholder="Leer"/>

            <div className="NewContainerButtonsTaks">
                <button className='boton'>Crear Tarea</button>
                <button className='boton'>Crear Tarea Modal</button>
            </div>

        </div>
    );
}

export {NewTaksContainer}