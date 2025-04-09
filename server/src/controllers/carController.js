const Car = require("../models/Car");

// Lấy tất cả xe
exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi lấy danh sách xe", error: error.message });
    }
};

// Lấy chi tiết xe theo ID
exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) return res.status(404).json({ message: "Không tìm thấy xe" });
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi lấy chi tiết xe", error: error.message });
    }
};

// Tạo xe mới
exports.createCar = async (req, res) => {
    try {
        const newCar = new Car(req.body);
        await newCar.save();
        res.status(201).json(newCar);
    } catch (error) {
        res.status(400).json({ message: "Tạo xe thất bại", error: error.message });
    }
};

// Cập nhật xe
exports.updateCar = async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCar) return res.status(404).json({ message: "Không tìm thấy xe để cập nhật" });
        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(400).json({ message: "Cập nhật xe thất bại", error: error.message });
    }
};

// Xoá xe
exports.deleteCar = async (req, res) => {
    try {
        const deletedCar = await Car.findByIdAndDelete(req.params.id);
        if (!deletedCar) return res.status(404).json({ message: "Không tìm thấy xe để xoá" });
        res.status(200).json({ message: "Xoá xe thành công" });
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi xoá xe", error: error.message });
    }
};
