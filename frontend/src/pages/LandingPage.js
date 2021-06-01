import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Product from "parts/Product";

import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <Product data={landingPage.product} />
      </>
    );
  }
}
