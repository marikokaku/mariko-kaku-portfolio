import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom"

function Header() {

  return (
    <header className="flex-row px-1">
      <div className="logo">
        <h1>
        <Link to="/">Mariko Kaku</Link>
        </h1>
      </div>
      <Nav></Nav>
    </header>
  );
}

export default Header;
