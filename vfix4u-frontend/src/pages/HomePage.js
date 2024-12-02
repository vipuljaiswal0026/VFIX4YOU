import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "../styles/homepage.css";

function Homepage() {
  const navigate = useNavigate(); // Initialize navigate hook

  // Event handler for button click to redirect to the required page
  const handleButtonClick = (page) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn"); // Check if the user is logged in

    if (!isLoggedIn) {
      // If not logged in, redirect to login page
      navigate("/login");
    } else {
      // If logged in, redirect to the respective page
      if (page === "book") {
        navigate("/book-service"); // Redirect to book service page
      } else if (page === "view") {
        navigate("/view-services"); // Redirect to view services page
      }
    }
  };

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to VFix4U</h1>
        <p>Your go-to platform for IT-related services.</p>
        <button className="btn-primary" onClick={() => handleButtonClick("book")}>
          Book a Service
        </button>
        <button className="btn-secondary" onClick={() => handleButtonClick("view")}>
          View Services
        </button>
      </header>
    </div>
  );
}

export default Homepage;
