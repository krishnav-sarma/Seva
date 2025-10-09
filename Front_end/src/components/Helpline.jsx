import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  Shield,
  HeartPulse,
  AlertTriangle,
  Ambulance,
  Heart,
  LifeBuoy,
  Activity,
  Cross,
} from "lucide-react";

const Helpline = () => {
  const navigate = useNavigate();

  const helplineData = [
    {
      category: "Emergency Services",
      services: [
        { name: "National Emergency Number", contact: "112", icon: <AlertTriangle className="text-red-500" size={18} /> },
        { name: "Ambulance (Medical Emergency)", contact: "102/108", icon: <Ambulance className="text-red-600" size={18} /> },
        { name: "Fire Helpline", contact: "101", icon: <LifeBuoy className="text-orange-500" size={18} /> },
        { name: "Disaster Management Helpline", contact: "1078", icon: <Activity className="text-yellow-600" size={18} /> },
      ],
    },
    {
      category: "Health & Medical Support",
      services: [
        { name: "Aarogya Helpline (COVID / General Health)", contact: "1075", icon: <HeartPulse className="text-green-600" size={18} /> },
        { name: "Health Department Assam", contact: "104", icon: <HeartPulse className="text-green-700" size={18} /> },
        { name: "Mental Health Helpline (KIRAN)", contact: "18005990019", icon: <Heart className="text-blue-600" size={18} /> },
        { name: "National AIDS Helpline", contact: "1097", icon: <Heart className="text-red-500" size={18} /> },
        { name: "Blood Bank Information", contact: "1910", icon: <Cross className="text-pink-600" size={18} /> },
        { name: "Poison Control Center (AIIMS)", contact: "1800116117", icon: <HeartPulse className="text-purple-500" size={18} /> },
      ],
    },
    {
      category: "Police & Safety",
      services: [
        { name: "Police Helpline", contact: "100", icon: <Shield className="text-blue-600" size={18} /> },
        { name: "Women Helpline (All India)", contact: "1091", icon: <Shield className="text-purple-600" size={18} /> },
        { name: "Assam Police Control Room", contact: "03612521242", icon: <Shield className="text-indigo-500" size={18} /> },
        { name: "Senior Citizen Helpline", contact: "1291", icon: <Shield className="text-teal-600" size={18} /> },
        { name: "Cyber Crime Helpline", contact: "1930", icon: <Shield className="text-cyan-600" size={18} /> },
      ],
    },
    {
      category: "Children & Women Support",
      services: [
        { name: "Child Helpline", contact: "1098", icon: <HeartPulse className="text-pink-500" size={18} /> },
        { name: "Women Helpline (Domestic Violence)", contact: "181", icon: <HeartPulse className="text-fuchsia-600" size={18} /> },
        { name: "National Commission for Women", contact: "7827170170", icon: <HeartPulse className="text-rose-600" size={18} /> },
      ],
    },
    {
      category: "Disaster & Relief (Assam)",
      services: [
        { name: "Flood Control Room (Assam)", contact: "03612237024", icon: <LifeBuoy className="text-blue-700" size={18} /> },
        { name: "Disaster Response (NDMA)", contact: "1078", icon: <LifeBuoy className="text-cyan-700" size={18} /> },
        { name: "State Disaster Management Authority", contact: "1070", icon: <LifeBuoy className="text-green-700" size={18} /> },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[50%] mx-auto my-4">
      {/* Header */}
      <div className="flex items-center mb-4 gap-2">
        <Phone className="text-[#236a68]" size={22} />
        <h2 className="font-bold text-base sm:text-lg md:text-xl text-gray-800">
          Emergency & Helpline Numbers
        </h2>
      </div>

      <p className="text-gray-500 text-[12px] sm:text-sm md:text-base mb-4">
        Mentioned below are some Emergency & Helpline Numbers.
      </p>

      {/* Helpline List */}
      <div className="space-y-4">
        {helplineData.map((section, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl p-3 sm:p-4 bg-[#f8f8f8]"
          >
            <h3 className="font-bold text-gray-800 mb-2 text-[14px] sm:text-base">
              {section.category}
            </h3>

            <div className="space-y-2">
              {section.services.map((service, j) => (
                <div
                  key={j}
                  className="flex flex-wrap justify-between items-center border-b border-gray-200 py-2 last:border-none hover:bg-[#ececec] rounded-lg px-2 transition"
                >
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    {service.icon}
                    <span className="text-gray-800 font-medium text-[12px] sm:text-[13px] md:text-[14px]">
                      {service.name}
                    </span>
                  </div>

                  <a
                    href={`tel:${service.contact}`}
                    className="text-blue-600 font-semibold text-[12px] sm:text-sm md:text-base hover:underline mt-1 sm:mt-0"
                  >
                    {service.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-5 w-full bg-[#236a68] text-white font-semibold py-2 sm:py-3 rounded-lg hover:scale-102 transition text-sm sm:text-base"
      >
        ← Back
      </button>
    </div>
  );
};

export default Helpline;
