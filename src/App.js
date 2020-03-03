import React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Header from "./components/Header";
import "./scss/main.scss";
import About from "./components/About";

import { Switch, BrowserRouter, Route } from "react-router-dom";
import ThemeContextProvider from "./context/themeContext";
// import ThemeToggle from "./components/ThemeToggle";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BrowserRouter>
          <Header />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  timeout={4500}
                  classNames="fade"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </BrowserRouter>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
