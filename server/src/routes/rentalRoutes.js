const express = require("express");
const {
  getRentals,
  getRentalById,
  createRental,
  updateRental,
  deleteRental,
} = require("../controllers/rentalController");

const router = express.Router();

router.get("/", getRentals);
router.get("/:id", getRentalById);
router.post("/", createRental);
router.put("/:id", updateRental);
router.delete("/:id", deleteRental);

module.exports = router;
