import React from "react"
import ProjectsModal from '../ProjectsModal/ProjectsModal'
import "./style.css"

export default function ProjectsCard(props){
    let item = props.item    

    return(
        <div className="projectsCard-container" onClick={() => props.handleClick(item)}>
            <div className="projectcard-img">
                <img src={require(`../images/${item.img}`)} />
            </div>
            <h3 className="projectsCard-title">{item.title}</h3>
        </div>
        
    )
}