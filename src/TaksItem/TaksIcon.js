import { ReactComponent as CheckSVG } from "./check.svg"
import { ReactComponent as DeleteSVG } from "./delete.svg"

function TaksIcon({ type, color, onClick }) {
    const iconType = {
        "check": (color) => <CheckSVG className={type} fill={color} />,
        "delete": (color) => <DeleteSVG className={type} fill={color} />,
    }

    return (
        <span
            className={`Icon Icon_${type}`}
            onClick={onClick}
        >
            {iconType[type](color)}
        </span>
    );
}

export { TaksIcon }