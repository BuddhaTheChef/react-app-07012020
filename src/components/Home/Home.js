import React, { Component } from "react";
import Video1 from "../../assets/sewing-vid.mp4"
import logo from "../../logo.svg";
import "../../App.css";
import Footer from "../Footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
          <div id="wrap_video">

<div id="video_box">
    <div id="video_overlays">
        <div>
            <h1 className="title">Sellers Market</h1>
        </div>
    </div>
    <div style={{overflow:'hidden'}}>
        <video id="player" autoPlay muted loop src={Video1} type="video/mp4">Your browser does not support this streaming content.</video>
    </div>
</div>
    
</div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Yo Duder!</h1>
        </header>
        <Footer/>
      </div>
    );
  }
}
