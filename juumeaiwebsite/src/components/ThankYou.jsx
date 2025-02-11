import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <h1 className="text-5xl font-extrabold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-4 animate-fadeIn">
        🎉 Thank You for Your Application!
      </h1>
      <p className="text-lg text-black font-semibold mb-8 max-w-xl animate-fadeIn delay-200">
        We appreciate your interest in joining our team. Our hiring team will review your application and get in touch with you soon.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => navigate("/about-us")} 
          className="px-6 py-3 text-lg font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] text-white rounded-lg shadow-md hover:opacity-90 transition transform hover:scale-105 animate-slideUp"
        >
          Learn More About Us
        </button>
        
        <button 
          onClick={() => navigate("/open-positions")} 
          className="px-6 py-3 border border-gray-400 text-black font-semibold rounded-lg shadow-sm hover:bg-gray-100 transition transform hover:scale-105 animate-slideUp delay-200"
        >
          Back to Careers
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default ThankYou;