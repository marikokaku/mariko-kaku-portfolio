import React from "react";
import avatar from '../assets/avatar/avatar.transparent.png';

function About() {
    return (
        <section>
            <div className="align-left">
                <img className="img rounded-circle" src={avatar} alt='avatar' />
            </div>
            <div className="align-right">
                <h1 id="about">hi, my names mariko</h1>
                <p>I'm an aspiring full stack developer with an Information Systems degree and full stack certification!</p>
            </div>
        </section>
    )
}

export default About;
