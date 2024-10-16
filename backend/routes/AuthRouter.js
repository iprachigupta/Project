const { signupValidation , loginValidation} = require("../middlewares/AuthValidation");
const {signup, login, refreshToken, logout} = require("../controllers/Auth")

const router = require("express").Router();

//routes
router.post("/login", loginValidation, login)
router.post("/signup", signupValidation, signup)
router.post("/refresh-token", refreshToken);
router.post("/logout", logout);

module.exports = router;
