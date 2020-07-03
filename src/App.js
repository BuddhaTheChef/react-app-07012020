import React from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path="/about" />
      </Switch>
    </div>
  );
}

export default App;
