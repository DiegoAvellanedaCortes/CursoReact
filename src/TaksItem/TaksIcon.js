import {ReactComponent as CheckSVG} from "./check.svg"
import {ReactComponent as DeleteSVG} from "./delete.svg"

function TaksIcon({type}){
    const iconType={
        "check":<CheckSVG/>,
        "delete":<DeleteSVG/>
    }

    return(
        <span className={`Icon Icon_${type}`}>
            {iconType[type]}
        </span>
    );
}

export {TaksIcon}