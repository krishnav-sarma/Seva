import React from "react";
import { useNavigate } from "react-router-dom";
import { Lightbulb, Pill, Thermometer, Activity } from "lucide-react";

const ViralIllness = () => {
  const navigate = useNavigate();

  const illnessData = [
    {
      name: "Common Cold",
      symptoms: "Sneezing, sore throat, cough, mild fever",
      treatment: "Rest, fluids, and over-the-counter cold medicine",
    },
    {
      name: "Influenza (Flu)",
      symptoms: "High fever, chills, headache, muscle pain, fatigue",
      treatment: "Antiviral drugs (if early), rest, and hydration",
    },
    {
      name: "Dengue Fever",
      symptoms: "High fever, severe headache, joint pain, rash",
      treatment: "Pain relief (no aspirin), fluids, rest; consult a doctor",
    },
    {
      name: "Chikungunya",
      symptoms: "High fever, severe joint pain, rashes, fatigue",
      treatment: "Pain relievers, rest, and hydration",
    },
    {
      name: "Viral Hepatitis A",
      symptoms: "Fatigue, nausea, jaundice (yellowing skin/eyes)",
      treatment: "Supportive care and rest, avoid alcohol",
    },
    {
      name: "COVID-19",
      symptoms: "Fever, cough, loss of taste/smell, fatigue",
      treatment: "Isolation, rest, fluids, and monitoring oxygen levels",
    },
    {
      name: "Chickenpox",
      symptoms: "Itchy rash, fever, fatigue, loss of appetite",
      treatment: "Calamine lotion, antihistamines, rest",
    },
    {
      name: "Viral Gastroenteritis",
      symptoms: "Vomiting, diarrhea, stomach cramps",
      treatment: "Hydration, oral rehydration salts, light diet",
    },
    {
      name: "Measles",
      symptoms: "Fever, cough, red eyes, and red rash starting on the face",
      treatment: "Vitamin A supplements, rest, and fluids",
    },
    {
      name: "Mumps",
      symptoms: "Swollen salivary glands, fever, muscle aches",
      treatment: "Pain relievers, fluids, and rest",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f1f1f1] flex justify-center items-start p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 w-full max-w-lg transition-all duration-300">
        {/* Header */}
        <div className="flex items-center mb-3 gap-2">
          <Lightbulb className="text-[#236a68]" size={24} />
          <h2 className="font-bold text-xl text-green-900">Viral Illnesses</h2>
        </div>

        <p className="text-gray-600 text-sm mb-5">
          Mentioned below are some recently reported viral illnesses in your area.
        </p>

        {/* Illness List */}
        <div className="space-y-3">
          {illnessData.map((illness, i) => (
            <div
              key={i}
              className="flex flex-col border border-gray-200 py-3 px-4 rounded-xl bg-[#fafafa] hover:bg-[#ebf3f2] hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-1">
                <Pill className="text-[#236a68]" size={18} />
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  {illness.name}
                </span>
              </div>

              <div className="flex items-start gap-2 text-gray-700 text-sm mt-1">
                <Thermometer size={15} className="mt-0.5 text-[#236a68]" />
                <span>{illness.symptoms}</span>
              </div>

              <div className="flex items-start gap-2 text-gray-700 text-sm mt-1">
                <Activity size={15} className="mt-0.5 text-[#236a68]" />
                <span>{illness.treatment}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-6 w-full bg-[#236a68] text-white font-semibold py-2.5 rounded-lg hover:bg-[#1d5654] hover:scale-102 transition-colors duration-200"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default ViralIllness;
