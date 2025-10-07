import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

const Header = ({ user }) => {
  const navigate = useNavigate();

  return (
    <header className="relative rounded-b-xl overflow-hidden h-40">
      {/* Background Image with Blur */}
      <img
        src="/bg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-[1px]"
      />
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-between h-full px-5 py-15">
        {/* Top: Avatar + Name */}
        <div className="flex gap-2 items-center ">
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

        {/* Bottom: Location */}
        <div className="flex items-center rounded-lg mt-1 ">
          <MapPin className="w-5 h-4 text-white" />
          <div className="ml-2">
            <p className="text-[13px] font-medium text-white">Location</p>
            <p className="text-[11px] text-white">
              Santipur, Nalbari, Joy Mangla, Assam
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
