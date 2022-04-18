import React from "react";
import horiseon from "../assets/project/horiseon.png";
import onlypets from '../assets/project/onlypets.png';
import ikoandco from '../assets/project/ikoandco.png';
import datenight from '../assets/project/datenight.png';
import readme from '../assets/project/readme.png';
import robotglad from '../assets/project/robotglad.png';
import runbuddy from '../assets/project/runbuddy.png';
import techtown from '../assets/project/techtown.png';
import workday from '../assets/project/workday.png';
import teambuilder from '../assets/project/teambuilder.png';
import budget from '../assets/project/budget.png';
import cms from '../assets/project/cms.png'

function Portfolio() {
    return (
        <section>
            <h1>Portfolio</h1>

            <div className="container-fluid">

                <div className="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <a href="https://github.com/marikokaku/refractor-web-app" target="_blank" rel="noreferrer">
                                <img
                                    src={horiseon}
                                    alt="horiseon"
                                    className="img-fluid"
                                />
                            </a>
                            <div class="overlay">
                                <h2>HTML/CSS</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <a href="https://github.com/marikokaku/work-day-scheduler" target="_blank" rel="noreferrer">
                                <img
                                    src={workday}
                                    alt="workday"
                                    className="img-fluid"
                                />
                            </a>
                            <div class="overlay">
                                <h2>Third Party APIs</h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <a href="https://github.com/marikokaku/run-buddy" target="_blank" rel="noreferrer">
                                <img
                                    src={runbuddy}
                                    alt="runbuddy"
                                    className="img-fluid"
                                />
                            </a>
                            <div class="overlay">
                                <h2>HTML/CSS</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <a href="https://github.com/marikokaku/robot-gladiators" target="_blank" rel="noreferrer">
                                <img
                                    src={robotglad}
                                    alt="robotglad"
                                    className="img-fluid"
                                />
                            </a>
                            <div class="overlay">
                                <h2>JavaScript</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <a href="https://github.com/marikokaku/iko-and-co" target="_blank" rel="noreferrer">
                                <img
                                    src={ikoandco}
                                    alt="ikoandco"
                                    className="img-fluid"
                                />
                            </a>
                            <div class="overlay">
                                <h2>ORM</h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <a href="https://github.com/marikokaku/readme-generator" target="_blank" rel="noreferrer">
                                <img
                                    src={readme}
                                    alt="readme"
                                    className="img-fluid"
                                />
                            </a>
                            <div class="overlay">
                                <h2>Node.js</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <a href="https://github.com/marikokaku/techtown" target="_blank" rel="noreferrer">
                                <img
                                    src={techtown}
                                    alt="techtown"
                                    className="img-fluid"
                                />
                            </a>
                            <div class="overlay">
                                <h2>MVC</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <a href="https://github.com/alex-d-marten/0nlypets" target="_blank" rel="noreferrer">
                                <img
                                    src={onlypets}
                                    alt="onlypets"
                                    className="img-fluid"
                                />
                            </a>
                            <div class="overlay">
                                <h2>MERN</h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <a href="https://github.com/marikokaku/teambuilder" target="_blank" rel="noreferrer">
                                <img
                                    src={teambuilder}
                                    alt="teambuilder"
                                    className="img-fluid"
                                />
                            </a>
                            <div class="overlay">
                                <h2>OOP</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <a href="https://github.com/marikokaku/Budget-Tracker" target="_blank" rel="noreferrer">
                                <img
                                    src={budget}
                                    alt="budget"
                                    className="img-fluid"
                                />
                            </a>
                            <div class="overlay">
                                <h2>PWA</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <a href="https://github.com/marikokaku/CMS-business" target="_blank" rel="noreferrer">
                                <img
                                    src={cms}
                                    alt="cms"
                                    className="img-fluid"
                                />
                            </a>
                            <div class="overlay">
                                <h2>SQL</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Portfolio;
