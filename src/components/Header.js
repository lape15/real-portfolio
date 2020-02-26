/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <span className="name">
        <Link to="/">Lape</Link>
      </span>
      <span className="others">
        <Link>About</Link>
      </span>
      <span className="others">
        <Link>Project</Link>
      </span>
      <span className="others">
        <Link to="/contact">Contact</Link>
      </span>
    </nav>
  );
};

export default Header;
