import React from "react";
import Horiseon from "../assets/project/horiseon.png";

function Portfolio() {
    return (

        <section className="portfolio">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                    <div className="card">
                        <img
                            src={Horiseon}
                            alt="horiseon"
                            className="card-img-top"
                        />
                        <div className="card-body">

                            <a href="https://github.com/marikokaku/refractor-web-app" target="_blank" rel="noreferrer">
                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
