const jwt = require("jwt-simple");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const passport = require("passport");

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.encode({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
};

const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

module.exports = { registerUser, loginUser, googleAuth };
