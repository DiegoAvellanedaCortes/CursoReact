import { TaksIcon } from "./TaksIcon";

function DeleteIcon({ onDelete }) {
    return (
        <TaksIcon
            type="delete"
            color="gray"
            onClick={onDelete}
        />
    );
}

export { DeleteIcon }