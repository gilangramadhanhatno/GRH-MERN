const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const bookingSchema = new mongoose.Schema({
  bookingSelectDate: {
    type: Date,
    required: true,
  },
  name: {
    type: Number,
    required: true,
  },
  itemId: [
    {
      _id: {
        type: ObjectId,
        ref: "Item",
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  memberId: [
    {
      type: ObjectId,
      ref: "Member",
    },
  ],
  bankId: [
    {
      type: ObjectId,
      ref: "Bank",
    },
  ],
  proofPayment: {
    type: String,
    ref: true,
  },
  bankFrom: {
    type: String,
    ref: true,
  },
  accountHolder: {
    type: String,
    ref: true,
  },
  status: {
    type: String,
    ref: true,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
