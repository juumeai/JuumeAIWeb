"use client";

import { FaShieldAlt, FaEye, FaLock, FaClipboardList, FaBalanceScale, FaCogs } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
const UseCases = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-6">
          Use Cases
        </h1>
        <p className="text-xl font-semibold text-center text-black max-w-3xl mx-auto">
          As organizations rapidly adopt AI-driven solutions: Agentic, Open Source, Self Built, etc, 
          the need for robust security and compliance frameworks has never been greater. Our enterprise-grade 
          platform provides full-spectrum security and compliance solutions tailored to the evolving AI landscape.
        </p>

        {/* Security Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-center bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent">Comprehensive AI Security</h2>
          <p className="text-xl font-semibold text-center text-black mt-4">
            Our platform ensures AI security through continuous monitoring, proactive threat detection, 
            and automated response mechanisms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white border-2 border-[#d5e33c] p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
                <div className="text-[#273184] text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl text-black font-bold">{feature.title}</h3>
                <p className="text-black font-semibold mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent">Regulatory Compliance Made Simple</h2>
          <p className="text-xl text-center font-semibold text-black mt-4">
            With an increasing number of AI regulations at federal, state, and local levels, ensuring compliance can be complex. 
            Our platform simplifies compliance management with:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="bg-white border-2 border-[#d5e33c]  p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
                <div className="text-[#273184] text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl text-black font-bold">{feature.title}</h3>
                <p className="text-black font-semibold mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Statement */}
        <section className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-xl text-black font-semibold">
            As AI continues to revolutionize industries, securing and regulating its use is paramount. 
            Our platform enables organizations to confidently deploy AI technologies while maintaining 
            the highest standards of security and compliance.
          </p>
        </section>
      </div>
    </div>
  );
};

// Security Features Data
const securityFeatures = [
  {
    title: "Real-Time Security Controls",
    description: "Dynamic safeguards to protect AI models, data, and workflows from emerging threats.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Threat Detection & Alerting",
    description: "AI-driven anomaly detection and instant alerts to mitigate security breaches before they escalate.",
    icon: <FaEye />,
  },
  {
    title: "End-to-End Data Protection",
    description: "Encryption, access control, and secure data handling to prevent unauthorized access and data leaks.",
    icon: <FaLock />,
  },
  {
    title: "Auditing & Reporting",
    description: "Detailed security logs and reports for internal review and regulatory compliance.",
    icon: <FaClipboardList />,
  },
];

// Compliance Features Data
const complianceFeatures = [
  {
    title: "Automated Compliance Mapping",
    description: "Alignment with standards like NIST AI RMF, ISO/IEC 42001, GDPR, and CCPA.",
    icon: <FaCogs />,
  },
  {
    title: "State & Local AI Acts Support",
    description: "Continuous updates for compliance with AI governance laws across jurisdictions.",
    icon: <FaBalanceScale />,
  },
  {
    title: "Customizable Compliance Frameworks",
    description: "Tailored solutions to meet industry-specific regulatory requirements.",
    icon: <GiProgression />,
  },
  {
    title: "Real-Time Compliance Monitoring",
    description: "Proactive tracking and enforcement of regulatory mandates to reduce compliance risk.",
    icon: <MdOutlineMonitor />,
  },
];

export default UseCases;