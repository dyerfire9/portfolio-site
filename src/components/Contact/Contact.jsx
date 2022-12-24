import React from "react"
import "./style.css";
import resume from './Resume/resume.pdf'
import { BsLinkedin, BsGithub, BsArrowUpRightSquare, BsDownload, BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { MdEmail, MdContentCopy} from "react-icons/md";
import { Fade} from "react-awesome-reveal";

import { saveAs } from 'file-saver';

export default function Contact() {
    const style1 = {color: "#145DA0", fontSize: "1.5em", verticalAlign: "middle"}

    function handleClick(){
        const tag = document.getElementById('email-text')
        const email = 'abdulmannancomp@gmail.com'

        navigator.clipboard.writeText(email)
        tag.textContent='Copied'
        setTimeout(() => {tag.textContent='Copy Email'}, 1000);
    }

    function saveFile(){
        saveAs(resume, "Muhammad Abdul Mannan.pdf")
    }

    return (
        <div className="contact" id='contact'>
            <Fade duration="1000" direction="up">
                <h2 className="contact-title">Contact</h2>
            </Fade>
            <div className='contact-container'>
                <Fade cascade damping={0.2}>
                    <a className="contact-email hvr-shrink" onClick={handleClick}>
                        <MdEmail style={style1}/> 
                        <p id="email-text">Copy Email</p>
                        <MdContentCopy style={style1}/>
                    </a>
                    <a className="contact-linkedin hvr-shrink" href="https://linkedin.com/in/abdulmannancomp" target="_blank"><BsLinkedin style={style1}/> Linkedin <BsArrowUpRightSquare style={style1}/></a>
                    <a className="contact-github hvr-shrink" href="https://github.com/dyerfire9" target="_blank">< BsGithub style={style1}/> GitHub <BsArrowUpRightSquare style={style1}/></a>
                    <a className="contact-github hvr-shrink" target="_blank" onClick={saveFile} >< BsFillFileEarmarkPdfFill style={style1}/> Resume <BsDownload style={style1}/></a>
                </Fade>
            </div>
        </div>
    )
}