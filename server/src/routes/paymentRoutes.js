const express = require("express");
const {
  getPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
} = require("../controllers/paymentController");

const { protect, authorize } = require("../middleware/authMiddleWare");

const router = express.Router();

router.get("/", protect, getPayments);
router.get("/:id", protect, getPaymentById);
router.post("/", protect, authorize("renter"), createPayment);
router.put("/:id", protect, authorize("renter"), updatePayment);
router.delete("/:id", protect, authorize("renter"), deletePayment);

module.exports = router;
