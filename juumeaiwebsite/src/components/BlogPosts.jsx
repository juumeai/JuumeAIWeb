"use client";

import AIImage from "../images/AI.png";

const BlogPost = ({ blog, onBack }) => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="relative w-full h-[500px]">
        <img
          src={blog.image || AIImage}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <button
            onClick={onBack}
            className="absolute top-6 left-6 bg-white px-4 py-2 text-black font-semibold border-2 border-black rounded-full hover:bg-black hover:text-white transition"
          >
            ← Back to Blogs
          </button>

          <h1 className="text-6xl font-extrabold text-center text-white">
            {blog.title}
          </h1>
        </div>
      </div>

      <div className="px-12 py-12 text-lg font-semibold leading-relaxed">
        {blog.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-6">{paragraph}</p>
        ))}
      </div>

      {blog.references && (
        <div className="px-12 py-6">
          <h2 className="text-3xl text-black font-semibold mb-4">References</h2>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            {blog.references.map((ref, index) => (
              <li key={index}>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#273184] text-xl font-semibold hover:text-[#17194c] transition"
                >
                  {ref.text}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default BlogPost;