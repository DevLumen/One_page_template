import React from "react";
import '../styles/skills.css';

export default function SkillsPage() {

    return (
        <div id="edu_skills_page" className="edu_skills_page">
            <div className="title_container">
                <h1 className="title">Portoflio Page</h1>
            </div>
            <div className="aboutMe_container">
                <h2 className="aboutMe_title">Projects</h2>
                <p className="aboutMe_body">This is the section for the project cards</p>
            </div>
            <div className="skills_container">
                <ul className="skills_list">
                    <li className="skill_one">Skill 1</li>
                    <li className="skill_two">Skill 2</li>
                    <li className="skill_three">Skill 3</li>
                    <li className="skill_four">Skill 4</li>
                    <li className="skill_five">Skill 5</li>
                    <li className="skill_six">Skill 6</li>
                    <li className="skill_seven">Skill 7</li>
                    <li className="skill_eight">Skill 8</li>
                </ul>
            </div>
        </div>
    )
}