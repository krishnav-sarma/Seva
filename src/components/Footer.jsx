import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Bookmark, FileText, Settings, Hospital } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define tab items
  const tabs = [
    { name: "Home", path: "/", icon: Home },
    { name: "Hospitals", path: "*", icon: Hospital },
    { name: "Application", path: "*", icon: FileText },
    { name: "Setting", path: "/Setting", icon: Settings },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-inner flex justify-around items-center h-15 md:hidden">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        const Icon = tab.icon;
        return (
          <button
            key={tab.name}
            onClick={() => navigate(tab.path)}
            className="flex flex-col items-center justify-center focus:outline-none "
          >
            <Icon
              size={24}
              className={isActive ? "text-[#236a68]" : "text-gray-400 hover:text-[#236a68]"}
            />
            <span
              className={`text-xs mt-1 ${
                isActive ? "text-[#236a68] font-semibold" : "text-[#236a68] "
              }`}
            >
              {tab.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Footer;
