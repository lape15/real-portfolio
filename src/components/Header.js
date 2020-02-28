/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { Link } from "react-scroll";
import { Link, Events, animateScroll as scroll } from "react-scroll";

import { ThemeContext } from "../context/themContext";
import ThemeToggle from "./ThemeToggle";

class Header extends React.Component {
  static contextType = ThemeContext;

  componentDidMount() {
    Events.scrollEvent.register("begin");

    Events.scrollEvent.register("end");
  }

  scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav className="header" style={{ background: theme.bg, color: theme.ui }}>
        <span className="name">
          <Link
            className="link"
            style={{ color: theme.ui }}
            activeClass="active"
            onClick={() => scroll.scrollToTop()}
          >
            A.A
          </Link>
        </span>
        <span className="others">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="link"
            style={{ color: theme.ui }}
          >
            About
          </Link>

          <Link to="/" className="link" style={{ color: theme.ui }}>
            Projects
          </Link>

          <Link
            className="link"
            style={{ color: theme.ui }}
            to="contact"
            onClick={() => scroll.scrollToBottom()}
          >
            Contact
          </Link>
          <a className="link" href="https://github.com/lape15">
            <i class="fab fa-github" style={{ color: theme.ui }}></i>
          </a>
          <a
            className="link"
            href="https://https://www.linkedin.com/in/alarape-akintan-a80188188/"
          >
            <i class="fab fa-linkedin" style={{ color: theme.ui }}></i>
          </a>
          <ThemeToggle />
        </span>
      </nav>
    );
  }
}

export default Header;
