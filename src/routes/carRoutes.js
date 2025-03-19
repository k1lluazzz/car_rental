const express = require("express");
const { getCars, createCar } = require("../controllers/carController");

const router = express.Router();
router.get("/", getCars);
router.post("/", createCar);

module.exports = router;
