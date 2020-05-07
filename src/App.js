import React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Header from "./components/Header";
import "./scss/main.scss";
import About from "./components/About";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ThemeContextProvider from "./context/themeContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Project from "./components/Projects";

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
                  timeout={600}
                  classNames="fade"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path="/(|home)/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Project} />
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
