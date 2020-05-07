import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import landing from "../assets/landing.png";
import todoApp from "../assets/todoApp.png";

const Project = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div style={{ background: theme.bg }} className="projects">
      <div className="project-one">
        <img src={landing} alt="hi" />
        <div className="project-details">
          <p>Holaaaa</p>
          <p>Leooooo</p>
          <p>Looon</p>
        </div>
      </div>
      <div className="project-two">
        <img src={todoApp} alt="A basic todo" />
        <div className="project-details">
          <p>Holaaaa</p>
          <p>Leooooo</p>
          <p>Looon</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
