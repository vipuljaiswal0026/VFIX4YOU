import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/registerpage.css";

function RegisterPage() {
  const navigate = useNavigate(); // Initialize navigate hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Handle registration form submission
  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation to check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Here you would send a request to your backend to create the new user
    // For now, we assume the registration is successful and redirect the user

    // Save the user data in localStorage or session
    localStorage.setItem("isLoggedIn", true); // This is a mock, replace with real login logic

    // Navigate to the login page or services page after successful registration
    navigate("/login");
  };

  return (
    <div className="registerpage">
      <div className="register-container">
        <h2>Create an Account</h2>

        {/* Registration Form */}
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Show error message if any */}
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>

        <div className="login-link">
          <p>Already have an account?</p>
          <button className="btn-secondary" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
