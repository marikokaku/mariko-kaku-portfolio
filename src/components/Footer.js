import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer-div text-center">
            <ul>
                <li>
                    <a href="https://github.com/marikokaku" target="_blank" rel="noopener noreferrer">
                        <button>
                            <FaGithub />
                        </button>
                    </a>
                    <a href="www.linkedin.com/in/marikokaku" target="_blank" rel="noopener noreferrer">
                        <button>
                            <FaLinkedin />
                        </button>
                    </a>
                </li>
            </ul>
            <p className='footer-text'>&copy; Mariko Kaku All Rights Reserved</p>
        </div>

    );
}

export default Footer;