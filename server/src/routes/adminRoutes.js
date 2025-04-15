const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleWare");
const {
  getDashboardStats,
  getAllUsers,
  updateUserRole,
} = require("../controllers/adminController");

router.use(protect, authorize("admin"));

router.get("/stats", getDashboardStats);
router.get("/users", getAllUsers);
router.put("/user/:id", updateUserRole);

module.exports = router;