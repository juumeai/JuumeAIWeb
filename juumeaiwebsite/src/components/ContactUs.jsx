"use client";

import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://formspree.io/f/xzzdvnql", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formDataToSend,
      });

      if (response.ok) {
        setShowNotification(true); // Show success notification
        setTimeout(() => setShowNotification(false), 5000); // Hide after 5s

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="relative min-h-screen bg-white py-12 px-6 sm:px-12 flex flex-col items-center">
      {/* Success Notification */}
      {showNotification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg text-center text-lg animate-fadeIn">
          ✅ Message Sent! We will get back to you soon.
        </div>
      )}

      {/* Heading */}
      <h1 className="text-6xl font-extrabold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-10 text-center">
        Get In Touch
      </h1>

      {/* Contact Form */}
      <div className="w-full max-w-6xl bg-white p-10 shadow-lg rounded-xl">
        <p className="text-black font-semibold text-2xl mb-8">Send Us A Message</p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-medium mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#273184] text-black"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-black font-medium mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#273184] text-black"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-black font-medium mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#273184] text-gray-800"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-black font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#273184] text-black"
              rows="6"
              placeholder="Share your thoughts with us..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] text-white rounded-lg font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;