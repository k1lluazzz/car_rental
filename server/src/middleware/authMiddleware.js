const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware bảo vệ: chỉ cho người dùng có token truy cập
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
      console.error("Lỗi xác thực:", error.message);
      res.status(401).json({ message: "Không có quyền truy cập!" });
    }
  } else {
    res.status(401).json({ message: "Không có token, không thể truy cập!" });
  }
};

// Middleware kiểm tra vai trò (renter, owner, admin, ...)
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Không có quyền truy cập!" });
    }
    next();
  };
};
