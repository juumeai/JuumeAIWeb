"use client"
import { MdRocketLaunch } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { useEffect, useState } from "react"
import team from "../images/team.jpg"
const AboutUs = () => {
  const [viewedSections, setViewedSections] = useState([])

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-section");
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setViewedSections((prev) => {
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coreValues = [
    {
      "title": "Empower Through Vision",
      "description": "We create transformative solutions that empower our customers to dream bigger, achieve more, and shape the future with confidence.",
    },
    {
      "title": "Integrity in Every Action",
      "description": "Trust is earned, not given. We hold ourselves to the highest standards of ethics and transparency, ensuring every decision builds unshakable trust.",
    },
    {
      "title": "Fearless Innovation",
      "description": "We push boundaries, embrace bold ideas, and turn impossible challenges into opportunities that redefine industries.",
    },
    {
      "title": "Ownership with Purpose",
      "description": "Every voice matters, and every contribution shapes our journey. We take pride in our work, owning our impact on the world.",
    },
    {
      "title": "Trustworthy by Design",
      "description": "From security to ethics, trust is the foundation of everything we build. Our commitment to responsible technology ensures we create solutions that are safe, reliable, and transformative.",
    },
    {
      "title": "Power in Uniqueness",
      "description": "Our power comes from embracing individuality and bold ideas. By uniting distinct strengths, we ignite creativity, inspire innovation, and achieve greatness together.",
    },
    {
      "title": "Driven by Curiosity",
      "description": "We are lifelong learners and relentless explorers, constantly seeking to improve, adapt, and stay ahead in a world of endless possibility.",
    },
    {
      "title": "Results That Resonate",
      "description": "We don't just aim for results; we create lasting impact. Our work drives growth, inspires trust, and transforms the way businesses and people thrive.",
    },
    {
      "title": "Courage to Lead",
      "description": "We are unafraid to disrupt the status quo, challenge assumptions, and pioneer new paths that others have yet to imagine.",
    },
    {
      "title": "Scale with Purpose",
      "description": "We empower businesses to grow responsibly and sustainably, creating scalable solutions that deliver both immediate results and enduring value.",
    },
  ]

  return (
    <div className="bg-white">

      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-5xl font-bold text-left bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent md:w-1/2">Who are we?</h1>
          <p className="md:w-1/2 text-black font-semibold text-lg mt-4 md:mt-0">
            At Juume, building smarter, safer AI isn't just a vision—it's a reality.
          </p>
        </div>
        <div className="flex justify-center py-10">
          <img
            src={team}
            alt="Our diverse team smiling together in the office"
            className="rounded-lg shadow-lg w-full max-w-4xl object-cover"
          />
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold text-center bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-12">
          What Builds and Drives Us
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 relative">
          <div className="relative bg-white p-6 rounded-lg shadow-md text-center w-80 animate-flowGlow">
            <MdRocketLaunch className="text-[#273184] text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Mission</h3>
            <p className="text-black font-semibold">
              We empower enterprises with innovative tools that seamlessly integrate cybersecurity, global compliance, and Responsible AI principles.
            </p>
          </div>

          <div className="hidden md:block w-16 h-1 bg-[#273184] animate-lineFlow"></div> 
          <div className="md:hidden w-1 h-12 bg-[#273184] animate-lineFlow"></div> 

          <div className="relative bg-white p-6 rounded-lg shadow-md text-center w-80 animate-flowGlow">
            <FaEye className="text-[#273184] text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Vision</h3>
            <p className="text-black font-semibold">
              We envision a world where enterprises seamlessly and securely deploy AI at the edge, integrating compliance frameworks for ethical AI.
            </p>
          </div>

          <div className="hidden md:block w-16 h-1 bg-[#273184] animate-lineFlow"></div>
          <div className="md:hidden w-1 h-12 bg-[#273184] animate-lineFlow"></div> 

          <div className="relative bg-white p-6 rounded-lg shadow-md text-center w-80 animate-flowGlow">
            <TbTargetArrow className="text-[#273184] text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Purpose</h3>
            <p className="text-black font-semibold">
              We create a future where AI operates with trust, transparency, and accountability, ensuring ethical innovation.
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes flowGlow {
            0% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.4); }
            100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.8); }
          }
          .animate-flowGlow {
            animation: flowGlow 2s infinite alternate;
          }

          @keyframes lineFlow {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
          @keyframes lineFlowVertical {
            0% { transform: scaleY(0); }
            100% { transform: scaleY(1); }
          }
          .animate-lineFlow {
            animation: lineFlow 1.5s ease-in-out forwards;
          }
          .md:hidden .animate-lineFlow {
            animation: lineFlowVertical 1.5s ease-in-out forwards;
          }
        `}</style>
    </section>

    <section className="container mx-auto px-6 py-16 relative">
      <h2 className="text-4xl font-semibold text-center bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-12">
        Core Values That Shape Our Community
      </h2>

      <div className="relative ml-6">
        <div className="absolute left-[-2px] top-0 w-1 h-full bg-gradient-to-b from-[#17194c] to-[#273184] animate-glowTimeline" />

        {coreValues.map((value, index) => (
          <div
            key={index}
            className={`fade-section relative pl-6 pb-10 transition-opacity duration-700 ease-in-out transform ${
              viewedSections.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className={`absolute w-6 h-6 rounded-full left-[-14px] top-2 transition-all duration-500 ${
                viewedSections.includes(index) ? "bg-[#273184] animate-glowCircle" : "bg-[#273184]"
              }`}
            />

            <div className="bg-gradient-to-b from-[#17194c] to-[#273184] rounded-lg border-2 border-[#d5e33c] p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-white">{value.title}</h3>
              <p className="text-white text-xl font-semibold leading-relaxed">{value.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes glowTimeline {
          0% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.4); }
          50% { box-shadow: 0 0 25px rgba(99, 102, 241, 0.8); }
          100% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.4); }
        }
        .animate-glowTimeline {
          animation: glowTimeline 1.5s infinite alternate;
        }

        @keyframes glowCircle {
          0% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.6); }
          50% { box-shadow: 0 0 20px rgba(255, 255, 255, 1); }
          100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.6); }
        }
        .animate-glowCircle {
          animation: glowCircle 1.5s infinite alternate;
        }
      `}</style>
    </section>

      {/* Advisors Section */}
    {/* <section className="container mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-10">Our Advisors</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#273184] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-black">Image</p>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold">Name</h3>
          </div>
        ))}
      </div>
    </section> */}

    {/* Infinite Scrolling "Backed By" Section with Gradient */}
    {/* <section className="relative py-16">
      <div className="absolute inset-0"/>

      <div className="container mx-auto px-6 relative">
        <h2 className="text-lg font-semibold text-black text-center mb-10">Proud to be backed up by</h2>

        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          {/* <div className="absolute left-0 top-0 w-50 h-full bg-gradient-to-r from-gray-100 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-50 h-full bg-gradient-to-l from-gray-100 to-transparent z-10" /> */}

          {/* Scrolling Content */}
          {/* <div className="relative">
            <p className="text-5xl text-center font-bold text-[#273184] animate-pulse">
              Coming Soon...
            </p>
          </div>  */}

          {/* <div className="flex overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="mx-8 w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center flex-shrink-0"
                >
                  <p className="text-gray-400">Logo</p>
                </div>
              ))}
            </div>
            <div className="flex animate-scroll whitespace-nowrap">
              {[...Array(12)].map((_, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="mx-8 w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center flex-shrink-0"
                >
                  <p className="text-gray-400">Logo</p>
                </div>
              ))}
            </div>
          </div> 
        </div>
      </div>
    </section> */}

    {/* Animation Styles
    <style jsx>{`
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      .animate-scroll {
        animation: scroll 40s linear infinite;
      }
      .animate-scroll:hover {
        animation-play-state: paused;
      }
    `}</style> */}
  </div>)
}

export default AboutUs