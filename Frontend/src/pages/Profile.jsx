import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    avatar: "",
  });
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch user details from backend
  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/api/users/${user._id}`);
          setFormData(res.data);
        } catch (err) {
          console.error("Error fetching profile", err);
        }
      };
      fetchProfile();
    }
  }, [user]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle avatar upload
  const handleFileChange = (e) => {
    setAvatarFile(e.target.files[0]);
  };

  // Submit profile updates
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("department", formData.department);
      form.append("role", formData.role);
      if (avatarFile) form.append("avatar", avatarFile);

      const res = await axios.put(
        `http://localhost:5000/api/users/${user._id}`,
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMessage("Profile updated successfully!");
      login(res.data); // Update context and localStorage
    } catch (err) {
      console.error("Profile update error:", err);
      setMessage("Failed to update profile. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src={
              formData.avatar
                ? `http://localhost:5000/uploads/${formData.avatar}`
                : "https://via.placeholder.com/120"
            }
            alt="User Avatar"
            className="w-28 h-28 rounded-full object-cover border mb-3"
          />
          <label className="cursor-pointer text-blue-600 font-semibold">
            Change Avatar
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Email (Read Only)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="w-full border rounded p-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Role / Designation
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-sm text-green-600 font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
