const express = require("express");
const {
  getRentals,
  getRentalById,
  createRental,
  updateRental,
  deleteRental,
} = require("../controllers/rentalController");

const { protect, authorize } = require("../middleware/authMiddleWare");

const router = express.Router();

// Ai cũng có thể xem nếu đã đăng nhập
router.get("/", protect, getRentals);
router.get("/:id", protect, getRentalById);

// Chỉ người thuê xe mới được tạo đơn
router.post("/", protect, authorize("renter"), createRental);

// Cập nhật/xoá đơn thuê — tuỳ logic bạn có thể giới hạn cho người tạo đơn
router.put("/:id", protect, authorize("renter"), updateRental);
router.delete("/:id", protect, authorize("renter"), deleteRental);

module.exports = router;
