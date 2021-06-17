const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: Number,
    required: true,
  },
  imageId: [
    {
      type: ObjectId,
      ref: "Image",
    },
  ],
});

module.exports = mongoose.model("Item", itemSchema);
