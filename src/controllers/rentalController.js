const Rental = require("../models/Rental");

exports.createRental = async (req, res) => {
    try {
        const newRental = new Rental(req.body);
        await newRental.save();
        res.status(201).json(newRental);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRentals = async (req, res) => {
    try {
        const rentals = await Rental.find();
        res.json(rentals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRentalById = async (req, res) => {
    try {
        const rental = await Rental.findById(req.params.id);
        if (!rental) return res.status(404).json({ message: "Rental not found" });
        res.json(rental);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRental = async (req, res) => {
    try {
        const updatedRental = await Rental.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedRental);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteRental = async (req, res) => {
    try {
        await Rental.findByIdAndDelete(req.params.id);
        res.json({ message: "Rental deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
