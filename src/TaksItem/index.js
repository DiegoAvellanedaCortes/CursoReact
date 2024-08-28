import { CompleteIcon } from "../TaksItem/CompleteIcon";
import { DeleteIcon } from "../TaksItem/DeleteIcon";
import "./TaksItem.css"

function TaksItem({ name, completed, onComplete, onDelete }) {
    return (
        <li className="TaksItem">
            <CompleteIcon
                completed={completed}
                onComplete={onComplete}
            />
            <p className={`Taks ${completed && "completed"}`}>{name}</p>
            <DeleteIcon
                onDelete={onDelete}
            />
        </li>
    );
}

export { TaksItem }