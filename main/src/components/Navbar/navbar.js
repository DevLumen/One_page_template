import React from "react";
import '../styles/navbar.css';

// We import NavLink to utilize the react router.
// import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="logo_svg" href="/">
                    <h1>LOGO</h1>
                </a>
            </nav>
        </div>
    );
}