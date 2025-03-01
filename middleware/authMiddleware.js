const jwt = require("jsonwebtoken");

// Middleware function to authenticate user
const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization"); // Get token from request header

    if (!token) {
        return res.status(401).json({ message: "Access Denied! No token provided." });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET); // Use environment variable
        req.user = verified; // Attach user data to the request
        next(); // Proceed to the next middleware
    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

module.exports = authMiddleware;
