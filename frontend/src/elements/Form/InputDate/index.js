import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "./index.scss";
import "react-datepicker/dist/react-datepicker.css";

import iconCalendar from "assets/images/icons/icon-calendar.svg";

export default function InputDate(props) {
  const [selectDate, setSelectDate] = useState(new Date());
  //   const [selectDate, setSelectDate] = useState(null);
  return (
    <div className="input-group">
      <div className="input-group-prepend bg-gray-900">
        <span className="input-group-text">
          <img src={iconCalendar} alt="icon calendar" className="input-group-text" />
        </span>
      </div>
      <div className="">
        <DatePicker className=" form-control text-center" selected={selectDate} onChange={(date) => setSelectDate(date)} dateFormat="dd/MM/yyyy" minDate={new Date()} />
      </div>
    </div>
  );
}
