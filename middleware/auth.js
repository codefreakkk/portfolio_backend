const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // make sure token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      data: "Not authorized to access this route",
    });
  }

  try {
    // Verify token
    const verify = jwt.verify(token, "devsinfo");

    req.user = await User.findById(verify._id);

    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      data: "Not authorized to access this route",
    });
  }
};

module.exports = protect;
