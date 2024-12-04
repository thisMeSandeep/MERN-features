import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    // Check if the token exists
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Access denied",
      });
    }
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.status(400).json({
      success: false,
      message: "Invalid token.",
    });
  }
};

export default auth;

