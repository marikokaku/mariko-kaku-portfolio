import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <ul className="nav navbar-left">
        <li>
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              style={{ textDecoration: 'none' }}
            >
              mariko kaku 
            </a>
          </li>
        </ul>

        <ul className="nav navbar-right">
          <li>
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
          <li>
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
          <li>
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
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
