import React, { useState, useEffect } from "react";
import '../styles/welcomepage.css';
import me from '../../images/My_Profile.png';
import { ReactTyped } from 'react-typed'

export default function WelcomePage() {

    return (
        <div id="home" className="welcome_container">
            <div className="content_container">
                <div className="header_container">
                    <h1 className="header_text">Welcome.</h1>
                </div>
                <img className="my_pic" src={me}></img>
              
              {/* I am a... */}
                <h1>
                    <ReactTyped
                        strings={["Frontend Developer ^2000", "QA Engineer ^2000", "UI/UX Designer ^2000"]}
                        typeSpeed={55}
                        loop
                        backSpeed={35}
                        cursorChar=">"
                        showCursor={true}
                    />
                </h1>

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
    )
}
