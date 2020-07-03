import React from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Media from "./components/Media/Media";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/media">Media</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path="/about" />
        <Route component={Media} path="/media" />
        <Route component={Contact} path="/contact" />
      </Switch>
    </div>
  );
}

export default App;
