import React from "react";
import avatar from '../assets/avatar/avatar.jpg';

function About() {
    return (
        <section>
            <h1 id="about">hi, my names mariko</h1>
            <img src={avatar} alt='avatar'/>
            <p>Information Systems Graduate with U.C. Berkeley Coding Full Stack Certification</p>
        </section>
    )
}

export default About;
