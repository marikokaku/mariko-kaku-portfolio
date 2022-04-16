import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className='nav'>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          style={{ textDecoration: 'none' }}
        >
          portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          style={{ textDecoration: 'none' }}
        >
          resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          style={{ textDecoration: 'none' }}
        >
          contact
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={{ textDecoration: 'none' }}
        >
          mk
        </a>
      </li>
      <li className="nav-item">
        <a
          className="btn"
          href="https://github.com/marikokaku"
        >
          <FaGithub />
        </a>

      </li>
      <li className="nav-item">
        <a
          className="btn"
          href="www.linkedin.com/in/marikokaku"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </li>
    </ul>
  );
}

export default Nav;
