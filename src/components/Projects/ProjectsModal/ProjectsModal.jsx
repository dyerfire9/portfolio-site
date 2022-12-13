import React from "react"
import "./style.css"

export default function ProjectsModal(props){
    let [isOpen, setIsOpen] = React.useState(props.isOpen)

    function toggle(){
        setIsOpen(prevVal => ({...prevVal, isOpen: !prevVal.isOpen}))
    }
    return(
        <div className={`projects-modals ${isOpen.isOpen ? 'modal-open' : 'modal-close'}`}>
            <div className="modal-container">
                <div className="modal-header" onClick={toggle}> <button>X</button></div>
                <div className="modal-title">
                    <h2>Hello</h2>
                </div>
                <div className="modal-image"></div>
                <div className="modal-desc"><h2>fedadsdadsasdaasdasdasd</h2></div>
            </div>
        </div>
    )
    
}