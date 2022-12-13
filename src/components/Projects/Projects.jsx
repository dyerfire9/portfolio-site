import React from "react"
import ProjectsData from './ProjectsData'
import ProjectsCard from './ProjectsCard/ProjectsCard'
import ProjectsModal from './ProjectsModal/ProjectsModal'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import "./style.css";

export default function Projects(){
    let [isOpen, setIsOpen] = React.useState(({
        isOpen: false,
        item: {
            title: '',
            description: '',
            features: [''],
            link: '',
            img: ''
        }}))

    function toggle(content){
        if(content){
            setIsOpen(prevVal => ({...prevVal, item: {title: content.title, description: content.description, features: content.features, link: content.link, img: content.link}}))
        }
        console.log('hi', isOpen)
    }
    return(
        <div className="project">
            <h2 className="project-title">Projects</h2>
            <div className="project-container">
                {ProjectsData.map((item, index) => {
                        return (
                            <ProjectsCard key={index} item={item} handleClick={(item) => toggle(item)}/>
                        )
                    })}            
            </div>
            {isOpen && <ProjectsModal isOpen={isOpen}/>}
        </div>
    )
}