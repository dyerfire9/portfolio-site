import React from "react"
import "./navbar.css";

export default function Navbar(){

    function navSlide() {
        const burger = document.querySelector('.navburger')
        const navbar = document.querySelector('.navbar-links')
        const navLink = document.querySelectorAll('.nav-link')
        
        
        navbar.classList.toggle('navbar-active')
        burger.classList.toggle('toggle')
        
        navLink.forEach(button => button.addEventListener('click', closeMenu));
        function closeMenu(){
            burger.classList.remove('toggle')
            navbar.classList.remove('navbar-active')
        }
    }

    // Scroll to top on click
    React.useEffect(() => {
        // 
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    function toTop(){
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <div className="header slide-in-top">
            <nav className="navbar">
                <div className="navbar-name" onClick={toTop}>Abdul Mannan</div>
               
                <ul className="navbar-links">
                    <li><a href="#timeline" className="nav-link hover-ani">Timeline</a></li>
                    <li><a href="#software" className="nav-link hover-ani">Software</a></li>
                    <li><a href="#project" className="nav-link hover-ani">Projects</a></li>
                    <li><a href="#education" className="nav-link hover-ani">Education</a></li>
                    <li><a href="#contact" className="nav-link hover-ani">Contact</a></li>
                </ul>
        
                <div id="navburger"className="navburger" onClick={navSlide}>
                    <div className="burger-line1"></div>
                    <div className="burger-line2"></div>
                    <div className="burger-line3"></div>
                </div>
            </nav>
        </div>
    )
}