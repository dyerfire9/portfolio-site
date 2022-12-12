import React from "react"
import "./style.css";

export default function SoftwareCard(props){
    const item = props.item
    const index = props.index
    
    return(
        <div key={index} className="card">
            <div className="card-img">
                <img src={require(`../images/${item.image}`)} />
            </div>
            <div className="card-name">
                {item.name}
            </div>
        </div>
    )
}