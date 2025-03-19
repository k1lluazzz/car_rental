const Car = require("../models/Car");

exports.getCars = async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
};

exports.createCar = async (req, res) => {
    const newCar = new Car(req.body);
    await newCar.save();
    res.json(newCar);
};
