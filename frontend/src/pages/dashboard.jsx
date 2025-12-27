import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard.</p>
    </div>
  );
}
