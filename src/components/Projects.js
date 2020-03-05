import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Project = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div style={{ background: theme.bg }} className="projects">
      <h1 style={{ color: theme.ui }}>Holla</h1>
    </div>
  );
};

export default Project;
