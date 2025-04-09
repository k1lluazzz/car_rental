const Payment = require("../models/Payment");

// Lấy tất cả thanh toán
exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy thông tin thanh toán theo ID
exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment)
      return res.status(404).json({ message: "Không tìm thấy thanh toán!" });
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tạo thanh toán mới
exports.createPayment = async (req, res) => {
  try {
    const newPayment = new Payment(req.body);
    await newPayment.save();
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật thanh toán
exports.updatePayment = async (req, res) => {
  try {
    const updated = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated)
      return res.status(404).json({ message: "Không tìm thấy thanh toán!" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa thanh toán
exports.deletePayment = async (req, res) => {
  try {
    const deleted = await Payment.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Không tìm thấy thanh toán!" });
    res.json({ message: "Xóa thành công!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
