const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");
const { protect } = require("../middleware/authMiddleWare");
const { authorize } = require("../middleware/authMiddleWare");


router.get("/", carController.getCars);
router.get("/:id", carController.getCarById);
router.post("/", protect, authorize("owner"), carController.createCar);
router.put("/:id", protect, authorize("owner"), carController.updateCar);
router.delete("/:id", protect, authorize("owner"), carController.deleteCar);

module.exports = router;
