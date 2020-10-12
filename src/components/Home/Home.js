import React from "react";
import "./Home.css";

import profilepic from "../../media/profilepic.jpg";

const Home = () => {
    return (
        <div id="home-page">
            <h1 id="home-main-title">Welcome to my Portfolio</h1>

            <div id="left-panel">
                <img id="profile-pic" src={profilepic} alt="joshua horrocks"/>
            </div>

            <div id="right-panel">
                <h2 id="section-title">A Little About Me</h2>
                <p id="bio-content">My name is Joshua Horrocks. I was born and raised in North Salt Lake, UT. I enrolled in the Web Development program at Lambda School. Since then, I have graduated and become certified as a Full Stack Web Developer.</p>
            </div>

            <div id="skills-panel-right">
                <h2 id="section-title">What I Do</h2>
                <p id="skills-bio">I create web experiences using JavaScript, React, and other tools. This website was created entirely by me using JavaScript and React.</p>
            </div>

            <div id="skills-panel-left">
                <h2 id="section-title">Skills</h2>
                <div id="skills-list">
                    <div id="skills-left">
                        <li id="skills-content-left">JavaScript</li>
                        <li id="skills-content-left">React</li>
                        <li id="skills-content-left">Redux</li>
                        <li id="skills-content-left">NodeJS</li>
                        <li id="skills-content-left">GraphQL</li>
                        <li id="skills-content-left">PostgreSQL</li>
                    </div>
                    <div id="skills-right">
                        <li id="skills-content-right">API's</li>
                        <li id="skills-content-right">HTML</li>
                        <li id="skills-content-right">CSS</li>
                        <li id="skills-content-right">Python</li>
                        <li id="skills-content-right">Data Structures</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;