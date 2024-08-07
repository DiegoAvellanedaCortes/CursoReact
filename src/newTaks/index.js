function NewTaksContainer(){
    return(
        <div className="TaksContainer">
            <h2>Creador de tarea</h2>
            <p>Nombre de tarea</p>
            <input type="text" placeholder="Leer"/>

            <div className="containerButtonsTaks">
                <button>Crear Tarea</button>
                <button>Crear Tarea Modal</button>
            </div>

        </div>
    );
}

export {NewTaksContainer}