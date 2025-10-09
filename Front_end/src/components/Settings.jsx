import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, ArrowLeft, ChevronRight } from "lucide-react";

const Settings = ({ user }) => {
  const navigate = useNavigate();

  const settingsItems = [
    { name: "General", action: () => console.log("Navigate to General") },
    { name: "Personalization", action: () => console.log("Navigate to Personalization") },
    { name: "About", action: () => console.log("Navigate to About") },
  ];

  const handleSignOut = () => {
    console.log("User signed out!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f1f1f1]">
      {/* Header */}
      <div className="flex items-center px-4 py-3 border-b border-gray-200 bg-white shadow-sm">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded hover:bg-gray-100 transition"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <h2 className="ml-3 text-lg font-semibold text-green-900">Settings</h2>
      </div>

      <div className="p-4 max-w-2xl mx-auto">
        {/* User Card */}
        {/* <div className="bg-white rounded-xl shadow p-4 mb-4">
          <div className="flex items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#236a68] text-white text-xl font-bold">
              {user?.name ? user.name[0].toUpperCase() : "U"}
            </div>
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-bold text-green-900">
                {user?.name || "User Name"}
              </h3>
              <p className="text-sm text-gray-500">
                {user?.email || "No email provided"}
              </p>
            </div>
          </div>
        </div> */}

        {/* Account Info */}
        {/* <div className="bg-white rounded-xl shadow p-4 mb-4">
          <h4 className="text-green-900 font-semibold mb-3">
            Account Information
          </h4>

          <div className="bg-gray-100 p-3 rounded-lg mb-2">
            <p className="text-sm font-medium text-gray-800">Email Address</p>
            <p className="text-sm text-gray-500">
              {user?.email || "Not set"}
            </p>
          </div>

          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-sm font-medium text-gray-800">Phone Number</p>
            <p className="text-sm text-gray-500">
              {user?.phone || "Not set"}
            </p>
          </div>
        </div> */}

        {/* Settings Menu */}
        <div className="bg-white rounded-xl shadow mb-4">
          {settingsItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="w-full flex items-center justify-between px-4 py-3 border-b last:border-0 border-gray-200 hover:bg-gray-50"
            >
              <span className="text-sm font-medium text-green-900">
                {item.name}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          ))}
        </div>

        {/* Logout */}
        {/* <div className="bg-white rounded-xl shadow p-4">
          <button
            onClick={handleSignOut}
            className="flex items-center justify-center w-full py-2 border border-red-300 rounded-lg text-red-600 font-medium hover:bg-red-50 transition"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Settings;
