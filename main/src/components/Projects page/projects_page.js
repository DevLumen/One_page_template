import React from "react";
import '../styles/projects.css';

// Import PROJECT GIFS here from images folder, like below:
    // import jacket_image from '../../images/jacket.png'

export default function CollectionsPage() {

    const project = {
        project1: {
            name: "Project1",
            image: "Project 1 gif coming soon",
            languages: "Languages / Frameworks used",
            desc: "Description of project 1",
            linkToProj: "link to project",
        },
        project2: {
            name: "Project2",
            image: "Project 2 gif coming soon",
            languages: "Languages / Frameworks used",
            desc: "Description of project 2",
            linkToProj: "link to project",
        },
        project3: {
            name: "Project3",
            image: "Project 3 gif coming soon",
            languages: "Languages / Frameworks used",
            desc: "Description of project 3",
            linkToProj: "link to project",
        },
        project4: {
            name: "Project4",
            image: "Project 4 gif coming soon",
            languages: "Languages / Frameworks used",
            desc: "Description of project 4",
            linkToProj: "link to project",
        },
    }

    const projects = [project.project1, project.project2, project.project3, project.project4];


    return (
        <div id="cards" className="cards_container">
            <h1 style={{position: 'absolute'}}>Projects Page</h1>

            {projects.map((project, i) => (
                <div className="card">

                    <div className="contentBox cards_container">
                        <div className="project_card">
                            <h3>{project.name}</h3>
                            <div className="image">{project.image}</div>
                            <p>{project.languages}</p>
                            <p>{project.desc}</p>
                            <h2 className="links">{project.linkToProj}</h2>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}