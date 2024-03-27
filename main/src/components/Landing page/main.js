import React from "react";
import '../styles/main.css';
import WelcomePage from "../Welcome page/welcome_page";

export default function Main() {
    return (
        <div className="main_container">
            <div id="home" className="block_one">
                <WelcomePage/>
            </div>
            <div id="collection" className="block_two">
                {/* <h1>MAIN PAGE COMPONENT 2 GOES HERE</h1> */}
            </div>
            <div id="reviews" className="block_three">
                {/* <h1>MAIN PAGE COMPONENT 3 GOES HERE</h1> */}
            </div>
            <div id="footer" className="footer_block">
                {/* <h1>FOOTER COMPONENT GOES HERE</h1> */}
            </div>
        </div>
    )
}