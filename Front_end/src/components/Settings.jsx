import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, ChevronLeft } from "lucide-react"; // Import a better back arrow and LogOut icon

const Settings = ({ user }) => {
  const navigate = useNavigate();

  // Define the primary color used in your Footer for consistency
  const primaryColor = "text-[#236a68]";
  const primaryBgHover = "hover:bg-[#a0c3c1]";
  const secondaryBgHover = "hover:bg-[#b3d1cf]"; // Used for list items

  const settingsItems = [
    { id: 1, name: "General", action: () => console.log("Navigate to General") },
    { id: 2, name: `Email: ${user?.email || "Not set"}`, action: () => console.log("Edit Email") },
    { id: 3, name: `Phone number: ${user?.phone || "Not set"}`, action: () => console.log("Edit Phone") },
    { id: 4, name: "Personalization", action: () => console.log("Navigate to Personalization") },
    { id: 5, name: "About", action: () => console.log("Navigate to About") },
    // Sign out is handled differently
  ];

  const handleSignOut = () => {
    // Implement your sign-out logic here (e.g., clearing auth tokens, state)
    console.log("User signed out!");
    navigate("/"); // Navigate to home or login page after sign out
  };

  return (
    <div className="flex-1 bg-white p-4 sm:p-6 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)} // Navigate back one step
          className={`flex items-center justify-center w-10 h-10 text-xl text-gray-600 ${primaryBgHover} rounded-full transition-colors`}
          aria-label="Go back"
        >
          {/* Using ChevronLeft from lucide-react */}
          <ChevronLeft size={24} /> 
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
      </div>

      {/* User Information Section */}
      <div className="mb-8 p-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-700 mb-1">
          {user?.name || "User's Name"}
        </h2>
        <p className={`text-sm ${primaryColor} font-medium`}>
          Your Account
        </p>
      </div>

      {/* Settings List */}
      <div className="mb-8">
        <ul className="space-y-1">
          {settingsItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={item.action}
                className={`w-full text-left px-3 py-3 rounded-lg ${secondaryBgHover} transition-colors duration-200 text-gray-700 font-medium`}
              >
                {item.name}
              </button>
            </li>
          ))}

          {/* Sign Out Button (Styled differently) */}
          <li>
            <button
              onClick={handleSignOut}
              className={`w-full text-left px-3 py-3 rounded-lg ${secondaryBgHover} transition-colors duration-200 font-semibold text-red-600 flex items-center gap-3`}
            >
              <LogOut size={20} />
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;