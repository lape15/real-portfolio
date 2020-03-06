import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import landing from "../assets/landing.png";

const Project = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div style={{ background: theme.bg }} className="projects">
      <h1 style={{ color: theme.ui }}>Holla</h1>

      <div className="project-one">
        <img src={landing} alt="hi" />
        <div className="project-one details">
          <p>Holaaaa</p>
          <p>Leooooo</p>
          <p>Looon</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Project;
