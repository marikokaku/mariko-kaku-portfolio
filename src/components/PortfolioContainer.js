import React, { useState } from "react";

import Nav from "./Nav";
import Footer from "./Footer";

import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

export default function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {

        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <div>
                {/* We are passing the currentPage from state and the function to update it */}
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
            {/* Here we are calling the renderPage method which will return a component  */}
            <div>
                {renderPage()}
            </div>
            
                <Footer></Footer>
            
        </div>
    );
};
