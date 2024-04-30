import React, { useState } from "react";
import '../styles/welcomepage.css';
import myAvatar from '../../images/My_Profile.png';
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

                        {loaded ?
                            <div className="speechBubble_container1">
                                <div className="speechBubble_typedAnim1">
                                    <h2 className="speech_text1">
                                        {/* About me... */}
                                        <ReactTyped strings={[
                                            "^550 Welcome, my name is Andres Soca."
                                        ]}
                                            typeSpeed={20}
                                        ></ReactTyped>
                                    </h2>
                                </div>
                            </div>
                        : null}

                        {loaded ?
                            <div className="speechBubble_container2">
                                <div className="speechBubble_typedAnim2">
                                    <h2 className="speech_text2">
                                        <ReactTyped strings={[
                                            "^2000 I design and code beautiful projects, and I absolutely love what I do."
                                        ]}
                                            typeSpeed={25}
                                        ></ReactTyped>
                                    </h2>
                                </div>
                            </div>
                        : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
