import React from "react";
import { useNavigate } from "react-router-dom";
import { Hospital as HospitalIcon, Pill, MapPin, Phone } from "lucide-react";

const Hospital = () => {
  const navigate = useNavigate();

  const hospitalData = [
    { 
      name: "GNRC Hospital", 
      location: "Guwahati, Dispur", 
      contact: "+91 361 223 7745",
      mapUrl: "https://www.google.com/maps?q=GNRC+Hospital+Guwahati"
    },
    { 
      name: "Swagat Super Speciality Hospital & Surgical Institute", 
      location: "Guwahati, Assam", 
      contact: "+91 361 234 5678",
      mapUrl: "https://www.google.com/maps?q=Swagat+Super+Speciality+Hospital+Guwahati"
    },
    { 
      name: "Health City Hospital", 
      location: "Guwahati, Assam", 
      contact: "+91 361 876 5432",
      mapUrl: "https://www.google.com/maps?q=Health+City+Hospital+Guwahati"
    },
    { 
      name: "Gate Hospital", 
      location: "Guwahati, Assam", 
      contact: "+91 361 987 6543", 
      mapUrl: "https://www.google.com/maps?q=Gate+Hospital+Guwahati" 
    },
    { 
      name: "Hayat Hospital Pvt Ltd.", 
      location: "Guwahati, Assam", 
      contact: "+91 361 123 4567", 
      mapUrl: "https://www.google.com/maps?q=Hayat+Hospital+Guwahati" 
    },
    { 
      name: "Dispur Polyclinic & Hospitals Pvt Ltd.", 
      location: "Ganeshguri, Guwahati", 
      contact: "+91 361 234 8901", 
      mapUrl: "https://www.google.com/maps?q=Dispur+Polyclinic+Guwahati" 
    },
    { 
      name: "Mahendra Mohan Choudhury Hospital", 
      location: "Pan Bazaar, Guwahati", 
      contact: "+91 361 223 4455", 
      mapUrl: "https://www.google.com/maps?q=Mahendra+Mohan+Choudhury+Hospital+Guwahati" 
    },
    { 
      name: "Apollo Hospitals Guwahati", 
      location: "G S Road, Guwahati", 
      contact: "+91 361 987 1234", 
      mapUrl: "https://www.google.com/maps?q=Apollo+Hospitals+Guwahati" 
    },
    { 
      name: "Global Hospital of Surgery", 
      location: "Station Road, Guwahati", 
      contact: "+91 361 998 8776", 
      mapUrl: "https://www.google.com/maps?q=Global+Hospital+of+Surgery+Guwahati" 
    },
    { 
      name: "Hopewell Clinic", 
      location: "Opposite Bus Stand, Guwahati", 
      contact: "+91 361 900 0012", 
      mapUrl: "https://www.google.com/maps?q=Hopewell+Clinic+Guwahati" 
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-md mx-auto md:max-w-2xl md:p-6">
      {/* Header */}
      <div className="flex items-center mb-4 gap-2">
        <HospitalIcon className="text-[#236a68]" size={24} />
        <h2 className="font-bold text-lg md:text-xl text-gray-800">
          Nearby Hospitals
        </h2>
      </div>

      <p className="text-gray-500 text-sm md:text-base mb-3">
        Mentioned below are some nearby hospitals in your area.
      </p>

      {/* Hospital List */}
      <div className="space-y-2">
        {hospitalData.map((hospital, i) => (
          <div
            key={i}
            onClick={() => window.open(hospital.mapUrl, "_blank")}
            className="cursor-pointer border border-gray-200 py-2 px-3 rounded-2xl bg-[#f8f8f8] hover:bg-[#ececec] transition flex flex-col sm:flex-row sm:justify-between sm:items-center"
          >
            <div className="flex flex-col sm:flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Pill className="text-[#236a68]" size={16} />
                <span className="font-semibold text-gray-900 text-sm md:text-base">
                  {hospital.name}
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-700 text-sm">
                <MapPin size={14} />
                <span>{hospital.location}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-700 text-sm">
                <Phone size={14} />
                <a
                  href={`tel:${hospital.contact}`}
                  className="hover:underline text-blue-600"
                  onClick={(e) => e.stopPropagation()}
                >
                  {hospital.contact}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-5 w-full bg-[#236a68] text-white font-semibold py-2 rounded-lg hover:bg-[#1e5958] hover:scale-102 transition"
      >
        ← Back
      </button>
    </div>
  );
};

export default Hospital;
