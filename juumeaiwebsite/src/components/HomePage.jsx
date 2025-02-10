"use client"
import { useState, useEffect, useRef } from "react"
import Wire from "../images/Wire.png"
import currentEnterprise from "../GIF/currentEnterprise.mov"
import JuumeEnterprise from "../GIF/JuumeAIEnterprise.mov"

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  const items = [
    { name: "AI Framework (US)", angle: 0 },
    { name: "Local/State", angle: 51.42 },
    { name: "Correlation/Inference", angle: 102.84 },
    { name: "Predictive Analysis", angle: 154.26 },
    { name: "EU Act", angle: 205.68 },
    { name: "Alerting", angle: 257.1 },
    { name: "Real Time Updates", angle: 308.52 },
  ]

  const descriptions = {
    "AI Framework (US)":
      "The U.S. AI framework standards are primarily guided by the National Institute of Standards and Technology (NIST) AI Risk Management Framework (AI RMF), which provides voluntary guidelines for developing trustworthy AI systems. This framework emphasizes transparency, fairness, security, and accountability, helping organizations manage AI risks while fostering innovation.",
    "Local/State":
      "In the absence of a comprehensive federal AI law, U.S. state and local governments have introduced various AI regulations to address transparency, bias, and accountability. States like Illinois, California, and New York have enacted laws focusing on AI in hiring, consumer protection, and surveillance, requiring disclosure impact and assessments.",
    "Correlation/Inference":
      "Correlation and inference play a crucial role in detecting and mitigating threats by analyzing relationships between seemingly unrelated data points. Correlation engines aggregate security alerts, log data, and network activity to identify patterns indicative of potential attacks, such as adversarial manipulation or data poisoning.",
    "Predictive Analysis":
      "Predictive analysis is a vital component of securing AI, enabling cyber companies to anticipate and mitigate threats before they materialize. By leveraging machine learning and historical threat intelligence, predictive analysis identifies patterns, anomalies, and potential vulnerabilities within AI systems.",
    "EU Act":
      "The EU AI Act is the world's first comprehensive legal framework regulating artificial intelligence, aiming to ensure AI systems are safe, transparent, and aligned with fundamental rights. Adopted by the European Union, it categorizes AI applications based on risk levels—unacceptable, high, limited, and minimal risk—with stricter requirements for high-risk AI in areas like healthcare, law enforcement, and critical infrastructure.",
    Alerting:
      "Alerting is a critical function that detects and notifies security teams of potential threats in real time. A cyber company securing AI systems implements advanced threat detection, anomaly monitoring, and behavioral analytics to identify malicious activities, such as adversarial attacks or unauthorized data access.",
    "Real Time Updates":
      "Real-time updates and controls are essential for securing AI, ensuring systems remain resilient against emerging cyber threats. Cyber companies implement continuous monitoring and automated patching to detect vulnerabilities and deploy security updates without disrupting AI operations.",
  }

  const bubbleSizes = useRef(items.reduce((acc, item) => ({ ...acc, [item.name]: 150 }), {}))

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const Timeline = () => (
    <div className="max-w-3xl mx-auto px-4">
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.name} className="flex group">
            <div className="flex flex-col items-center mr-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-purple-600 bg-white group-hover:bg-purple-600 transition-colors duration-300">
                <div className="w-3 h-3 rounded-full bg-purple-600 group-hover:bg-white" />
              </div>
              {index !== items.length - 1 && (
                <div className="w-0.5 h-full bg-purple-200 group-hover:bg-purple-600 transition-colors duration-300" />
              )}
            </div>
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-black mb-2">{item.name}</h3>
              <p className="text-black font-semibold">{descriptions[item.name]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const CircleDiagram = () => {
    const [hovered, setHovered] = useState(null)

    const getTooltipPosition = (angle) => {
      const isRight = angle < 90 || angle > 270
      const isTop = angle > 0 && angle < 180
      return {
        [isRight ? "left" : "right"]: "100%",
        [isTop ? "top" : "bottom"]: "50%",
        transform: `translate(${isRight ? "20px" : "-420px"}, ${isTop ? "-50%" : "50%"})`,
      }
    }

    return (
      <div className="relative w-full max-w-[800px] h-[800px] flex justify-center items-center border-2 border-slate-900 rounded-full mx-auto mt-16 bg-gradient-to-b from-[#17194c] to-[#273184] shadow-lg">
        {/* Center Text */}
        <p className="absolute text-white font-semibold text-center w-64 text-xl">
          Let's define key terms for better understanding.
        </p>

        {/* Bubbles */}
        {items.map((item) => {
          const radius = 400
          const size = bubbleSizes.current[item.name]
          const angleInRadians = (item.angle * Math.PI) / 180
          const x = Math.cos(angleInRadians) * (radius - size / 2)
          const y = Math.sin(angleInRadians) * (radius - size / 2)

          return (
            <div
              key={item.name}
              className="absolute"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `calc(50% + ${y}px - ${size / 2}px)`,
                left: `calc(50% + ${x}px - ${size / 2}px)`,
              }}
            >
              <div
              className={`flex flex-col items-center justify-center border-4 border-[#d5e33c] rounded-full text-black cursor-pointer text-center text-sm font-semibold hover:scale-110 transition-all duration-300 animate-float
              ${hovered === item.name ? "shadow-2xl scale-125 ring-4 ring-yellow-300 bg-gradient-to-br from-[#d5e33c] via-yellow-300 to-[#d5e33c]" : "bg-white"}`}
              style={{
                width: "100%",
                height: "100%",
                boxShadow: hovered === item.name ? "0px 0px 30px rgba(0,0,0,0.5)" : "none",
              }}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="px-2">{item.name}</span>
            </div>

              {/* Floating Tooltip */}
              {hovered === item.name && (
                <div
                  className="absolute bg-white border-2 border-[#d5e33c] text-black text-md font-semibold px-6 py-3 rounded-lg shadow-lg w-[400px] text-left z-50 animate-float"
                  style={getTooltipPosition(item.angle)}
                >
                  <b>{item.name}:</b> {descriptions[item.name]}
                </div>
              )}
            </div>
          )
        })}

        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between py-12">
          <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight relative">
              <span className="bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent relative z-10">
                Secure AI, Powered
                <br /> by Compliance
              </span>
            </h1>
            <p className="mt-4 text-black font-semibold text-lg sm:text-lg lg:w-[85%]">
              Juume secures your AI with advanced cybersecurity and seamless compliance. We empower businesses to
              innovate responsibly, stay protected, and lead with confidence.
            </p>
          </div>

          {/* Wire Image - Hidden below 1022px */}
          <div className="hidden lg:flex w-[55%] justify-end">
            <img
              src={Wire || "/placeholder.svg"}
              alt="AI Wire Graphic"
              className="w-[120%] max-w-[1000px] object-contain"
            />
          </div>
        </section>

        {/* How Juume Secures AI */}
        <section className="text-center py-12">
          <h2 className="text-3xl sm:text-3xl font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-12">
            How Juume Secures Your AI - At a Glance
          </h2>

          {/* Video Section */}
          <div className="flex flex-col items-center space-y-12 px-4 sm:px-6 lg:px-12 mt-12 pb-16">
            {/* Video 1 */}
            <div className="relative w-full max-w-4xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-lg shadow-lg border border-slate-900"
                preload="auto"
              >
                <source src={JuumeEnterprise} type="video/mp4" />
                <source src={JuumeEnterprise} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video 2 */}
            <div className="relative w-full max-w-4xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-lg shadow-lg border border-slate-900"
                preload="auto"
              >
                <source src={currentEnterprise} type="video/mp4" />
                <source src={currentEnterprise} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Circle Diagram or Timeline */}
          <div className="mt-32">{windowWidth >= 1550 ? <CircleDiagram /> : <Timeline />}</div>
        </section>

        {/* Additional spacing before footer */}
        <div className="h-24"></div>
      </div>
    </div>
  )
}

export default HomePage