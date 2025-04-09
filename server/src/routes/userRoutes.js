const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
} = require("../controllers/userController");

const { protect, authorize } = require("../middleware/authMiddleWare");

const router = express.Router();

router.get("/", protect, authorize("admin"), getUsers); // Chỉ admin mới xem được danh sách user
router.post("/", protect, authorize("admin"), createUser); // Tạo user qua admin

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/:id", protect, getUserById);
router.put("/:id", protect, updateUser);
router.delete("/:id", protect, deleteUser);

module.exports = router;
