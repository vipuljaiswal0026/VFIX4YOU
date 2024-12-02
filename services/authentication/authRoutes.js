const express = require("express");
const router = express.Router();
const { registerUser, loginUser, googleAuth } = require("./authController");

// Routes for registering, logging in, and Google OAuth
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/google", googleAuth);

module.exports = router;
