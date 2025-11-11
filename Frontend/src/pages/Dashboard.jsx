import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome back, {user?.name || "Employee"} 👋
      </h1>
      <p className="text-gray-600 mt-2">Here’s what’s happening today.</p>

      {/* Later we’ll add announcements, discussions, etc. */}
      <div className="mt-8 bg-white shadow p-4 rounded-lg">
        <h2 className="text-xl font-semibold">Company Announcements</h2>
        <p className="text-gray-500 mt-2">No new announcements yet.</p>
      </div>
    </div>
  );
};

export default Dashboard;
