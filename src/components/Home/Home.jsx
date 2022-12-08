import React from "react"
import LiveSquares from '../../components/LiveSquares/LiveSquares';
import "./home.css";

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
            <LiveSquares/>
            <div className='home-container'>
                <h2 className="home-greeting">{greeting}</h2>
                <h1 className="home-name"> I'm Abdul</h1>
                <p className="home-bio">I am a Third Year Computer Science & Statistics Student at the University of Toronto</p>
            </div>
        </div>
    )
}