import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import '../Gallery1/Gallery.css'
import Pic1 from "../../assets/newTech2.jpg"

export default class Media extends Component {
    render() {
        return (
            <div>
                <h1 className="main-header">Media</h1>
          <div className="main-div">
            
            <div className="top-row-m">
            <div id="content1" className="content-m">
            </div>
            <div className="content-m">
            <div id="content1" className="content-m">
            </div>
            <div className="content-m">
            <div id="content1" className="content-m"></div>
            </div>
          </div>

          <div className="top-row-m">
            <div className="content-m">
            <div id="content1" className="content-m"></div>
            </div>
            <div className="content-m">
            <div id="content1" className="content-m"></div>
            </div>
            <div className="content-m">
            <div id="content1" className="content-m"></div>
            </div>
          </div>


   

            <div className="top-row-m">
            <div className="content-m">
                7
            </div>
            <div className="content-m">
                8
            </div>
            <div className="content-m">
                9
            </div>
          </div>

          </div>
        
                <Footer/>
            </div>
        )
    }
}
