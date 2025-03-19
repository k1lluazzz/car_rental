const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: { type: String, enum: ["renter", "owner"], required: true }, // khách thuê hoặc chủ xe
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
