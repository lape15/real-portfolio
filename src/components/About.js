import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
const About = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  console.log(theme);
  return (
    <div
      name="about"
      className="about"
      style={{ background: theme.bg, color: theme.ui }}
    >
      <div className="profile-img">
        <h1> hollalalalalala</h1>
      </div>
      <div className="profile-details">
        {" "}
        <h2>Talelelellelellelelele</h2>
        <p>This is all you need to know baout me s0 chill</p>
      </div>
    </div>
  );
};

export default About;
