const bcrypt = require("bcryptjs");
const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "User Already Exists", success: false });
    }
    const userModel = new UserModel({ name, email, password });

    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    res.status(201).json({ message: "Signup Success!!", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error...", success: false });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(403)
        .json({ message: "User Do Not Exist", success: false });
    }

    const isPasswordEqual = await bcrypt.compare(password, user.password); //entrd and db password compa
    if (!isPasswordEqual) {
      return res
        .status(403)
        .json({ message: "Password Incorrect", success: false });
    }

    const jwtToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );
    res
      .status(200)
      .json({
        message: "Login Success!!",
        success: true,
        jwtToken,
        email,
        user: user.name,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error...", success: false });
  }
};

module.exports = { signup, login };
