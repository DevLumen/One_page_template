import React from "react";
import '../styles/projects.css';

export default function CollectionsPage() {

    const members = {
        member1: {
            name: "Charles Woods",
            image: "",
            stack: "",
            desc: "",
            githubLink: "",
        },
        member2: {
            name: "Yooboo Park",
            image: "",
            stack: "",
            desc: "",
            githubLink: "",
        },
        member3: {
            name: "Andres Soca",
            image: "",
            stack: "",
            desc: "",
            githubLink: "",
        },
        member4: {
            name: "Misc.",
            image: "",
            stack: "",
            desc: "",
            githubLink: "",
        },
    }

    const membersData = [members.member1, members.member2, members.member3, members.member4];


    return (
        <div id="cards" className="cards_container">
            <h1 style={{position: 'absolute'}}>Meet the Team</h1>

            {membersData.map((member, i) => (
                <div className="card">

                    <div className="contentBox cards_container">
                        <div className="project_card">
                            <h3>{member.name}</h3>
                            <div className="image">{member.image}</div>
                            <p>{member.languages}</p>
                            <p>{member.desc}</p>
                            <h2 className="links">{member.githubLink}</h2>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}