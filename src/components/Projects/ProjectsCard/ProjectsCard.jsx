import React from "react"
import "./style.css"

export default function ProjectsCard(props){
    let item = props.item
    let index = props.index
    return(

        <div className="projectsCard-container">
            <h3 className="projectsCard-title">{item.title}</h3>
            <div className="card-img">
                <img src={require(`../images/${item.img}`)} />
            </div>
        </div>
    )
}