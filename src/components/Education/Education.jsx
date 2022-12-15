import React from "react"
import EducationItemContainer from "./EducationItemContainer/EducationItemContainer";
import {EducationData} from "./EducationData"
import "./style.css";


export default function Education() {

    return(
        <div className="education" id="education">
            <h2 className="title">Education</h2>
            <div className="education-wrapper">
                {EducationData.map((item, index) => {
                    return (
                        <EducationItemContainer key={index} item={item}/>
                    )
                })}
            </div>
        </div>
    )
}