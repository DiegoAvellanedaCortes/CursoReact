import "./PanelTask.css"

function PanelTask({children}){
    return(
        <div className="PanelTask">
            {children}
        </div>
    );
}

export {PanelTask}