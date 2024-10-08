import { createPortal } from "react-dom";
import "./Modal.css"
import { TaksForm } from "../TaksForm";

function Modal (){
    return createPortal(
        <div className="Modal">
            <TaksForm/>
        </div>,
        document.getElementById("modal")
    );
}

export {Modal}