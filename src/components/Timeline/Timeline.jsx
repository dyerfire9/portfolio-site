import React from "react"
import TimelineItemContainer from "./TimelineItemContainer/TimelineItemContainer";
import TimelineData from "./TimelineData"
import "./style.css";


export default function Timeline() {

    return(
        <div className="timeline" id="timeline">
            <h2 className="title">My Timeline</h2>
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