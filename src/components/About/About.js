import React, { Component } from "react";
import Footer from "../Footer/Footer";
import logo from "../../logo.svg";
import "../../App.css";

export default class About extends Component {

  render() {

    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>About</h1>
        </header>
        <Footer/>
      </div>
    );
  }
}
