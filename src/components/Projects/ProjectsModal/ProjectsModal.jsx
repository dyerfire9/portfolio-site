import React from "react"
import "./style.css"
import img from "../images/blocky.png"
import LiveSquares from '../../LiveSquares/LiveSquares';

export default function ProjectsModal(props){   
    function toggle(){
        props.changeState(prevVal => ({...prevVal, isOpen: !prevVal.isOpen}))
    }
    return(
        <div className={`projects-modals ${props.state.isOpen ? 'modal-open' : 'modal-closed'}`}>
            <div className="modal-container">
                <div className="modal-header" onClick={toggle}> <button>X</button></div>

                <div className="modal-image">
                    <img src={require(`../images/dungeone.jpg`)}/>
                </div>
                <div className="modal-title">
                    <h2>{props.state.item.title}</h2>
                    <p>{props.state.item.description}</p>
                </div>
                <div className="modal-desc">
                    <h2>Features:</h2>
                    <ul>
                        {props.state.item.features.map(feature => <li>{feature}</li>)}
                    </ul>
                </div>
                <div className="modal-link"><a href={props.state.item.link} target='blank'>View Project</a></div>
            </div>
        </div>
    )
    
}