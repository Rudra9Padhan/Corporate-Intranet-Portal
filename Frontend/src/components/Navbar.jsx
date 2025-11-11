import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-blue-700 text-white p-3 flex justify-between items-center">
      <h1 className="font-bold text-xl">Intranet Portal</h1>
      {user ? (
        <div className="flex gap-4 items-center">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/" className="hover:underline mr-4">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
