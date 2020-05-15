/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

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
    // console.log(this.state);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav className="header" style={{ background: theme.bg, color: theme.ui }}>
        <ul className="name">
          <li>
            <NavLink className="link" to="/home">
              A.A
            </NavLink>
          </li>
        </ul>

        <ul className={`others hidden ${isMenuOpen ? "show" : "hide"}`}>
          <li>
            <NavLink className="link" style={{ color: theme.ui }} to="/about">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="link"
              style={{ color: theme.ui }}
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink className="link" style={{ color: theme.ui }} to="/contact">
              CONTACT
            </NavLink>
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
