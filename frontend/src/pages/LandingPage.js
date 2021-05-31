import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import BestSeller from "parts/BestSeller";

import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <BestSeller data={landingPage.bestSeller} />
      </>
    );
  }
}
