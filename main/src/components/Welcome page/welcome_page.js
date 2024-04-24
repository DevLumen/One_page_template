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
                        strings={["Frontend Developer", "QA Engineer", "UI/UX Designer"]}
                        typeSpeed={50}
                        loop
                        backSpeed={50}
                        cursorChar=">"
                        showCursor={true}
                    />
                </h1>

                {/* About me... */}
                <h2>
                    <ReactTyped strings={[
                        "I design and code beautiful projects, and I absolutely love what I do. ^6000"
                    ]}
                        typeSpeed={75}
                        loop
                        
                    ></ReactTyped>
                </h2>
            </div>
        </div>
    )
}
