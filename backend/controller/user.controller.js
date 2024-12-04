import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateAccessToken from "../config/generateAccessToken.js";

// User registration
export const userRegisterController = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if all fields are available
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if email already exists
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    const newUser = await user.save();

    // Generate token
    generateAccessToken(res, newUser);

    return res.status(200).json({
      success: true,
      message: "Registration Successful",
      username: newUser.username,
    });
  } catch (error) {
    console.error("Registration error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


//login