import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import AppointmentBooking from "./screens/AppointmentPage";
import AdminDashboard from "./screens/AdminDashboard";
import Login from "./screens/LoginPage";
import Signup from "./screens/SignUpPage";
import AdminLoginPage from "./screens/AdminLoginPage"; // Import the AdminLoginPage


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/appointments" element={<AppointmentBooking />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
