import React from 'react';
import facebook from "./img/facebook-link.svg";

const Footer = () => {
  return (
    <section className="bg-white d-flex flex-wrap pt-4 pb-4 align-items-end">
      <div className="col-md-3 d-flex justify-content-center">
      <a class="navbar-brand nav-link ml-n3" href="index.html"><img src="assets/img/mawingu-logo.png" height="50"
                    alt="Brand
                        Logo" /></a>
            <div class="d-flex flex-column">
                <p> Connect with us on:</p>
                <div class="d-flex justify-content-between">
                    <a class="" href="https://www.facebook.com/mawingunetworksltd"><img
                            src="assets/img/facebook-link.svg" height="30" alt="facebook" /></a>
                    <a class="" href="https://twitter.com/MawinguNetworks"><img src="assets/img/twitter-link.svg"
                            height="30" alt="twitter" /></a>
                    <a class="" href="https://www.instagram.com/mawingunetworks"><img
                            src="assets/img/instagram-link.svg" height="30" alt="instagram" /></a>
                </div>
            </div>
            </div>
            <div class="col-md-6 mt-4">
            <div class="d-flex flex-wrap justify-content-center">
                <a class="nav-item nav-link active" href="index.html">Home</a>
                <a class="nav-item nav-link" href="our-story.html">Our Story</a>
                <a class="nav-item nav-link" href="hotspot-wifi.html">Hotspot
                    WiFi</a>
                <a class="nav-item nav-link" href="mawingu-wifiber.html">Home & Biz</a>
                <a class="nav-item nav-link" href="corp-internet.html">Enterprise
                    Internet</a>
                <a class="nav-item nav-link" href="value-adds.html">Value
                    Add Services</a>
                <a class="nav-item nav-link" href="smart-savannah.html">Smart
                    Savannah</a>
                <a class="nav-item nav-link" href="contact.html">Contact Us</a>
                <a class="nav-item nav-link" href="get-connected.html">Get
                    Connected</a>
                <a class="nav-item nav-link" href="faq.html">FAQ</a>
            </div>
        </div>
        
      
    </section>
   );
}

export default Footer;
