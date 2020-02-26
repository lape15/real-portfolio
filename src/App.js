import React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Header from "./components/Header";
import "./scss/main.scss";

import { Switch, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
