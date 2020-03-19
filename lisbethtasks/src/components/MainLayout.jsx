import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  NavBar,HomePage, Footer } from "./common";


class MainLayout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section className="hero-section">
          <div className="col-md-12">
            <NavBar />
          </div>
          <div
            className="col-md-12 d-flex justify-content-center text-white
                text-center pt14"
          >
            <h1 id="hero-text"></h1>
          </div>
        </section>
        <HomePage />
        <Footer/>

        {/* <CustomerPage/>
                    <br/>
                <Footer/> */}
      </React.Fragment>
    );
  }
}

export default MainLayout;
