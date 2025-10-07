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
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-md">
      {/* Header */}
      <div className="flex items-center mb-4 gap-2">
        <Lightbulb className="text-[#5ba2a0]" size={22} />
        <h2 className="font-bold text-lg text-gray-800">Viral Illnesses</h2>
      </div>
      <p className="text-gray-500 text-sm mb-3">
        Mentioned below are some recently reported viral illnesses in your area.
      </p>


      {/* Illness List */}
      <div className="space-y-2">
        {illnessData.map((illness, i) => (
          <div
            key={i}
            className="flex flex-col border border-gray-200 py-2 px-3 rounded-2xl bg-[#f7f7f7] hover:bg-[#ececec] transition"
          >
            <div className="flex items-center gap-2 mb-1">
              <Pill className="text-[#236a68]" size={16} />
              <span className="font-semibold text-gray-900">{illness.name}</span>
            </div>
            <div className="flex items-start gap-1 text-gray-700 text-sm">
              <Thermometer size={14} />
              <span>{illness.symptoms}</span>
            </div>
            <div className="flex items-start gap-1 text-gray-700 text-sm">
              <Activity size={14} />
              <span>{illness.treatment}</span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 w-full bg-[#236a68] text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
      >
        ← Back
      </button>
    </div>
  );
};

export default ViralIllness;
