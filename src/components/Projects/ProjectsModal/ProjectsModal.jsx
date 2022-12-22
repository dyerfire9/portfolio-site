import React from "react"
import "./style.css"
import { FaGithub} from 'react-icons/fa';
import { RiCloseLine } from "react-icons/ri";
import { Fade, Slide} from "react-awesome-reveal";

export default function ProjectsModal(props){   
    let modal = document.getElementById('projects-modal');
    const style1 = { color: "white", fontSize: "1.2em", display:'inline-flex', 'verticalAlign': 'text-top'}
    const style2 = { color:"white", fontSize: "1.5em"}

    function toggle(){
        props.changeState(prevVal => ({...prevVal, isOpen: !prevVal.isOpen}))
    }


    window.onclick = function(event) {
        if (event.target === modal) {
            props.changeState(prevVal => ({...prevVal, isOpen: !prevVal.isOpen}))
        }
  }
    return(
        <div id='projects-modal' className={`projects-modal ${props.state.isOpen ? 'modal-open' : 'modal-closed'} fade-in`}>
            <div className="modal-container">
                <div className="modal-header" onClick={toggle}> <button><RiCloseLine style={style2}/></button></div>

                <div className="modal-image">
                    <img src={require(`../images/${props.image}`)}/>
                </div>
                <div className="modal-title">
                    <h2>{props.state.item.title}</h2>
                    <p>{props.state.item.description}</p>
                </div>
                <div className="modal-desc">
                    <h2>Features:</h2>
                    <ul>
                        {props.state.item.features.map((feature, index) => <li key={index}>{feature}</li>)}
                    </ul>
                </div>
                <div className="modal-link"><a href={props.state.item.link} target='blank'><FaGithub style={style1}/> View Project</a></div>
            </div>
        </div>
    )
    
}