import React from "react"
import{ProjectsData} from './ProjectsData'
import ProjectsCard from './ProjectsCard/ProjectsCard'
import ProjectsModal from './ProjectsModal/ProjectsModal'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Fade} from "react-awesome-reveal";
import "./style.css";

export default function Projects(){
    let [isOpen, setIsOpen] = React.useState(({
        isOpen: false,
        item: {
            title: 'Dungeon Escape',
            description: 'A Retro Dungeon Escape game inspired from the Retro Legend of Zelda games.',
            features: ['Many different objects to seed the map',
                       'Interact with these different objects (ie: push the rocks to clear the path to the exit)',
                       'Dynamic Editing system to test the game while editing the map'],
            link: 'https://github.com/dyerfire9/Dungeon-Escape',
            img: 'dungeone.jpg'
        }}))

    return(
        <div className="project" id="project">
            <Fade duration="1000" direction="up">
                <h2 className="project-title">Projects</h2>
            </Fade>
            <div className="project-container">
                {ProjectsData.map((item, index) => {
                        return (
                            <Fade duration="1000">
                                <ProjectsCard key={index} item={item} state={isOpen} changeState={setIsOpen}/>
                            </Fade>
                        )
                    })}            
            </div>
            <ProjectsModal image={isOpen.item.img} state={isOpen} changeState={setIsOpen}/>
        </div>
    )
}