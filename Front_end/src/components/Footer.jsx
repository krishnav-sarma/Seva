// Footer.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Settings,
  MessageCircleQuestionMark,
  Phone,
  Menu,
  X,
} from "lucide-react";
import ChatWindow from "./ChatWindow";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showChat, setShowChat] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { name: "Home", path: "/", icon: Home },
    { name: "Helpline", path: "/helpline", icon: Phone },
    { name: "FAQ", path: "/FAQ", icon: MessageCircleQuestionMark },
    { name: "Setting", path: "/Setting", icon: Settings },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ---------- MOBILE FOOTER ---------- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-inner flex justify-around items-center h-[65px] sm:h-[70px] md:hidden z-50 px-2">
        {tabs.slice(0, 2).map((tab) => {
          const isActive = location.pathname === tab.path;
          const Icon = tab.icon;
          return (
            <button
              key={tab.name}
              onClick={() => handleNavigate(tab.path)}
              className="flex flex-col items-center justify-center focus:outline-none w-16 sm:w-20"
            >
              <Icon
                size={22}
                className={
                  isActive
                    ? "text-[#236a68]"
                    : "text-gray-400 hover:text-[#236a68] transition-colors"
                }
              />
              <span
                className={`text-[11px] sm:text-xs mt-1 ${
                  isActive ? "text-[#236a68] font-semibold" : "text-[#236a68]"
                }`}
              >
                {tab.name}
              </span>
            </button>
          );
        })}

        {/* Floating Chatbot Button */}
        <button
          onClick={() =>
            window.open("https://mrs0lver.github.io/SevaCHAT/", "_blank")
          }
          className="relative -top-6 bg-[#236a68] rounded-full p-[3px] sm:p-[5px] shadow-lg hover:scale-105 transition-transform"
          aria-label="Open Health Assistant"
        >
          <img
            src="/icon.jpeg"
            alt="Chatbot"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />
        </button>

        {tabs.slice(2).map((tab) => {
          const isActive = location.pathname === tab.path;
          const Icon = tab.icon;
          return (
            <button
              key={tab.name}
              onClick={() => handleNavigate(tab.path)}
              className="flex flex-col items-center justify-center focus:outline-none w-16 sm:w-20"
            >
              <Icon
                size={24}
                className={
                  isActive
                    ? "text-[#236a68]"
                    : "text-gray-400 hover:text-[#236a68] transition-colors"
                }
              />
              <span
                className={`text-[11px] sm:text-xs mt-1 ${
                  isActive ? "text-[#236a68] font-semibold" : "text-[#236a68]"
                }`}
              >
                {tab.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* ---------- DESKTOP HAMBURGER MENU ---------- */}
      <div className="hidden md:flex fixed top-4 right-6 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-[#236a68] text-white p-2 rounded-lg shadow-md hover:bg-[#1c5755] transition"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg border border-gray-200 w-44 animate-fadeIn">
            {tabs.map((tab) => {
              const isActive = location.pathname === tab.path;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.name}
                  onClick={() => handleNavigate(tab.path)}
                  className={`flex items-center gap-3 px-4 py-2 w-full text-left text-sm hover:bg-gray-100 transition ${
                    isActive ? "text-[#236a68] font-semibold" : "text-gray-700"
                  }`}
                >
                  <Icon size={18} />
                  {tab.name}
                </button>
              );
            })}
            <hr className="my-1" />
            <button
              onClick={() =>
                window.open("https://mrs0lver.github.io/SevaCHAT/", "_blank")
              }
              className="flex items-center gap-3 px-4 py-2 w-full text-left text-sm text-[#236a68] font-medium hover:bg-gray-100 transition"
            >
              💬 Chat Assistant
            </button>
          </div>
        )}
      </div>

      {/* Chat Window Overlay */}
      <ChatWindow open={showChat} onClose={() => setShowChat(false)} />
    </>
  );
};

export default Footer;
