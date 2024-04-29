import React, { useState, useEffect } from "react";
import '../styles/welcomepage.css';
import myAvatar from '../../images/My_Profile.png';
import { ReactTyped } from 'react-typed'

export default function WelcomePage() {

    const [isShown, setIsShown] = useState(false);

    return (
        <div id="home" className="welcome_container">
            <div className="content_container">
                <div className="header_container">
                    <h1 className={isShown ? 'fade-out' : "header_text"} onClick={() => setIsShown(true)}></h1>
                    <h1 className={isShown ? 'fade-out' : "header_text"} onClick={() => setIsShown(true)} data-text="Welcome.">Welcome.</h1>
                </div>
                {/* isShown being true will set this div and its content to visible if the welcome is clicked */}
                <div className={!isShown ? 'notVisible' : "fade-in"}>
                    <div className="content">
                        <img className="my_pic" src={myAvatar} />
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
                        <div className="speechBubble_container">
                            <div className="speechBubble_typedAnim">
                                {/* About me... */}
                                <h2>
                                    <ReactTyped strings={[
                                        "Welcome, my name is Andres Soca. ^2000",
                                        "I design and code beautiful projects, and I absolutely love what I do. ^4000"
                                    ]}
                                        typeSpeed={15}
                                        loop
                                    ></ReactTyped>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
