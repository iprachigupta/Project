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
        .json({ message: "User already exist.", success: false });
    }

    const userModel = new UserModel({ name, email, password });

    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();

    // Generate Access and Refresh Tokens
    const accessToken = jwt.sign(
      { id: userModel._id, email: userModel.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5m" }
    );

    const refreshToken = jwt.sign(
      { id: userModel._id, email: userModel.email },
      process.env.JWT_REFRESH_SECRET_KEY,
      { expiresIn: "7d" }
    );

    // Set refresh token in cookie (httpOnly)
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 5 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ 
      message: "Signup Successful.", 
      success: true,
      accessToken,
      email,
      user: user.name,
      redirectUrl: "/dashboard" });
  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "SERVER ERROR !!", success: false });

  }
};



const login = async (req, res) => {
  try {
    console.log(req.headers);
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res
        .status(403)
        .json({ message: "User do not exist.", success: false });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password); //entrd and db password compa
    
    if (!isPasswordMatch) {
      return res
        .status(403)
        .json({ message: "Password Incorrect. Please enter the correct password.", success: false });
    }

    // Generate Access and Refresh Tokens
    const accessToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "5m" }
    );
    const refreshToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_REFRESH_SECRET_KEY,
      { expiresIn: "7d" }
    );

    // Set refresh token in cookie (httpOnly)
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 5 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    
    res
      .status(200)
      .json({
        message: "Login Successful.",
        success: true,
        accessToken,
        email,
        user: user.name,
        redirectUrl: "/dashboard"
      });
  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "SERVER ERROR !!", success: false });
  }
};



// Refresh Token Route
const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return res.status(403).json({ message: "Refresh Token Not Found.", success: false });
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid Refresh Token.", success: false });
      }

      // Generate new Access Token
      const newAccessToken = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "5m" }
      );

      res.status(200).json({ accessToken: newAccessToken });
    });
  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "SERVER ERROR!!", success: false });
  }
};



// Logout to Clear Cookies
const logout = (req, res) => {
  // console.log(req.headers)
  res.clearCookie("accessToken", {
    path: '/'
  });
  res.status(200).json({ message: "Logout successful.", success: true });
};



module.exports = { signup, login, refreshToken, logout };
