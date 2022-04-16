import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <div className="fixed-bottom text-center">
                
                    <a
                        className="btn shadow-none"
                        href="https://github.com/marikokaku"
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        className="btn shadow-none"
                        href="https://www.linkedin.com//in/marikokaku"
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                
            
                <p>&copy; Mariko Kaku All Rights Reserved</p>
            </div>
        </div>

    );
}

export default Footer;