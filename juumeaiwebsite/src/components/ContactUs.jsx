"use client";

import { useState } from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://formspree.io/f/xzzdvnql", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formDataToSend,
      });

      if (response.ok) {
        setIsSubmitted(true); // Show "Thank You" Message
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-white py-24 px-8 sm:px-16">
      <div className="text-center mb-16">
        <h1 className="text-7xl font-extrabold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-2xl font-semibold text-black mt-3">
          We’d love to hear from you!
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        <div className="w-full md:w-1/2 bg-gray-100 p-12 rounded-2xl shadow-lg">
          {isSubmitted ? (
            <div className="text-center">
              <h2 className="text-5xl font-bold text-[#273184] mb-6">🎉 Thank You!</h2>
              <p className="text-xl text-[#273184] font-semibold">
                Your message has been sent successfully. We will get back to you soon.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-4xl font-bold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-8">Send Us A Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 px-5 py-4 rounded-lg focus:ring-2 focus:ring-[#273184] text-black text-xl"
                  placeholder="Your Name *"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 px-5 py-4 rounded-lg focus:ring-2 focus:ring-[#273184] text-black text-xl"
                  placeholder="Your Email *"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 px-5 py-4 rounded-lg focus:ring-2 focus:ring-[#273184] text-black text-xl"
                  placeholder="Phone (Optional)"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-2 px-5 py-4 rounded-lg focus:ring-2 focus:ring-[#273184] text-black text-xl"
                  rows="5"
                  placeholder="Your Message *"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] text-white rounded-lg font-bold text-xl shadow-md transition transform hover:scale-105 hover:shadow-xl"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </>
          )}
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-4xl font-bold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent">
            Our Contact Details
          </h2>

          <div className="flex items-center space-x-5 bg-gray-100 font-semibold text-black p-6 rounded-xl shadow-md text-xl">
            <FaPhone className="text-[#17194c] text-3xl" />
            <span>+1 (567) 349 4603</span>
          </div>
          <div className="flex items-center space-x-5 bg-gray-100 font-semibold text-black p-6 rounded-xl shadow-md text-xl">
            <FaMapMarkerAlt className="text-[#17194c] text-3xl" />
            <span>1984 Isaac Newton Square W Suite 202 Herndon, VA 20190</span>
          </div>

          <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.5854663738916!2d-77.34089792439199!3d38.95398257181562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6482ea03c8d23%3A0xd26dfda523f1af08!2s1934%20Isaac%20Newton%20Square%20W%20%23202%2C%20Reston%2C%20VA%2020190!5e0!3m2!1sen!2sus!4v1707639829421!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
      </div>

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