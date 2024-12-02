const express = require("express");
const passport = require("passport");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./authRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use("/api/auth", authRoutes);

// Database Connection and Server Start
const connectDB = async () => {
  try {
    // Wait for MongoDB connection
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Start the server after DB connection
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => console.log(`Authentication Service running on port ${PORT}`));
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); // Exit the process with failure if DB connection fails
  }
};

// Connect to DB and then start the server
connectDB();
