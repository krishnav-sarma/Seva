import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ user }) => {
  const navigate = useNavigate();

  return (
    <header className="relative rounded-b-xl overflow-hidden h-30">
      {/* Background Image with Blur */}
      <img
        src="/bg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-[3px]"
      />

      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative flex justify-between h-full px-5">
        {/* Left: Avatar + Name */}
        <div className="flex py-7 gap-2">
          <img
            src="/user.png"
            alt="User Avatar"
            className="w-7 h-6.5 cursor-pointer"
            onClick={() => navigate("/profile")}
          />
          <h3 className="font-semibold text-[17px] tracking-wide text-white py-1">
            {user ? user.name : "Guest"}
          </h3>
        </div>



        


        
      </div>
    </header>
  );
};

export default Header;
