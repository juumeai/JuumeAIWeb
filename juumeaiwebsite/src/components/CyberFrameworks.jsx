import { useState , useEffect} from "react";
import { FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NISTCyb from "../images/NISTCyb.png";
import SOC from "../images/SOC.png";
import CIS from "../images/CIS.png";
import ISOCyb from "../images/ISOCyb.png"

const frameworks = [
  {
    "id": "nist",
    "title": "NIST Cybersecurity Framework (CSF)",
    "image_src": NISTCyb,
    "description": `The NIST Cybersecurity Framework (CSF) is a risk-based approach to managing cybersecurity threats. It consists of five core functions: Identify, Protect, Detect, Respond, and Recover, helping organizations improve their security posture. Originally designed for U.S. critical infrastructure, it is now widely adopted across industries. The framework is flexible, allowing businesses to tailor security practices to their specific risks and needs.`,
    "blog_link": "https://www.nist.gov/cyberframework",
  },
  {
    "id": "iso",
    "title": "ISO/IEC 27001",
    "image_src": ISOCyb,
    "description":`The ISO/IEC 27001 standard provides a systematic approach to establishing, implementing, maintaining, and continuously improving an Information Security Management System (ISMS). It emphasizes risk assessment, security controls, and compliance, helping organizations safeguard sensitive data. ISO 27001 certification is recognized globally and is often required for companies handling confidential information, particularly in IT, finance, and healthcare sectors.`,
    "blog_link": "https://www.iso.org/isoiec-27001-information-security.html",
  },
  {
    "id": "cis",
    "title": "CIS Critical Security Controls (CIS CSC)",
    "image_src": CIS,
    "description":`The CIS Critical Security Controls (CIS CSC) is a set of 18 prioritized security best practices designed to defend against cyber threats. It focuses on fundamental protections, such as secure system configurations, access control, continuous monitoring, and vulnerability management. This framework is widely used by businesses, government agencies, and IT teams to strengthen cybersecurity with practical, actionable steps.`,
    "blog_link": "https://www.cisecurity.org/controls",
  },
  {
    "id": "soc",
    "title": "SOC 2 (Service Organization Control 2)",
    "image_src": SOC,
    "description":`SOC 2 is a cybersecurity and data protection standard developed by the American Institute of Certified Public Accountants (AICPA). It ensures that cloud service providers and technology companies follow strict controls related to security, availability, processing integrity, confidentiality, and privacy. SOC 2 compliance is essential for businesses handling customer data, proving they have strong safeguards in place to protect sensitive information.`,
    "blog_link": "https://us.aicpa.org/interestareas/frc/assuranceadvisoryservices/socforserviceorganizations",
  },
]

const AIFrameworks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevFramework = () => {
    setActiveIndex((prev) => (prev === 0 ? frameworks.length - 1 : prev - 1));
  };

  const nextFramework = () => {
    setActiveIndex((prev) => (prev === frameworks.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-8 min-h-screen text-black flex flex-col items-center w-full">
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-8">
        CyberSecurity Frameworks & Standards
      </h2>

      {isMobile ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className="w-full bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={framework.image_src}
                alt={framework.title}
                className="rounded-lg shadow-lg max-w-full"
              />

              <h3 className="text-3xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-[#17194c] to-[#d3b2f9]">
                {framework.title}
              </h3>

              <p className="text-black text-md font-semibold mt-4">
                {framework.description}
              </p>

              {framework.blog_link !== "#" && (
                <a
                  href={framework.blog_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 mt-4 border-2 border-[#d5e33c] bg-[#273184] text-white font-bold rounded-lg shadow-md hover:bg-[#17194c] transition"
                >
                  Learn More <FaExternalLinkAlt className="ml-2" />
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="relative flex items-center justify-between w-full max-w-[90vw]">
          <button
            className="absolute left-[-60px] p-4 bg-[#17194c] text-white rounded-full shadow-md hover:scale-110 transition z-10"
            onClick={prevFramework}
          >
            <FaArrowLeft size={24} />
          </button>

          <div className="w-full bg-white p-6 rounded-lg shadow-md flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={frameworks[activeIndex].image_src}
                alt={frameworks[activeIndex].title}
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#17194c] to-[#d3b2f9]">
                {frameworks[activeIndex].title}
              </h3>
              <p className="text-black text-lg font-semibold mb-4">
                {frameworks[activeIndex].description}
              </p>

              {frameworks[activeIndex].blog_link !== "#" && (
                <a
                  href={frameworks[activeIndex].blog_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border-2 border-[#d5e33c] bg-[#273184] text-white font-bold rounded-lg shadow-md hover:bg-[#17194c] transition"
                >
                  Learn More <FaExternalLinkAlt className="ml-2" />
                </a>
              )}
            </div>
          </div>

          <button
            className="absolute right-[-60px] p-4 bg-[#17194c] text-white rounded-full shadow-md hover:scale-110 transition z-10"
            onClick={nextFramework}
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AIFrameworks;