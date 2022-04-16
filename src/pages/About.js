import React from "react";
import avatar from '../assets/avatar/avatar.transparent.png';

function About() {
    return (
        // <section className="">
        //     <div className="d-flex mx-auto justify-content-center">
        //         <h1 id="about">hi, my names mariko</h1>
        //         <p>!</p>
        //     </div>
        // </section>
        <section>
            <div className="container">
                <div className="row">
                    {/* <div className="col-md-6">
                        <img className="img rounded-circle" src={avatar} alt='avatar' />
                    </div> */}
                    <div className='col-md-6'>
                        <h2>hi, my names mariko</h2>
                        <p>I'm an aspiring full stack developer with an Information Systems degree and full stack certification!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
