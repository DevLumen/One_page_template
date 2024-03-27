import React from "react";
import '../styles/welcomepage.css';
import image1 from '../../images/top_photo.jpg';
import image2 from '../../images/bottom_photo.jpg'

export default function WelcomePage() {

    return (
        <div id="home" className="welcome_container">
            <div className="content_container">
                <div className="image1_container">
                    <img src={image1} className="image1" alt="Broken handler here"></img>
                </div>
                <div className="image2_container">
                    <img src={image2} className="image2" alt="Broken handler here"></img>
                </div>
                <div className="header_container">
                    <h1 className="header_text">New Clothing Collection</h1>
                </div>
                <div className="message_container">
                    <p className="message_text">Some message here for the store should be about this much text so it fits nicely.</p>
                </div>
                <div className="button_container">
                    <button className="explore_button"><a className="explore_anchor" href="#collection">Explore <i class="fa-solid fa-arrow-right"></i></a></button>
                </div>
            </div>
        </div>
    )
}