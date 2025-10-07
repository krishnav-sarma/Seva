import React from "react";
import { Lightbulb, Pill, Gift, Hospital } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const navigate = useNavigate();

  const recommendations = [
    { crop: "Dengue" },
    { crop: "Japanese Encephalitis" },
    { crop: "Chikungunya" },
    { crop: "Infulenza(Seasonal Flu)" },
    { crop: "Viral Hepatitis A & E" },
  ];

  const marketData = [
    { crop: "GMCH Hospital" },
    { crop: "GNRC Hospital" },
    { crop: "Global Hospital of Surgery" },
  ];

  return (
    <div className="space-y-6 h-[875px] ">
      {/* AI Recommendations */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <div className="flex items-center mb-4 gap-2">
          <Lightbulb className="text-[#5ba2a0]" size={20} />
          <h2 className="font-bold text-lg text-gray-800 underline">
            Viral Illness{" "}
          </h2>
        </div>

        <div className="space-y-0.5">
          {recommendations.map((rec, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-gray-200 py-2 p-2 last:border-b-0 bg-[#e5e5e5] rounded-3xl"
            >
              <div className="flex items-center gap-2">
                <Pill className="text-[#236a68]" size={16} />
                <span className="font-semibold text-gray-900">{rec.crop}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("*")}
          className="mt-3 w-full border border-blue-200 text-[#236a68] font-bold py-2 rounded-lg hover:bg-blue-50 transition"
        >
          View Detailed Analysis
        </button>
      </div>

      {/* Market Data */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <div className="flex items-center mb-4 gap-2">
          <Hospital className="text-[#811212]" size={20} />
          <h2 className="font-bold text-lg text-gray-800">Nearby Hospitals</h2>
        </div>

        <div className="space-y-0.5">
          {marketData.map((market, i) => (
            <div
              key={i}
              className="flex items-center border-b border-gray-200 py-2.5 p-2 last:border-b-0 gap-2 bg-[#e5e5e5] rounded-3xl"
            >
              <Pill className="text-[#236a68]" size={16} />
              <span className="font-semibold text-gray-900">{market.crop}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/hospi")}
          className="mt-3 w-full border border-red-200 text-[#931b1b] font-bold py-2 rounded-lg hover:bg-red-50 transition"
        >
          View Detailed Analysis
        </button>
      </div>

      {/* Government Schemes */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <div className="flex items-center mb-2 gap-2">
          <Gift className="text-green-600" size={20} />
          <h2 className="font-bold text-lg text-gray-800">
            Government Schemes
          </h2>
        </div>
        <p className="text-gray-500 text-sm mb-3">
          New subsidies and support programs available
        </p>

        <button
          onClick={() => navigate("*")}
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
        >
          Explore Schemes
        </button>
      </div>
    </div>
  );
};

export default MainContent;
