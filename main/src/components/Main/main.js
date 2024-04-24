import React from "react";
import '../styles/main.css';
import WelcomePage from "../Welcome page/welcome_page";
import ProjectsPage from "../Projects page/projects_page";
import Footer from "../Footer/footer";
import SkillsPage from "../Skills page/skills_page";

export default function Main() {
    return (
        <div className="main_container">
            <div id="welcome" className="block_one">
                <WelcomePage/>
            </div>
            <div id="skills" className="block_three">
                <SkillsPage/>
            </div>
            <div id="projects" className="block_two">
                <ProjectsPage/>
            </div>
            <div id="footer" className="footer_block">
                <Footer/>
            </div>
        </div>
    )
}