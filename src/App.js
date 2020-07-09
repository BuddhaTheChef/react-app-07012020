import React from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Media from "./components/Media/Media";
import Contact from "./components/Contact/Contact";
import Gallery1 from "./components/Gallery1/Gallery1";
import Gallery2 from "./components/Gallery2/Gallery2";

function App() {
  return (
    <div className="App">
      <div>
      <nav role="navigation" className="nav-bar">
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
    <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/gallery-one" className="nav-item">Gallery1</Link>
        <Link to="/gallery-two" className="nav-item">Gallery2</Link>
        <Link to="/media" className="nav-item">Media</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
    </ul>
  </div>
</nav>
     
      </div>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path="/about" />
        <Route component={Gallery1} path="/gallery-one" />
        <Route component={Gallery2} path="/gallery-two" />
        <Route component={Media} path="/media" />
        <Route component={Contact} path="/contact" />
      </Switch>
    </div>
  );
}

export default App;
