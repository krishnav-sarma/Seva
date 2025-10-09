import React from "react";
import { useNavigate } from "react-router-dom";
import { Gift, FileText, Phone } from "lucide-react";

const Schemes = () => {
  const navigate = useNavigate();

  // Sample Government Schemes Data
  const schemes = [
    {
      name: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
      description: "Provides health insurance coverage up to ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
      contact: "14555 / 1800-111-565",
      link: "https://pmjay.gov.in",
    },
    {
      name: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
      description: "Accidental death and disability insurance scheme at a minimal annual premium of ₹12.",
      contact: "1800-180-1111",
      link: "https://jansuraksha.gov.in",
    },
    {
      name: "Ayushman Bharat Digital Mission",
      description: "Aims to create digital health IDs for all citizens to access healthcare digitally.",
      contact: "1800-11-4477",
      link: "https://healthid.ndhm.gov.in",
    },
    {
      name: "Mission Indradhanush",
      description: "Vaccination program to ensure all children and pregnant women are fully immunized.",
      contact: "011-2306-3434",
      link: "https://main.mohfw.gov.in",
    },
    {
      name: "National Health Mission (NHM)",
      description: "Focused on strengthening rural and urban health systems and improving healthcare delivery.",
      contact: "1800-180-1104",
      link: "https://nhm.gov.in",
    },
    {
      name: "PM Garib Kalyan Anna Yojana",
      description: "Provides free food grains to poor families during crisis periods like the COVID-19 pandemic.",
      contact: "1800-11-0841",
      link: "https://dfpd.gov.in",
    },
    {
      name: "Maternity Benefit Programme (PMMVY)",
      description: "Financial assistance for pregnant and lactating women to improve health and nutrition.",
      contact: "011-2338-8337",
      link: "https://pmmvy.nic.in",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-md mx-auto">
      <div className="flex items-center mb-3 gap-2">
        <Gift className="text-green-600" size={22} />
        <h2 className="font-bold text-lg text-gray-800">Government Schemes</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">
        Explore ongoing government initiatives for healthcare and social welfare.
      </p>

      <div className="space-y-2">
        {schemes.map((scheme, i) => (
          <div
            key={i}
            className="border border-gray-200 bg-[#f7f7f7] rounded-2xl p-3 hover:bg-[#ececec] transition"
          >
            <div className="flex items-center gap-2 mb-1">
              <FileText className="text-green-600" size={16} />
              <span className="font-semibold text-gray-900">{scheme.name}</span>
            </div>
            <p className="text-gray-700 text-sm mb-2">{scheme.description}</p>
            <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
              <Phone size={14} />
              <span>{scheme.contact}</span>
            </div>
            <button
              onClick={() => window.open(scheme.link, "_blank")}
              className="text-sm text-green-700 underline hover:text-green-800"
            >
              Visit Official Site →
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-4 w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 hover:scale-102 transition"
      >
        ← Back
      </button>
    </div>
  );
};

export default Schemes;
