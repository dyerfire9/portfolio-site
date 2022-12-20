import React from "react"
import SoftwareData from './SoftwareData'
import SoftwareCard from './SoftwareCard/SoftwareCard'
import "./style.css";


export default function Software(){
    return(
        <div className="software" id='software'>
            <h2 className="software-title">Software & Tools</h2>
            <div className="software-container grow">
                {SoftwareData.map((item, index) => {
                        return (
                            <SoftwareCard key={index} item={item}/>
                        )
                    })}            
            </div>
        </div>
    )
}