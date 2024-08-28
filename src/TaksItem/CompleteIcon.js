import { TaksIcon } from "./TaksIcon";

function CompleteIcon({completed, onComplete}) {
    return (
        <TaksIcon
            type="check"
            color={completed ? "#9FC131" : "gray"}
            onClick={onComplete}
        />
    );
}

export { CompleteIcon }