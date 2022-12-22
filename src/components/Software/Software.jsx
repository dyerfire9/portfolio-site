import React from "react"
import SoftwareData from './SoftwareData'
import SoftwareCard from './SoftwareCard/SoftwareCard'
import { Fade} from "react-awesome-reveal";
import "./style.css";


export default function Software(){
    return(
        <div className="software" id='software'>
            <Fade duration="1000" direction="up">
                <h2 className="software-title">Software & Tools</h2>
            </Fade>
            <div className="software-container grow">
                <Fade cascade damping={0.01}>

                {SoftwareData.map((item, index) => {
                        return (
                                <SoftwareCard key={index} item={item}/>        
                        )
                    })}   
                </Fade>
         
            </div>
        </div>
    )
}