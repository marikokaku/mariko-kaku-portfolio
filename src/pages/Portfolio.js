import React from "react";
import Horiseon from "../assets/project/horiseon.png";

function Portfolio() {
    return (

        <section class="portfolio">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
                <div class="col">
                    <div class="card">
                        <img
                            src={Horiseon}
                            alt="horiseon"
                            class="card-img-top"
                        />
                        <div class="card-body">

                            <a href="https://github.com/marikokaku/refractor-web-app" target="_blank" rel="noreferrer">
                                <button>GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
