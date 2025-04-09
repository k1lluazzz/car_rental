const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
  renter: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema);
