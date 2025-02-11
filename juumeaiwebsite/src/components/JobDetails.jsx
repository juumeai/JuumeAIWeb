import { useLocation, useNavigate } from "react-router-dom"

const JobDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const job = location.state?.job

  if (!job) {
    return <div className="text-center text-2xl text-red-500 mt-20">No job details available.</div>
  }

  return (
    <div className="bg-white min-h-screen pt-20">
      {" "}
      <div className="sticky top-20 left-0 right-0 z-50 bg-white shadow-md px-12 py-6 flex flex-col md:flex-row justify-between items-center border-b">
        <button
          className="text-[#17194c] hover:text-[#273184] transition font-semibold text-lg"
          onClick={() => navigate("/open-positions")}
        >
          ← Back to Open Positions
        </button>

        <h1 className="text-5xl font-extrabold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent text-center">
          {job.title}
        </h1>

        <button
          className="px-6 py-3 bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] text-white rounded-lg font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl"
          onClick={() => navigate("/job-application", { state: { job } })}
        >
          Apply Now
        </button>
      </div>
      <div className="px-12 pt-10">
        <p className="text-xl text-gray-700 italic">
          {job.location} • {job.type}
        </p>
      </div>
      <div className="px-12 py-8 text-lg font-semibold leading-relaxed w-full">
        <h2 className="text-3xl font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-4">
          About The Company
        </h2>
        <p className="text-black leading-relaxed">
          At Juume AI, we provide a unified security solution for all AI systems—Agentic, LLMs, and Open Source—designed
          to meet the highest enterprise standards out of the box. Our flexible framework aligns with state, DoD, and
          NIST AI security standards, ensuring consistent protection and eliminating the worry of disparate products
          applying different controls. Our platform delivers real-time threat detection and compliance, unifies AI
          agents into a cohesive system, and offers advanced capabilities like causality modeling, behavioral analysis,
          and risk alerts. Our goal at Juume AI is to empower enterprises to bring AI to the forefront of business in an
          easy, quick, and most importantly, secure manner without concern. AI will usher in a new IT frontier, and at
          Juume AI, we are pushing the boundaries with organizations to make this happen.
        </p>
        <br />
        <h2 className="text-3xl font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-4">
          About The Role
        </h2>
        <p className="text-black leading-relaxed">{job.description}</p>

        {job.responsibilities && (
          <>
            <h2 className="text-3xl font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mt-8 mb-4">
              What You'll Be Doing
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {job.requirements && (
          <>
            <h2 className="text-3xl font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mt-8 mb-4">
              What You Need
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {job.niceToHave && (
          <>
            <h2 className="text-3xl font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mt-8 mb-4">
              Nice to Have
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              {job.niceToHave.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {job.technologies && (
          <>
            <h2 className="text-3xl font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mt-8 mb-4">
              Technologies You'll Work With
            </h2>
            <div className="flex flex-wrap gap-3">
              {job.technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-gray-200 text-black font-semibold rounded-lg shadow">
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default JobDetails

