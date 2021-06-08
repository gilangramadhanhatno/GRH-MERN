import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import propTypes from "prop-types";

import Button from "elements/Button/Button";
import InputNumber from "elements/Form/InputNumber/InputNumber";
import InputDate from "elements/Form/InputDate/InputDate";

import "assets/scss/style.scss";

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          selectDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      duration: data.duration,
      date: {
        selectDate: data.date.selectDate,
        endDate: data.date.endDate,
      },
    });
    this.props.history.push("/checkout");
  };

  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;

    return (
      <div className="form-booking card bordered" style={{ padding: "60px 80px" }}>
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="h2 price mb-4 font-weight-bold">
          ${itemDetails.price} <span className="font-weight-light">per Baju</span>
        </h5>

        <label htmlFor="date">Pilih Tanggal Janji</label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />

        <label htmlFor="duration" className="mt-2">
          Berapa Baju yang Anda ingin beli?
        </label>
        <InputNumber className="text-center" max={100000000000000} onChange={this.updateData} name="duration" value={data.duration} />

        <h6 className="" style={{ marginBottom: 10 }}>
          Yang Harus Kamu Bayar:
          <p>
            DP: ${itemDetails.price * data.duration * (50 / 100)} <span>USD</span>
          </p>
          <p>
            Bayar Full: ${itemDetails.price * data.duration} <span>USD</span>
          </p>
        </h6>

        <Button className="btn" onClick={startBooking}>
          Continue to Book
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default withRouter(BookingForm);
