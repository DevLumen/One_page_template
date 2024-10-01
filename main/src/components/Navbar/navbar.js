import React, { useState } from "react";
import '../styles/navbar.css';


export default function Navbar() {
    const [isShown, setIsShown] = useState(false);

    let cards = document.getElementsByClassName("card");

    return (
        <nav className="main_nav nav-straight-line">
            {isShown && (
                <div className="dropped_nav"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                ></div>
            )}
            <div className="bubble_logo">
                <h1 className="arrow_down expand_menu">
                    <i className="fa-solid fa-angles-down"></i>
                </h1>
            </div>
        </nav>
    );
}