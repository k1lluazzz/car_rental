const User = require("../models/User");
const Car = require("../models/Car");
const Rental = require("../models/Rental");
const Payment = require("../models/Payment");

exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCars = await Car.countDocuments();
    const totalRentals = await Rental.countDocuments();
    const totalPayments = await Payment.aggregate([
      { $match: { status: "completed" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    res.json({
      totalUsers,
      totalCars,
      totalRentals,
      totalRevenue: totalPayments[0]?.total || 0,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
