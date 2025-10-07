import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Languages,
  Bell,
  Shield,
  ChevronRight,
  LogOut,
} from "lucide-react";

const Profile = ({ user }) => {
  const navigate = useNavigate();

  // fallback if no user
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">No user logged in</p>
      </div>
    );
  }

  const menuItems = [
    { icon: Languages, label: "Language / भाषा", path: "/language" },
    { icon: Bell, label: "Notifications", path: "/notifications" },
    { icon: Shield, label: "Privacy & Security", path: "/privacy" },
  ];

  return (
    <div className="min-h-screen bg-[#f1f1f1]">
      {/* Header */}
      <div className="flex items-center px-4 py-3 border-b border-gray-200 bg-white shadow-sm">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded hover:bg-gray-100"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <h2 className="ml-3 text-lg font-semibold text-green-900">Profile</h2>
      </div>

      <div className="p-4 max-w-2xl mx-auto">

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow p-4 mb-4">
          <div className="flex items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#236a68] text-white text-xl font-bold">
              {user.name ? user.name[0].toUpperCase() : "U"}
            </div>
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-bold text-green-900">{user.name}</h3>
              <p className="text-sm text-gray-500">
                {user.email ? user.email : "No email provided"}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow p-4 mb-4">
          <h4 className="text-green-900 font-semibold mb-3">
            Contact Information
          </h4>

          {user.phone && (
            <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-2">
              <Phone className="w-5 h-5 text-[#236a68]" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">
                  Phone Number
                </p>
                <p className="text-sm text-gray-500">{user.phone}</p>
              </div>
            </div>
          )}

          {user.email && (
            <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-2">
              <Mail className="w-5 h-5 text-[#236a68]" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800">
                  Email Address
                </p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          )}

          <div className="flex items-center bg-gray-100 p-3 rounded-lg">
            <MapPin className="w-5 h-5 text-[#236a68]" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">Location</p>
              <p className="text-sm text-gray-500">
                Santipur, Nalbari, Joy Mangla, Assam
              </p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-xl shadow mb-4">
          {menuItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={i}
                onClick={() => navigate(item.path)}
                className="w-full flex items-center justify-between px-4 py-3 border-b last:border-0 border-gray-200 hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <Icon className="w-5 h-5 text-[#236a68]" />
                  <span className="ml-3 text-sm font-medium text-green-900">
                    {item.label}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            );
          })}
        </div>

        {/* Logout */}
        <div className="bg-white rounded-xl shadow p-4">
          <button
            onClick={() => {
              navigate("/login");
              window.location.reload(); // reset state
            }}
            className="flex items-center justify-center w-full py-2 border border-red-300 rounded-lg text-red-600 font-medium hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
