import React from 'react';
import {NavLink} from "react-router-dom";
import "./Navbar.css"

const NavBar = () => {
    return (
        <header id="nav-header">
        <h2 id="nav-title">Joshua Horrocks</h2>
        <div id="nav-content">
            <nav id="navbar">
                <div id="nav-links">
                    <NavLink to="/" id="nav-link-home">Home</NavLink>
                    <NavLink to="/projects" id="nav-link-projects">Projects</NavLink>
                    <NavLink to="/contact" id="nav-link-contact">Contact</NavLink>
                </div>
            </nav>
        </div>
        </header>
    )
}

export default NavBar;