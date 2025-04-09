const Review = require("../models/Review");
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review)
      return res.status(404).json({ message: "Không tìm thấy đánh giá!" });
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createReview = async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review)
      return res.status(404).json({ message: "Không tìm thấy đánh giá!" });
    if (
      review.renter.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res
        .status(403)
        .json({ message: "Bạn không có quyền sửa đánh giá này!" });
    }
    const updated = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review)
      return res.status(404).json({ message: "Không tìm thấy đánh giá!" });
    if (
      review.renter.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res
        .status(403)
        .json({ message: "Bạn không có quyền xóa đánh giá này!" });
    }
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Xóa thành công!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
