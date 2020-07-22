import React, { Component } from "react";
import "./Gallery.css";
import Footer from "../Footer/Footer";

export default class Gallery1 extends Component {
  render() {
    return (
      <div>
          <h1 className="header">Gallery 1</h1>
          <div className="main-div">

            <div className="top-row">
            <div className="content">
                1
            </div>
            <div className="content">
                2
            </div>
            <div className="content">
                3
            </div>
          </div>

          <div className="second-row">
            <div className="content-2">
                4
            </div>
            <div className="content-2">
                5
            </div>
          </div>

          <div className="third-row">
              <div className="content-3">
                  7
              </div>
        
            </div>

            <div className="top-row">
            <div className="content">
                7
            </div>
            <div className="content">
                8
            </div>
            <div className="content">
                9
            </div>
          </div>

          </div>
          <Footer/>
      </div>
    );
  }
}
