const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  rental: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rental",
    required: true,
  }, // Đơn thuê xe
  renter: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  paymentMethod: {
    type: String,
    enum: ["credit_card", "bank_transfer"],
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Payment", paymentSchema);
