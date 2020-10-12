import React from "react";
import "./Projects.css";

import map1 from "../../media/map1.png";
import lotr from "../../media/lotrpic.png";
import umts from "../../media/umts.png";
import gameoflife from "../../media/gameoflife.png";

const Projects = () => {
    return (
        <div id="projects-page">
            <div id="projects-title">
                <h1>Projects</h1>
                <h3>During my time at Lambda, I had plenty of oppotunities to work solo or with my fellow developers on projects. Here are a few of my favorites.</h3>
            </div>

            <div id="project-card1">
                <div className="project-content">
                    <a className="project-title" href="https://www.c.ecosoap.dev/login" target="_blank" rel="noopener noreferrer">Eco-Soap Bank</a>
                    <p className="project-bio">During the Labs portion of Lambda, I had the opportunity to work with the company, Eco-Soap Bank. Their needs included a portal for admins modify a list of records that would dynamically display on a map. This rather large task was settled on the shoulders of myself and 2 other web developers, one of which left a week in.</p>
                    <img className="project-img" src={map1} alt="a map with markers put on it"/>
                </div>
            </div>

            <div id="project-card2">
                <div className="project-content">
                    <a className="project-title" href="https://theonering.vercel.app/" target="_blank" rel="noopener noreferrer">The One Ring Minecraft Server</a>
                    <p className="project-bio">While still plowing through Lambda's curriculum, I was approached about creating a website for a hobby of mine: A Lord of the Rings Minecraft Server. It became a side-project of mine that really helped spark a greater love of coding, as I researched more cool utilities and API's I could use.</p>
                    <img className="project-img" src={lotr} alt="the landing page for The One Ring"/>
                </div>
            </div>

            <div id="project-card3">
                <div className="project-content">
                    <a className="project-title" href="https://game-of-life-nu.vercel.app/" target="_blank" rel="noopener noreferrer">Conway's Game of Life</a>
                    <p className="project-bio">This is a project I started near the end of our CS portion of Lambda. It's a simple page that lets users create complex simulations of life, according to the rules of the game. Read the instructions on the page, click a few squares, or use one of the preset patterns I programmed in.</p>
                    <img id="project-img3" src={gameoflife} alt="landing page for Use-My-Techstuff"/>
                </div>
            </div>

            <div id="project-card4">
                <div className="project-content">
                    <a className="project-title" href="https://usemytechstuff2.now.sh/" target="_blank" rel="noopener noreferrer">Use-My-Techstuff</a>
                    <p id="project-bio4">My first project I created at Lambda. While working on a larger team of web developers (2 HTML/CSS devs,3 React devs, and 1 NodeJS dev), it was my task to build a marketing page for our app with the assistance of one of my fellow developers. I developed the Home and Contact Us pages while his responsibility was the About and FAQ pages.</p>
                    <img id="project-img4" src={umts} alt="landing page for Use-My-Techstuff"/>
                </div>
            </div>

            <div id="bottom-card">
                <h2 id="bottom-title">And many more!</h2>
                <p id="bottom-bio">Interested in seeing the code for these projects? Head over to my github to see that and more!</p>
                <a id="github-link" href="https://github.com/joshuabhorrocks" target="_blank" rel="noopener noreferrer">Click Here!</a>
            </div>
        </div>
    )
}

export default Projects;