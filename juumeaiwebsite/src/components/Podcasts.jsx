import React from "react";

export default function Podcasts() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Heading */}
      <h2 className="text-5xl font-extrabold bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent">
        Podcasts
      </h2>

      <br />
      <br />
      <br />

      {/* Coming Soon! */}
      <div className="relative">
        <p className="text-4xl font-bold text-black animate-pulse">
          Stay Tuned!
        </p>

        {/* Glowing effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-12 bg-gradient-to-r from-[#17194c] via-[#273184] to-[#d3b2f9] opacity-50 blur-lg rounded-lg animate-ping"></div>
        </div>
      </div>
    </div>
  );
}