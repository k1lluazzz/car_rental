const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Chủ xe
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  pricePerDay: { type: Number, required: true }, // Giá thuê/ngày
  location: { type: String, required: true }, // Địa điểm xe
  status: { type: String, enum: ["available", "rented"], default: "available" }, // Trạng thái xe
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Car", carSchema);
