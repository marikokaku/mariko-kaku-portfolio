import React from "react";
import avatar from '../assets/avatar/avatar.transparent.png';

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="img rounded-circle w-75" src={avatar} alt='avatar' />
                </div>
                <div className="col-md-6">
                    <div className="row align-items-center h-100">
                        <div className="col">
                            <h1 className="display-3">hi, my names mariko</h1>
                            <p>I'm an aspiring full stack developer with an Information Systems degree and full stack certification!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
{/* <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img rounded-circle w-100" src={avatar} alt='avatar' />
                        </div>
                        <div className="col-md-4">
                            <div className="row align-items-center h-100"></div>
                            <div className="col">
                                <h2>hi, my names mariko</h2>
                                <p>I'm an aspiring full stack developer with an Information Systems degree and full stack certification!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section > */}


export default About;
