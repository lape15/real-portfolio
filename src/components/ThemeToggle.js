import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { ReactComponent as Logo } from "../assets/light.svg";
const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <Logo onClick={toggleTheme} className="light" style={{ fill: theme.ui }} />
  );
};

export default ThemeToggle;
