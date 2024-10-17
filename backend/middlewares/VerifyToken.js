const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;

    if (!token) {
        return res.status(403).json({ message: "Access Denied" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid Token" });
        }

        req.user = user;
        next();
    });
};

module.exports = verifyToken;
