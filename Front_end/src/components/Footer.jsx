// Footer.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Settings, MessageCircleQuestionMark, Phone } from "lucide-react";
import ChatWindow from "./ChatWindow";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showChat, setShowChat] = useState(false);

  const tabs = [
    { name: "Home", path: "/", icon: Home },
    { name: "Helpline", path: "/helpline", icon: Phone },
    { name: "FAQ", path: "/FAQ", icon: MessageCircleQuestionMark },
    { name: "Setting", path: "/Setting", icon: Settings },
  ];

  return (
    <>
      {/* Footer Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-inner flex justify-around items-center h-15 md:hidden z-49">
        {tabs.slice(0, 2).map((tab) => {
          const isActive = location.pathname === tab.path;
          const Icon = tab.icon;
          return (
            <button
              key={tab.name}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center justify-center focus:outline-none"
            >
              <Icon
                size={22}
                className={isActive ? "text-[#236a68]" : "text-gray-400 hover:text-[#236a68]"}
              />
              <span className={`text-xs mt-1 ${isActive ? "text-[#236a68] font-semibold" : "text-[#236a68]"}`}>
                {tab.name}
              </span>
            </button>
          );
        })}

        {/* Floating Chatbot Button */}
        <button
          onClick={() => setShowChat(true)}
          className="relative -top-6 bg-[#236a68] rounded-full p-1 shadow-lg"
          aria-label="Open Health Assistant"
        >
          <img
            src="/bg.png" // replace with your bot icon
            alt="Chatbot"
            className="w-10 h-10 rounded-full"
          />
        </button>

        {tabs.slice(2).map((tab) => {
          const isActive = location.pathname === tab.path;
          const Icon = tab.icon;
          return (
            <button
              key={tab.name}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center justify-center focus:outline-none"
            >
              <Icon
                size={24}
                className={isActive ? "text-[#236a68]" : "text-gray-400 hover:text-[#236a68]"}
              />
              <span className={`text-xs mt-1 ${isActive ? "text-[#236a68] font-semibold" : "text-[#236a68]"}`}>
                {tab.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Chat Window (90% height) */}
      <ChatWindow open={showChat} onClose={() => setShowChat(false)} />
    </>
  );
};

export default Footer;
