import React from "react";
import Product from "./Product";
import wifi_icon from "./img/wifi-icon.png";
import wifiber from "./img/mawingu-wifiber-icon.png";
import corp from "./img/corp-internet-icon.png";
import internet from "./img/value-adds-icon.png";
import savannah from "./img/smart-savannah.jpg"


const HomePage = () => {
  return (
    <React.Fragment>
      <section className="container pt-4 pb-4">
        <h4 class="text-center font-weight-bold text-warning underline">
          Our Products & Services
        </h4>
        <div className="col-md-12">
          <div className="d-flex flex-wrap align-items-start mt-3 pt-4">
            <Product
              heading="HotSpot WiFi"
              image={require("./img/wifi-icon.png")}
              paragraph="Public WiFi hotspots offering affordable bundles across the network"
            />
            <Product 
            heading="Home & Small Business WiFi" 
            image={require("./img/mawingu-wifiber-icon.png")}
            paragraph="Secure broadband internet to homes and businesses"

            />
            <Product heading="Enterprise Internet" 
            image={require("./img/corp-internet-icon.png")}
            paragraph="Bespoke internet solutions for corporate customers"/>
          </div>
          <div class="d-flex flex-wrap align-items-start mt-3 pt-4 justify-content-center">
            <Product heading="Value Add Service"
            image={require("./img/value-adds-icon.png")}
            paragraph="Managed and extended WiFi, firewalls, security and cloud services" />
            <Product 
            heading="Smart Savannah" 
            image={require("./img/smart-savannah-icon.png")}
            paragraph="Digital products and IoT solutions for non-metropolitan Africa"/>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
