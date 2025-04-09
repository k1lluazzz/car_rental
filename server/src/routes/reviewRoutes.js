const express = require("express");
const {
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");
const { protect, authorize } = require("../middleware/authMiddleWare");
const router = express.Router();

router.get("/", getReviews);
router.get("/:id", getReviewById);
router.post("/", protect, authorize("renter", "admin"), createReview);
router.put("/:id", protect, authorize("renter", "admin"), updateReview);
router.delete("/:id", protect, authorize("renter", "admin"), deleteReview);
module.exports = router;