import React, { useState } from "react";
import '../styles/navbar.css';

export default function Navbar() {
    const [isShown, setIsShown] = useState(false);

    return (
        <nav className="main_nav nav-straight-line">
            {isShown && (
                <div className="dropped_nav"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    <div className="tabs_container">
                        <a href="/">LINK 1</a>
                        <a href="/">LINK 2</a>
                        <p className="logo">
                            LOGO
                        </p>
                        <a href="/">LINK 3</a>
                        <a href="/">LINK 4</a>
                    </div>
                </div>
            )}
            <div className="bubble_logo"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                <h1 className="arrow_down expand_menu">
                    V
                </h1>
            </div>
        </nav>
    );
}