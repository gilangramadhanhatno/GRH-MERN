import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";
import Stepper, { Numbering, Meta, MainContent, Controller } from "elements/Stepper";
import Button from "elements/Button";

import BookingInformation from "parts/Checkout/BookingInformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";

import ItemDetails from "json/itemDetails.json";

class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "SetiawanStore | Checkout";
  }

  render() {
    const { data } = this.state;
    const { checkout } = this.props;

    if (!checkout)
      return (
        <div className="container">
          <div className="row align-items-center justify-content-center text-center" style={{ height: "100vh" }}>
            <div className="col-3">
              Pilih Kamar Dulu
              <div>
                <Button className="btn mt-5" type="link" href="/" isPrimary>
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      );

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: <BookingInformation data={data} checkout={checkout} ItemDetails={ItemDetails} onChange={this.onChange} />,
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: <Payment data={data} checkout={checkout} ItemDetails={ItemDetails} onChange={this.onChange} />,
      },
      completed: {
        title: "Yeay, Completed",
        description: null,
        content: <Completed />,
      },
    };
    return (
      <>
        <Header isCentered />
        <Stepper steps={steps} initialStep="bookingInformation">
          {(prevStep, nextStep, CurrentStep, steps) => {
            return (
              <>
                <Numbering data={steps} current={CurrentStep} style={{ marginBottom: 50 }} />

                <Meta data={steps} current={CurrentStep} />

                <MainContent data={steps} current={CurrentStep} />

                {CurrentStep === "bookingInformation" && (
                  <Controller>
                    {data.firstName !== "" && data.lastName !== "" && data.email !== "" && data.phone !== "" && (
                      <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                        Continue to Book
                      </Button>
                    )}
                    <Button className="btn" type="link" isBlock isLight href={`/details/${ItemDetails._id}`}>
                      Cancel
                    </Button>
                  </Controller>
                )}

                {CurrentStep === "payment" && (
                  <Controller>
                    {data.proofPayment !== "" && data.bankName !== "" && data.bankHolder !== "" && (
                      <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                        Continue to Book
                      </Button>
                    )}
                    <Button className="btn" type="button" isBlock isLight onClick={prevStep}>
                      Cancel
                    </Button>
                  </Controller>
                )}

                {CurrentStep === "completed" && (
                  <Controller>
                    <Button className="btn" type="link" isBlock isPrimary hasShadow href="">
                      Back to Home
                    </Button>
                  </Controller>
                )}
              </>
            );
          }}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page,
});

export default connect(mapStateToProps)(Checkout);
