import "./TaksItem.css"

function TaksItem({name, completed}){
    return(
        <div className="TaksItem">
            <span className={`Icon ${completed && "active"}`}>V</span>
            <p>{name}</p>
            <span className="Icon_delete">X</span>
        </div>
    );
}

export {TaksItem}