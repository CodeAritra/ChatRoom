import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };
  const shouldShow = location.pathname !== "/login";

  if (!shouldShow) return null;
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={handleLogout}
        className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800 text-sm shadow"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
