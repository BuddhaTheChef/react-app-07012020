import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default class Footer extends Component {
    render() {
        return (
            <div>
   <footer class="footer-distributed">

<div class="footer-left">

    <h3>Sellers<span>Market</span></h3>

    <p class="footer-links">
    
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery-one">Gallery1</Link>
        <Link to="/gallery-two">Gallery2</Link>
        <Link to="/media">Media</Link>
        <Link to="/contact">Contact</Link>
    </p>

    <p class="footer-company-name">Sellers Market © 2020</p>
</div>

<div class="footer-center">

    <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Fake Place 22 Ave</span> Honolulu, Hawaii</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+1.555.555.5555</p>
    </div>

    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">support@company.com</a></p>
    </div>

</div>

<div class="footer-right">

    <p class="footer-company-about">
        <span>About the company</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

    <div class="footer-icons">

        <a href="#"><FaFacebookSquare /></a>
        <a href="#"><FaTwitterSquare/></a>
        <a href="#"><FaGoogle/></a>
        <a href="#"><FaInstagram/></a>

    </div>

</div>

</footer>
            </div>
        )
    }
}
