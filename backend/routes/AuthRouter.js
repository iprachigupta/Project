const { signupValidation , loginValidation} = require("../middlewares/AuthValidation");
const {signup, login, refreshToken, logout} = require("../controllers/Auth");
const verifyToken = require("../middlewares/VerifyToken");

const router = require("express").Router();

//routes
router.post("/login", loginValidation, login)
router.post("/signup", signupValidation, signup)
router.post("/refresh-token", verifyToken, refreshToken);
router.post("/logout", logout);
router.get("/test",  (req, res) => {
    console.log("req.headers", req.headers);
    return res.send(req.headers);
});

module.exports = router;

