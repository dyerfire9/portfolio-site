import React from "react"
import "./home.css";
import { Fade } from "react-awesome-reveal";

export default function Home() {
    const date = new Date()
    const hours = date.getHours()
    let greeting
    
    if (hours < 12) {
        greeting = "Good Morning"
    } else if (hours >= 12 && hours < 17) {
        greeting = "Good Afternoon"
    } else {
        greeting = "Good Evening"
    }

    return(
        <div className="home">
            <div className='home-container'>
                <Fade duration="2000" >
                     <h2 className="home-greeting">{greeting}</h2>
                </Fade>
                <Fade duration="3000" delay='100'>
                    <h1 className="home-name"> I'm Abdul</h1>
                </Fade>
                <Fade duration="3000" delay='200'>
                    <p className="home-bio">I am a Third Year Computer Science & Statistics Student at the University of Toronto</p>
                </Fade>
            </div>
        </div>
    )
}