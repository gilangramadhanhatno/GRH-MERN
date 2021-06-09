import React, { Component } from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedDetails from "parts/FeaturedDetails";
import BookingForm from "parts/BookingForm";
import Footer from "parts/Footer";

import ItemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Details", pageHref: "" },
    ];

    return (
      <>
        <Header isCentered {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} />
        <section className="container">
          <div className="row">
            <div className="col-7">
              <FeaturedDetails data={ItemDetails} />
            </div>
            <div className="col">
              <BookingForm itemDetails={ItemDetails} />
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
