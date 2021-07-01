import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Categories from "parts/Categories";
import Brands from "parts/Brands";
import Footer from "parts/Footer";

import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refProduct = React.createRef();
  }

  componentDidMount() {
    window.title = "GRH | Home";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero refProduct={this.refProduct} />
        <Categories refProduct={this.refProduct} data={landingPage.categories} />
        <Brands data={landingPage.brand} />
        <Footer />
      </>
    );
  }
}
