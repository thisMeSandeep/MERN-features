import jwt from "jsonwebtoken";

const generateAccessToken = (res, user) => {
  try {
    // JWT payload data
    const payload = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    // Setting cookie options
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, 
    };

    // Setting cookie
    res.cookie("token", token, cookieOptions);

  } catch (error) {
    console.error("Token generation failed:", error.message);
  }
};

export default generateAccessToken;
