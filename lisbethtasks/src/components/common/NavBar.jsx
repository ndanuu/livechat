import React from 'react';
import {mawingu} from './img/mawingu-logo.png';


const NavBar = () => {
    return ( 
        <React.Fragment>
             <nav className="navbar navbar-expand-lg nav-transparent">
                <a className="navbar-brand nav-link ml-n3" href="index.html"><img src={require('./img/mawingu-logo.png')} height="50" alt="Brand Logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto" id="main-nav">
                        <li className="nav-item active"> <a className="nav-link
                                    text-decoration-none text-reset" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link
                                    text-decoration-none text-reset" href="our-story.html">Our Story</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-decoration-none
                                    text-reset dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="hotspot-wifi.html">Hotspot WiFi</a>
                                <a className="dropdown-item" href="mawingu-wifiber.html">Home & Biz</a>
                                <a className="dropdown-item" href="corp-internet.html">Enterprise
                                    Internet</a>
                                <a className="dropdown-item" href="value-adds.html">Value Add
                                    Services</a>
                                <a className="dropdown-item" href="smart-savannah.html">Smart
                                    Savannah</a>
                            </div>
                        </li>
                        <li className="nav-item"><a className="nav-link
                                    text-decoration-none text-reset" href="contact.html">Contact Us</a></li>
                        <li className="nav-item"><a className="nav-link
                                    text-decoration-none text-reset" href="get-connected.html">Get Connected</a></li>
                        <li className="nav-item"><a className="nav-link
                                    text-decoration-none text-reset" href="faq.html">FAQ</a>
                        </li>
                    </div>
                </div>
            </nav>
        </React.Fragment>
     );
}
 
export default NavBar;