import { useState , useEffect} from "react";
import { FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NIST from "../images/NIST.png";
import California from "../images/California.png";
import EUAIAct from "../images/EUAIAct.png";
import Colorado from "../images/Colarado.png";
import ISO from "../images/ISO.png"

const frameworks = [
  {
    "id": "nist",
    "title": "NIST AI RMF",
    "image_src": NIST,
    "description": `The National Institute of Standards and Technology (NIST) has long been a leader in creating standards that drive innovation and safety across industries. With the release of NIST AI 100-1, they’ve laid the foundation for developing trustworthy artificial intelligence systems. This document 
                    focuses on establishing a cohesive framework for managing AI risks, ensuring transparency, fairness, accountability, and robustness in AI applications. By providing a clear roadmap for organizations, NIST AI 100-1 aims to address growing concerns around AI ethics, bias, and security. It emphasizes collaboration between policymakers, developers, and users to create AI systems that align with societal values and mitigate harm. For 
                    businesses and researchers alike, this standard is not just about compliance, it's a call to build AI solutions that prioritize human-centric innovation.`,
    "blog_link": "https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf",
  },
  {
    "id": "eu",
    "title": "EU AI Act",
    "image_src": EUAIAct,
    "description": `The European Union is leading the way in AI governance with the introduction of the EU AI Act, a landmark legislative proposal aimed at ensuring the safe and ethical use of artificial intelligence. This act establishes a risk-based framework, categorizing AI applications into four tiers: unacceptable risk, high risk, limited risk, and minimal risk. High-risk AI systems—such as those used in healthcare, law enforcement, and hiring 
                will be subject to stringent oversight, including mandatory transparency, fairness, and accountability measures. By addressing key issues like bias, discrimination, and data privacy, the EU AI Act seeks to protect fundamental rights while fostering innovation. For businesses, this act 
                signifies a shift toward responsible AI practices, offering a clear regulatory environment to ensure compliance and build trust. As the first comprehensive AI law in the world, the EU AI Act is setting a global precedent for how societies can balance technological progress with ethical responsibility.`,
    "blog_link": "https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence",
  },
  {
    "id": "iso",
    "title": "ISO 42001",
    "image_src": ISO,
    "description":`ISO (the International Organization for Standardization) and IEC (the International Electrotechnical Commission) form the specialized system for worldwide standardization. ISO/IEC 42001 is a standard focused on "Management of Artificial Intelligence (AI)". It provides guidelines for the governance, management, and application of AI technologies in organizations, aiming to ensure ethical, safe, and sustainable practices when using AI systems. The standard helps organizations manage risks associated with AI, ensuring that AI systems are aligned with ethical principles, legal frameworks, and societal needs. ISO/IEC 42001 aims to support organizations in developing AI systems that are both innovative and responsible, promoting trust in AI while minimizing negative impacts.`,
    "blog_link": "https://www.iso.org/obp/ui/en/#iso:std:iso-iec:42001:ed-1:v1:en",
  },
  {
    "id": "colorado",
    "title": "Colorado AI Law",
    "image_src": Colorado,
    "description":`In a significant move toward responsible artificial intelligence deployment, Colorado enacted Senate Bill 24-205 on May 17, 2024. Effective from February 1, 2026, this legislation mandates that developers and deployers of high-risk AI systems exercise reasonable care to shield consumers from known or foreseeable risks of algorithmic discrimination. Developers are required to provide detailed disclosures about their AI systems, supply 
                  necessary documentation for impact assessments, and publicly share summaries of their high-risk AI offerings and risk management strategies. Deployers must implement comprehensive risk management policies, conduct regular impact assessments, and offer consumers avenues to correct inaccuracies and appeal adverse decisions influenced by AI. 
                  Additionally, any entity deploying AI systems intended for consumer interaction must transparently inform users of their engagement with AI. The Colorado Attorney General holds exclusive enforcement authority, and 
                  violations are classified as deceptive trade practices under the Colorado Consumer Protection Act.`,
    "blog_link": "https://leg.colorado.gov/sites/default/files/2024a_205_signed.pdf",
  },
  {
    "id": "california",
    "title": "California AI Transparency Act",
    "image_src": California,
    "description":`California continues to lead the charge in technology regulation with the introduction of the California AI Transparency Act, a significant step toward enhancing accountability and trust in artificial intelligence systems. This legislation focuses on ensuring that automated systems, particularly those used by businesses and government entities, are transparent in their decision-making processes. By requiring clear disclosures when AI is used 
                  to make impactful decisions such as in hiring, lending, or public services, the act aims to empower individuals and promote fairness. It also mandates organizations to conduct regular audits to identify and mitigate potential 
                  biases, ensuring that AI systems align with ethical standards. For companies operating in California, this act highlights the importance of proactive compliance and responsible AI use, setting a high bar for transparency in the tech-driven economy. As other states and countries observe this pioneering move, the California AI Transparency Act could serve as a blueprint for wider AI governance in the future.`,
    "blog_link": "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB942",
  },
]

const AIFrameworks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to move to the previous framework
  const prevFramework = () => {
    setActiveIndex((prev) => (prev === 0 ? frameworks.length - 1 : prev - 1));
  };

  // Function to move to the next framework
  const nextFramework = () => {
    setActiveIndex((prev) => (prev === frameworks.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-8 min-h-screen text-black flex flex-col items-center w-full">
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-8">
        AI Frameworks & Standards
      </h2>

      {/* ✅ Tile Layout for Mobile Screens */}
      {isMobile ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className="w-full bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              {/* Image */}
              <img
                src={framework.image_src}
                alt={framework.title}
                className="rounded-lg shadow-lg max-w-full"
              />

              {/* Title */}
              <h3 className="text-3xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-[#17194c] to-[#d3b2f9]">
                {framework.title}
              </h3>

              {/* Description */}
              <p className="text-black text-md font-semibold mt-4">
                {framework.description}
              </p>

              {/* External Link */}
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
        /* ✅ Slider for Larger Screens */
        <div className="relative flex items-center justify-between w-full max-w-[90vw]">
          {/* Left Arrow Button - Placed Outside */}
          <button
            className="absolute left-[-60px] p-4 bg-[#17194c] text-white rounded-full shadow-md hover:scale-110 transition z-10"
            onClick={prevFramework}
          >
            <FaArrowLeft size={24} />
          </button>

          {/* Active Framework Details - Full Width */}
          <div className="w-full bg-white p-6 rounded-lg shadow-md flex flex-col lg:flex-row items-center gap-8">
            {/* Image Section - 50% Width */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={frameworks[activeIndex].image_src}
                alt={frameworks[activeIndex].title}
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>

            {/* Text Details Section - 50% Width */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#17194c] to-[#d3b2f9]">
                {frameworks[activeIndex].title}
              </h3>
              <p className="text-black text-lg font-semibold mb-4">
                {frameworks[activeIndex].description}
              </p>

              {/* External Link */}
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

          {/* Right Arrow Button - Placed Outside */}
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