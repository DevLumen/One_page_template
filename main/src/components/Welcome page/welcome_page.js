import React, { useState } from "react";
import '../styles/welcomepage.css';
import { ReactTyped } from 'react-typed'

export default function WelcomePage() {

    const [isShown, setIsShown] = useState(false);
    const [loaded, setLoaded] = useState(false);

    return (
        <div id="home" className="welcome_container">
            <div className="content_container">
                <div className="header_container">
                    <h1 className={isShown ? 'fade-out' : "header_text"} onClick={() => { setIsShown(true); setLoaded(true); }} data-text="Welcome.">Welcome.</h1>
                </div>
                {/* isShown being true will set this div and its content to visible if the welcome is clicked */}
                <div className={!isShown ? 'notVisible' : "fade-in"}>
                    <div className="content">

                        <div className="typed_anim">
                            {/* I am a... */}
                            <h1>
                                <ReactTyped
                                    strings={[
                                        "Frontend Developer ^2000",
                                        "QA Engineer ^2000",
                                        "UI/UX Designer ^2000"
                                    ]}
                                    typeSpeed={55}
                                    loop
                                    backSpeed={35}
                                    cursorChar=">"
                                    showCursor={true}
                                />
                            </h1>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}
