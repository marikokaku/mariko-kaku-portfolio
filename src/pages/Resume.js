import React from "react";

function Resume() {
    return (
        <section className="my-5">
            <h1 id="resume">Resume</h1>
            <div>
            <a className="button is-primary"
            href={process.env.PUBLIC_URL + "/MarikoKaku.amznsde.pdf"}
            target="_blank" rel="noreferrer">
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
            </div>

            <div className="my-2">
                <p>Skills</p>
                <hr />
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li></li>
                </ul>
            </div>

            
            <div className="my-2">
                <p>Certificates</p>
                <hr />
                <ul>
                    <li>Microsoft Excel</li>
                    <li>Microsoft Access</li>
                    <li>Full Stack bootcamp</li>
                    <li>SAP recognition</li>
                    <li>IT recognition</li>
                </ul>
            </div>

        </section>
    );
}

export default Resume;



