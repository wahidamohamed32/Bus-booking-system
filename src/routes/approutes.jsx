import { Routes, Route } from "react-router-dom";

import Login from "../views/login";
import Register from "../views/register";
import Dashboard from "../views/dashboard";
import Seats from "../views/seats";
import AdminDashboard from "../views/admindashboard";
import MyBookings from "../views/mybookings";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/seats" element={<Seats />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/my-bookings" element={<MyBookings />} />
    </Routes>
  );
}

export default AppRoutes;