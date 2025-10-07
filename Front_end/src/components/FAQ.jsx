import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What is Seva app?",
      answer:
        "Seva is a health support hub that provides information about nearby hospitals, helplines, government schemes, and viral illness guidance.",
    },
    {
      question: "How can I contact emergency services?",
      answer:
        "You can visit the Helpline section of the app to find health, police, and other emergency numbers which are clickable to dial directly.",
    },
    {
      question: "Does the app provide doctor consultation?",
      answer:
        "Currently, the app provides information about hospitals and helplines only. Consultation services are not included yet.",
    },
    {
      question: "How do I navigate to a hospital location?",
      answer:
        "On the Hospitals page, click on a hospital card to view its Google Maps location for easy navigation.",
    },
    {
      question: "Are the government schemes updated regularly?",
      answer:
        "Yes, the Schemes page lists active government programs and is regularly updated with new schemes and details.",
    },
    {
      question: "Can I view information offline?",
      answer:
        "Basic static information like FAQs and list of schemes can be viewed offline, but map navigation and helpline calling require internet or network connection.",
    },
    {
      question: "How do I report a cybercrime?",
      answer:
        "You can find cybercrime helpline numbers in the Helpline section. For emergencies, contact the Cyber Crime Helpline 1930.",
    },
    {
      question: "Does the app provide information about viral illnesses?",
      answer:
        "Yes, the Viral Illness page provides common symptoms, preventive measures, and guidance on when to see a doctor.",
    },
    {
      question: "Is my personal data safe in the app?",
      answer:
        "Yes, Seva does not collect sensitive personal information. Any data you provide for login or usage is handled securely.",
    },
    {
      question: "Can I share helpline numbers with others?",
      answer:
        "Yes, you can share the helpline numbers directly from the Helpline page using your phone's sharing options.",
    },
    {
      question: "How do I access regional hospital information?",
      answer:
        "The Hospitals page lists major hospitals in your city. Click on each hospital for detailed address and Google Maps navigation.",
    },
    {
      question: "Who can I contact for government welfare schemes?",
      answer:
        "The Schemes page provides official helpline numbers and website links for all government health and welfare programs.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-3 bg-[#f7f7f7] hover:bg-[#ececec] transition"
            >
              <span className="flex-1 text-left text-gray-800 font-medium text-[13px]">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-gray-600" size={18} />
              ) : (
                <ChevronDown className="text-gray-600" size={18} />
              )}
            </button>

            {openIndex === index && (
              <div className="p-3 text-gray-700 text-sm bg-white">
                {faq.answer}
              </div>
            )}
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

export default FAQ;
