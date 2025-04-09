const Rental = require("../models/Rental");

exports.getRentals = async (req, res) => {
  const rentals = await Rental.find();
  res.json(rentals);
};

exports.getRentalById = async (req, res) => {
  try {
    const rental = await Rental.findById(req.params.id);
    if (!rental) return res.status(404).json({ message: "Không tìm thấy đơn thuê xe!" });
    res.json(rental);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createRental = async (req, res) => {
  try {
    const newRental = new Rental(req.body);
    await newRental.save();
    res.status(201).json(newRental);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateRental = async (req, res) => {
  try {
    const updated = await Rental.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Không tìm thấy đơn thuê xe!" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteRental = async (req, res) => {
  try {
    const deleted = await Rental.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Không tìm thấy đơn thuê xe!" });
    res.json({ message: "Xóa thành công!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
