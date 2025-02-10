"use client";

import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Jerrod from "../images/Jerrod.png";
import Uma from "../images/Uma.png";
import Tyson from "../images/Tyson.png";
import vasu from "../images/vasu.jpg"

const WhyJoinUs = () => {
  const navigate = useNavigate(); // React Router navigation

  const teamMembers = [
    { "name": "Jerrod McBride", 
      "role": "CEO", 
      "image": Jerrod,
      "linkedin":"https://www.linkedin.com/in/jerrod-mcbride/"
    },
    { "name": "Uma Natrajan", 
      "role": "CTO/COO", 
      "image": Uma,
      "linkedin":"https://www.linkedin.com/in/uma-natarajan/"
    },
    { "name": "Tyson R. Powell", 
      "role": "VP, Solutions", 
      "image": Tyson,
      "linkedin":"https://www.linkedin.com/in/tyson-powell-0a22031a5/"
    },
  ];

  return (
    <div className="bg-white min-h-screen text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
          <h1 className="text-6xl font-bold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent">
            Why join us?
          </h1>
          <p className="text-xl font-semibold md:w-1/2">
            At Juume, you'll work on cutting-edge technology, solve complex challenges, and help redefine what's possible 
            in AI security. We foster a collaborative, growth-focused environment where your ideas matter and your work drives 
            meaningful change.
          </p>
        </div>

        {/* Life at Juume Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-8">
            Life at Juume
          </h2>
          <p className="text-lg font-semibold">
            We foster a culture of innovation, collaboration, and purpose. Our team thrives on solving complex challenges in AI security 
            while maintaining a supportive and inclusive environment where every idea matters.
          </p>
        </section>

        {/* Testimonial Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <blockquote className="text-2xl font-semibold mb-4">
                "Working at Juume AI has been awesome! The team here is super talented and everyone is genuinely passionate about what they do. 
                The work environment is really flexible, which makes it easy to balance everything in my life."
              </blockquote>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#17194c]">
                <img
                  src={vasu}
                  alt="Employee testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Diversity and Inclusion Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-8">
            Diversity and Inclusion
          </h2>
          <p className="text-xl text-black font-semibold">
            We believe that diversity drives innovation and inclusion fosters collaboration. We are committed to building a workplace where 
            everyone feels valued, respected, and empowered to contribute their unique perspectives.
          </p>
        </section>

        {/* Meet The Team Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-12">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-40 h-40 rounded-full overflow-hidden border-4 border-[#273184] mb-4 transition-transform duration-300 hover:scale-110 shadow-lg"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </a>
                <h3 className="font-extrabold text-center text-black">{member.name}</h3>
                <p className="text-black font-semibold text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Find Positions Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/open-positions")} // Use navigate instead of onPageChange
            className="px-8 py-3 bg-[#17194c] text-white rounded-full flex items-center gap-3 font-semibold text-lg transition-all duration-300 hover:bg-[#273184] hover:shadow-lg group"
          >
            Find Positions
            <FiArrowRight
              size={20}
              className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;