const express = require("express");
const router = express.Router();
const { getDashboardStats } = require("../controllers/adminController");
const { protect, authorize } = require("../middleware/authMiddleWare");

// Chỉ admin mới được truy cập dashboard
router.get("/dashboard", protect, authorize("admin"), getDashboardStats);

module.exports = router;
