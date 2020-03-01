/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
// import { Link, Events, animateScroll as scroll } from "react-scroll";

import { ThemeContext } from "../context/themeContext";
import ThemeToggle from "./ThemeToggle";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }
  static contextType = ThemeContext;

  handleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };
  render() {
    const { isMenuOpen } = this.state;
    console.log(this.state);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav className="header" style={{ background: theme.bg, color: theme.ui }}>
        <ul className="name">
          <li>
            <Link className="link" style={{ color: theme.ui }} to="/">
              A.A
            </Link>
          </li>
        </ul>

        <ul className={`others hidden ${isMenuOpen ? "show" : "hide"}`}>
          <li>
            <Link className="link" style={{ color: theme.ui }} to="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/" className="link" style={{ color: theme.ui }}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link className="link" style={{ color: theme.ui }} to="/contact">
              CONTACT
            </Link>
          </li>
          <li>
            <a className="link" href="https://github.com/lape15">
              <i class="fab fa-github" style={{ color: theme.ui }}></i>
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://https://www.linkedin.com/in/alarape-akintan-a80188188/"
            >
              <i class="fab fa-linkedin" style={{ color: theme.ui }}></i>
            </a>
          </li>
        </ul>

        <ul className="nav-toggler" onClick={this.handleMenu}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="18"
              style={{ fill: theme.ui }}
            >
              <g style={{ fill: theme.ui }} fill-rule="evenodd">
                <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
              </g>
            </svg>
          </li>
        </ul>

        <ul className="theme-toggle">
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
