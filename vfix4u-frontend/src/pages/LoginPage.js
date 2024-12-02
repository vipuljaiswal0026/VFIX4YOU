import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginpage.css";

function LoginPage() {
  const navigate = useNavigate(); // Initialize navigate hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login with Google
  const handleGoogleLogin = () => {
    // Call your Google OAuth login functionality here
    // After successful login, set the user session, then navigate to the home page
    localStorage.setItem("isLoggedIn", true);
    navigate("/"); // Redirect to homepage or services page
  };

  // Handle manual login
  const handleManualLogin = (e) => {
    e.preventDefault();
    // You can call your backend here to authenticate with email and password
    // For now, we'll assume successful login
    localStorage.setItem("isLoggedIn", true);
    navigate("/"); // Redirect to homepage or services page
  };

  // Handle registration click
  const handleRegisterClick = () => {
    navigate("/register"); // Redirect to the registration page
  };

  return (
    <div className="loginpage">
      <div className="login-container">
        <h2>Login to VFix4U</h2>

        {/* Manual login form */}
        <form onSubmit={handleManualLogin}>
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
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>

        {/* Google login button */}
        <button className="btn-google" onClick={handleGoogleLogin}>
          Login with Google
        </button>

        {/* Register button */}
        <button className="btn-secondary" onClick={handleRegisterClick}>
          Register
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
