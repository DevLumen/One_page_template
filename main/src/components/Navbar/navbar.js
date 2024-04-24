import React, { useState } from "react";
import '../styles/navbar.css';


export default function Navbar() {
    const [isShown, setIsShown] = useState(false);
    // const home = useRef(null);
    // const newProducts = useRef(null);
    // const collection = useRef(null);
    // const reviews = useRef(null);

    let cards = document.getElementsByClassName("card");


    return (
        <nav className="main_nav nav-straight-line">
            {isShown && (
                <div className="dropped_nav"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    <div className="tabs_container">
                        <a href="#welcome"><span className="tab_span">About me</span></a>
                        <a href="#skills"><span className="tab_span">Skills</span></a>
                        <div className="logo">
                            <p>
                                LOGO
                            </p>
                        </div>
                        <a href="#projects"><span className="tab_span">Projects</span></a>
                        <a href="#footer"><span className="tab_span">Contact me</span></a>
                    </div>
                </div>
            )}
            <div className="bubble_logo">
                <h1 className="arrow_down expand_menu"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    <i className="fa-solid fa-angles-down"></i>
                </h1>
            </div>
        </nav>
    );
}