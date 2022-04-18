import React from "react";

import { RiComputerLine } from "react-icons/ri";
import { FiAward } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";


function Resume() {
    return (
        <section className="my-5">
            <h1 id="resume">Resume</h1>
            <hr />


            <div className="row">
                <div className="col-md-6 p-3">
                    <p> <RiComputerLine /> Skills</p>
                    <ul>
                        <li>-HTML</li>
                        <li>-CSS</li>
                        <li>-JavaScript</li>
                        <li>-Node</li>
                        <li>-Express</li>
                        <li>-SQL</li>
                        <li>-MERN</li>
                    </ul>
                </div>
                <div className="col-md-6 p-3">
                    <p> <FiAward /> Certificates</p>
                    <ul>
                        <li>-Full Stack Certification</li>
                        <li>-Microsoft Office Specialist: Excel</li>
                        <li>-Microsoft Office Specialist: Access</li>
                    </ul>
                </div>
            </div>

            <div className="p-4 text-center">
                    <a className="btn btn-light text-dark"
                        href={process.env.PUBLIC_URL + "/MarikoKaku.ucb.pdf"}
                        target="_blank" rel="noreferrer">
                        <MdOutlineFileDownload /> My Resume
                    </a>
                </div>

        </section>
    );
}

export default Resume;



