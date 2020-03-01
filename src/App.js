import React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Header from "./components/Header";
import "./scss/main.scss";
import About from "./components/About";

import { Switch, BrowserRouter, Route } from "react-router-dom";
import ThemeContextProvider from "./context/themeContext";
// import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
