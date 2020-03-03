import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
const About = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  // console.log(theme);
  return (
    <div
      name="about"
      className="about"
      style={{ background: theme.bg, color: theme.ui }}
    >
      <div className="profile-img">
        <p>Getting to know me feels great</p>
      </div>
      <div className="profile-details">
        {" "}
        <h2>About me</h2>
        <p>I am Akintan Alarape</p>
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
        </ul>
      </div>
    </div>
  );
};

export default About;
