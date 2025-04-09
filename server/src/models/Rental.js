const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  renter: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Người thuê
  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true }, // Xe thuê
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Rental", rentalSchema);
