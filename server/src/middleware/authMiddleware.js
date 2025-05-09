const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      if (!req.user) {
        return res.status(401).json({ message: "Tài khoản không tồn tại!" });
      }
      next();
    } catch (error) {
      res.status(401).json({ message: "Không có quyền truy cập!" });
    }
  } else {
    res.status(401).json({ message: "Không có token, không thể truy cập!" });
  }
};

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (
      !req.user ||
      (!roles.includes(req.user.role) && req.user.role !== "admin")
    ) {
      return res.status(403).json({ message: "Không có quyền truy cập!" });
    }
    next();
  };
};
