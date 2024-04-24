import React, { useState, useEffect } from "react";
import '../styles/welcomepage.css';
import me from '../../images/My_Profile.png';
import {ReactTyped} from 'react-typed'

export default function WelcomePage() {

    return (
        <div id="home" className="welcome_container">
            <div className="content_container">
                <div className="header_container">
                    <h1 className="header_text">Welcome.</h1>
                </div>
                <img className="my_pic" src={me}></img>
                {/* Add a typer functionality here to type out dynamically on page, welcome message */}
                <h2>
                    <ReactTyped strings={[
                        "Welcome to my Portfolio", 
                        "My name is Andres Soca", 
                        "I am a passionate, Full Stack Software Engineer and Quality Assurance Engineer", 
                        "With a passion for UI/UX design"
                    ]}  
                        typeSpeed={100} 
                        loop 
                ></ReactTyped>
                </h2>
            </div>
        </div>
    )
}
