const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");
const { protect, authorize } = require("../middleware/authMiddleWare");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/", carController.getCars);
router.get("/:id", carController.getCarById);
router.post("/", protect, authorize("owner", "admin"), upload.single("image"), carController.createCar);
router.put(
  "/:id",
  protect,
  authorize("owner", "admin"),
  carController.updateCar
);
router.delete(
  "/:id",
  protect,
  authorize("owner", "admin"),
  carController.deleteCar
);
module.exports = router;
