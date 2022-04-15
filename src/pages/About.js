import React from "react";
import avatar from '../assets/avatar/avatar.jpg';

function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <hr />
            <img src={avatar} alt='avatar'/>
            <p>Information Systems Graduate with U.C. Berkeley Coding Full Stack Certification</p>
            <div style="clear:both"></div>
        </section>
    )
}

export default About;
