import React from "react"
import ProjectsData from './ProjectsData'
import ProjectsCard from './ProjectsCard/ProjectsCard'
import "./style.css";


export default function Projects(){
    return(
        <div className="project">
            <h2 className="project-title">Projects</h2>
            <div className="project-container">
                {ProjectsData.map((item, index) => {
                        return (
                            <ProjectsCard key={index} item={item}/>
                        )
                    })}            
            </div>
        </div>
    )
}