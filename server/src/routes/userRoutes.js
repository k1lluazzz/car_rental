const express = require("express");
const { getUsers, createUser } = require("../controllers/userController");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();


router.get("/", getUsers);
router.post("/", createUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
module.exports = router;
