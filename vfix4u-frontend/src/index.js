import React from "react";
import ReactDOM from "react-dom/client"; // for React 18 and later
import "./index.css"; // import global styles
import App from "./App"; // main app component

const root = ReactDOM.createRoot(document.getElementById("root")); // React 18 method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
