import React, { Component } from "react";

import logo from "../../logo.svg";
import "../../App.css";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Yo Duder!</h1>
        </header>
      </div>
    );
  }
}
