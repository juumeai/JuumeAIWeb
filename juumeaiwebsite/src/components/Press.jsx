import { useNavigate } from "react-router-dom";

const Press = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-6 sm:px-12">
      {/* Title */}
      <h1
        className="text-7xl font-extrabold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-12 opacity-0 animate-fade-in"
      >
        Press
      </h1>

      {/* Content Section */}
      <div className="flex flex-col items-center space-y-8 text-center max-w-3xl">
        <p className="text-2xl font-semibold leading-relaxed opacity-0 animate-slide-up">
          For press inquiries, interview requests, or collaboration opportunities, please reach out to our media team.
          We’re excited to share our journey and innovations with you!
        </p>

        {/* Navigate to Contact Us Page */}
        <button
          onClick={() => navigate("/contact-us")}
          className="text-3xl font-bold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition transform opacity-0 animate-slide-up delay-200"
        >
          press@juumeai.com
        </button>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Press;