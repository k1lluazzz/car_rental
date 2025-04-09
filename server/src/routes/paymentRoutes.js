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

router.get("/", protect, authorize("admin"), getPayments);
router.get("/:id", protect, authorize("admin"), getPaymentById);
router.post("/", protect, authorize("renter", "admin"), createPayment);
router.put("/:id", protect, authorize("admin"), updatePayment);
router.delete("/:id", protect, authorize("admin"), deletePayment);
module.exports = router;
