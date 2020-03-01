import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    light: {
      syntax: "black",
      ui: "black",
      bg: "#fff"
    },
    dark: {
      syntax: "#ddd",
      ui: "#fff ",
      bg: "hsl(233, 12%, 13%)"
    }
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    // const { state } = this.state;
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
