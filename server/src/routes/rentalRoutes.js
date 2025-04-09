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

router.get("/", protect, authorize("admin"), getRentals);
router.get("/:id", protect, authorize("admin"), getRentalById);
router.post("/", protect, authorize("renter", "admin"), createRental);
router.put("/:id", protect, authorize("admin"), updateRental);
router.delete("/:id", protect, authorize("admin"), deleteRental);
module.exports = router;
