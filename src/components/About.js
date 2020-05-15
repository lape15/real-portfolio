import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import Lape from "../assets/real.JPG";
const About = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  // console.log(theme);
  return (
    <div
      id="about"
      className="about"
      style={{ background: theme.bg, color: theme.ui }}
    >
      <div className="profile-img">
        <img src={Lape} alt="A frowning Lape" />
      </div>
      <div className="profile-details">
        {" "}
        <h2>LAPE</h2>
        {/*<p>I am Akintan Alarape</p>*/}
        <p>
          I am a Front-End Web Developer living in Lagos, Nigeria. <br /> I love
          to create elegant, clean and responsive UI's that translate into great
          User Experience.
        </p>
        <ul>
          <span>Skills</span>
          <li>HTML</li>
          <li>CSS/SCSS/BOOTSTRAP</li>
          <li>javaScript</li>
          <li>React</li>
          <li>TailwindCss</li>
          <li>
            <a
              href="https://gist.github.com/lape15/e573a348eb0fb413ea5f2c9ae3cbdf4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
