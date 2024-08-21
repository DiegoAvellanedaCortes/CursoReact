import "./TaksItem.css"

function TaksItem({ name, completed, onComplete, onDelete }) {
    return (
        <div className="TaksItem">
            <span
                className={`Icon ${completed && "active"}`}
                onClick={
                    () => {
                        onComplete(name)
                    }
                }
            >V</span>
            <p className={`Taks ${completed && "completed"}`}>{name}</p>
            <span
                className="Icon_delete"
                onClick={
                    ()=>{
                        onDelete(name)
                    }
                }
            >X</span>
        </div>
    );
}

export { TaksItem }