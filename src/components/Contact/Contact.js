import React from "react";
import "./Contact.css";

import linkedin from "../../media/social-media-icons/linkedin.png";
import twitter from "../../media/social-media-icons/twitter.png";
import gmail from "../../media/social-media-icons/gmail.png";
import github from "../../media/social-media-icons/github.png";

const Contact = () => {
    return (
        <div id="contact-page">
            <h1 id="contact-title">Want to get in contact with me? Here are some options.</h1>
            <div id="contact-links">
                <img className="icons" src={linkedin} alt="linkedin logo"/>
                <a className="icon-label" href="https://www.linkedin.com/in/joshuabhorrocks/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                <img className="icons" src={github} alt="github logo"/>
                <a className="icon-label" href="https://github.com/joshuabhorrocks" target="_blank" rel="noopener noreferrer">Github</a>
                <img className="icons" src={twitter} alt="twitter logo"/>
                <a className="icon-label" href="https://twitter.com/JoshuaBHorrocks/" target="_blank" rel="noopener noreferrer">Twitter</a>
                <img className="icons" src={gmail} alt="gmail logo"/>
                <a className="icon-label" href="https://www.linkedin.com/in/joshuabhorrocks/" target="_blank" rel="noopener noreferrer">joshuabhorrocks@gmail.com</a>
            </div>
        </div>
    )
}

export default Contact;