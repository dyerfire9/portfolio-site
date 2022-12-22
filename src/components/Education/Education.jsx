import React from "react"
import EducationItemContainer from "./EducationItemContainer/EducationItemContainer";
import {EducationData} from "./EducationData"
import { Fade, Slide} from "react-awesome-reveal";
import "./style.css";


export default function Education() {

    return(
        <div className="education" id="education">
            <Fade duration="1000" direction="up">
                <h2 className="title">Education</h2>
            </Fade>
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