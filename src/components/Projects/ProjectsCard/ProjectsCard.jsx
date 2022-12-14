import React from "react"
import "./style.css"

export default function ProjectsCard(props){
    const content = props.item    

    function toggle(content){
        props.changeState(prevVal => ({...prevVal, 
            isOpen: !prevVal.isOpen,
            item: content
        }), props.state)
            
            console.log("Hi", props.state)
    }

    return(
        <div className="projectsCard-container" onClick={() => toggle(content)}>
            <div className="projectcard-img">
                <img src={require(`../images/${content.img}`)} />
            </div>
            <h3 className="projectsCard-title">{content.title}</h3>
        </div>
        
    )
}