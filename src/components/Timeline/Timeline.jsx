import React from "react"
import TimelineItemContainer from "./TimelineItemContainer/TimelineItemContainer";
import TimelineData from "./TimelineData"
import {Fade, Slide} from "react-awesome-reveal";
import "./style.css";


export default function Timeline() {

    return(
        <div className="timeline" id="timeline">
            <Fade duration="1000" direction="up">
                <h2 className="title">My Timeline</h2>
            </Fade>
            <div className="timeline-wrapper">
                {TimelineData.map((item, index) => {
                    return (
                        <TimelineItemContainer key={index} item={item}/>
                    )
                })}
            </div>
        </div>
    )
}