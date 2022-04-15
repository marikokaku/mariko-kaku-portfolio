import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
    <footer>
        <hr />
        <ul>
            <li>
                <a href="https://github.com/marikokaku" target="_blank" rel="noopener noreferrer">
                    <button>
                        <FaGithub />
                    </button>
                </a>
            </li>

            <li>
            <a href="www.linkedin.com/in/marikokaku" target="_blank" rel="noopener noreferrer">
                    <button>
                        <FaLinkedin />
                    </button>
                </a>
            </li>

        </ul>
    </footer>
    );
}

export default Footer;