import { CompleteIcon } from "../TaksItem/CompleteIcon";
import { DeleteIcon } from "../TaksItem/DeleteIcon";
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
            >
                <CompleteIcon type={"check"} />
            </span>
            <p className={`Taks ${completed && "completed"}`}>{name}</p>
            <span
                className="Icon_delete"
                onClick={
                    () => {
                        onDelete(name)
                    }
                }
            >
                <DeleteIcon type={"delete"} />
            </span>
        </div>
    );
}

export { TaksItem }