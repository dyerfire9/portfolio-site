import React from "react"
import "./style.css";
import { BsLinkedin, BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { MdEmail, MdContentCopy} from "react-icons/md";

export default function Contact() {
    const style1 = {color: "#145DA0", fontSize: "1.5em", verticalAlign: "middle"}

    function handleClick(){
        const tag = document.getElementById('email-text')
        const email = 'abdulmannancomp@gmail.com'

        navigator.clipboard.writeText(email)
        tag.textContent='Copied'
        setTimeout(() => {tag.textContent='Copy Email'}, 3000);
    }
    
    return (
        <div className="contact">
            <h2 className="contact-title">Contact</h2>
            <div className='contact-container'>
                <a className="contact-email" onClick={handleClick}>
                    <MdEmail style={style1}/> 
                    <p id="email-text">Copy Email</p>
                    <MdContentCopy style={style1}/>
                </a>
                <a className="contact-linkedin" href="https://linkedin.com/in/abdulmannancomp" target="_blank"><BsLinkedin style={style1}/> Linkedin <BsArrowUpRightSquare style={style1}/></a>
                <a className="contact-github" href="https://github.com/dyerfire9" target="_blank">< BsGithub style={style1}/> GitHub <BsArrowUpRightSquare style={style1}/></a>
            </div>
        </div>
    )
}