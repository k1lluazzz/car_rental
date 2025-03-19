const express = require("express");
const {
  createRental,
  getRentals,
  getRentalById,
  updateRental,
  deleteRental,
} = require("../controllers/rentalController");
const router = express.Router();

router.post("/", createRental);
router.get("/", getRentals);
router.get("/:id", getRentalById);
router.put("/:id", updateRental);
router.delete("/:id", deleteRental);

module.exports = router;
