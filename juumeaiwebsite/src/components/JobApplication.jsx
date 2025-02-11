"use client";

import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaFileUpload, FaTwitter, FaGithub, FaLinkedin,
  FaGlobe, FaEnvelope, FaPhone, FaLocationArrow, FaBuilding,
  FaUser, FaCheckCircle
} from "react-icons/fa";

const JobApplication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const job = location.state?.job;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    company: "",
    linkedin: "",
    portfolio: "",
    github: "",
    twitter: "",
  });

  const [loading, setLoading] = useState(false);
  const formRef = useRef(null); 

  if (!job) {
    return (
      <div className="text-center text-2xl text-red-500 mt-20">
        No job details available.
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formDataToSend = new FormData(formRef.current);
  
    try {
      const response = await fetch("https://formspree.io/f/xjkgonna", {
        method: "POST",
        body: formDataToSend,
        headers: {
          "Accept": "application/json",
        },
      });
  
      const result = await response.json();
      if (response.ok) {
        setLoading(false);
        navigate("/thank-you"); 
      } else {
        setLoading(false);
        alert(result.error || "Something went wrong, please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="bg-white min-h-screen">

      <div className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md px-12 py-6 flex flex-col md:flex-row justify-between items-center border-b">
        <button className="text-[#17194c] hover:text-[#273184] transition font-semibold text-lg" onClick={() => navigate(-1)}>
          ← Back to Job Details
        </button>

        <h1 className="text-5xl font-extrabold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent text-center">
          {job.title}
        </h1>
      </div>

      <div className="px-12 py-16">
        <form
          ref={formRef}
          action="https://formspree.io/f/xjkgonna"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="max-w-5xl mx-auto bg-gray-100 shadow-lg rounded-lg p-10 space-y-8"
        >

          <input type="hidden" name="job_title" value={job.title} />

          <h2 className="text-3xl font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent">
            Personal Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center border px-4 py-3 rounded-lg bg-white">
              <FaUser className="text-[#273184] mr-3" />
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" className="w-full outline-none" required />
            </div>

            <div className="flex items-center border px-4 py-3 rounded-lg bg-white">
              <FaEnvelope className="text-[#273184] mr-3" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" className="w-full outline-none" required />
            </div>

            <div className="flex items-center border px-4 py-3 rounded-lg bg-white">
              <FaPhone className="text-[#273184] mr-3" />
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" className="w-full outline-none" required />
            </div>

            <div className="flex items-center border px-4 py-3 rounded-lg bg-white">
              <FaLocationArrow className="text-[#273184] mr-3" />
              <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location *" className="w-full outline-none" required />
            </div>

            <div className="flex items-center border px-4 py-3 rounded-lg bg-white">
              <FaBuilding className="text-[#273184] mr-3" />
              <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Current company" className="w-full outline-none" />
            </div>
          </div>

          <h2 className="text-3xl font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent">
            Upload Your Resume
          </h2>
          <div className="relative border px-4 py-3 rounded-lg flex items-center bg-white">
            <FaFileUpload className="text-[#273184] text-lg mr-3" />
            <input type="file" name="resume" className="w-full" required />
          </div>

          <h2 className="text-3xl font-semibold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent">
            Social & Portfolio Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center border px-4 py-3 rounded-lg bg-white">
              <FaLinkedin className="text-blue-600 mr-3" />
              <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn URL" className="w-full outline-none" />
            </div>

            <div className="flex items-center border px-4 py-3 rounded-lg bg-white">
              <FaGlobe className="text-[#273184] mr-3" />
              <input type="text" name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="Portfolio URL" className="w-full outline-none" />
            </div>

            <div className="flex items-center border px-4 py-3 rounded-lg bg-white">
              <FaGithub className="text-black mr-3" />
              <input type="text" name="github" value={formData.github} onChange={handleChange} placeholder="GitHub URL" className="w-full outline-none" />
            </div>

            <div className="flex items-center border px-4 py-3 rounded-lg bg-white">
              <FaTwitter className="text-blue-400 mr-3" />
              <input type="text" name="twitter" value={formData.twitter} onChange={handleChange} placeholder="Twitter URL" className="w-full outline-none" />
            </div>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="mt-4 px-8 py-3 bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] text-white rounded-lg font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
              {loading ? "Submitting..." : <><FaCheckCircle className="text-white text-lg" /> Submit Application</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplication;