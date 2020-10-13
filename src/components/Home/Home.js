import React from "react";
import "./Home.css";

import profilepic from "../../media/profilepic.jpg";

const Home = () => {
    return (
        <div id="home-page">
            <div id="left-panel">
                <img id="profile-pic" src={profilepic} alt="joshua horrocks"/>
            </div>

            <div id="right-panel">
                <h2 id="section-title">A Little About Me</h2>
                <p id="bio-content">I'm a recent Lambda School graduate with a passion for developing scalable web applications and working across the full stack. I'm a determined quick learner with strong interpersonal skills and ability to work with clients and other developers in a cross-functional team environment. I'd love the opportunity to work with you.</p>
            </div>

            <div id="skills-panel-right">
                <h2 id="section-title">What I Do</h2>
                <p id="skills-bio">I create web experiences using JavaScript, React, and other tools. I enjoy working on both the front-end and back-end of websites. You can view some of these projects <a href="/projects">here</a>.</p>
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
                        <li id="skills-content-right">Angular</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;