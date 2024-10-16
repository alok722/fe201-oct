import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Navigate to the dashboard
    navigate("/dashboard");
    console.log("Logged in");
  };

  return (
    <div>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
};

// Define the Route
// Link
// Programmatically Navigation
