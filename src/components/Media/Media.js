import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import '../Gallery1/Gallery.css'

export default class Media extends Component {
    render() {
        return (
            <div>
                <h1 className="main-header">Media</h1>
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
        )
    }
}
