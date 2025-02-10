"use client"

import { useState , useEffect} from "react"
import BlogPost from "./BlogPosts"
import AIImage from "../images/AI.png"

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const featuredBlogs = [
    {
      id: "ai-governance-the-way-forward",
      title: "AI Governance - The Way Forward",
      date: "2025-02-02",
      image: AIImage,
      content: `The emergence of deepfakes on the internet sparked widespread outrage due to their malicious use,particularly in creating artificially generated, inappropriate videos targeting women and children. However, as social media users, we've grown accustomed to doing a double take on videos to verify their authenticity,as many are now AI-generated. Just a year or two ago, these videos were easily identifiable as poor imitations of real life, but the rapid advancement of technology and algorithms has accelerated their development, making regulation increasingly necessary.

The European Union (EU) has taken a significant step in this direction by introducing an extensive regulatory framework for artificial intelligence (AI) in March 2024. This framework categorizes AI products into four risk categories: unacceptable, high, limited, and minimal risk [1]. Non-compliance with the rules or providing false information about AI products can result in substantial fines. While this framework currently applies to corporate-level AI tools, it exempts AI used for personal or scientific research purposes [2].

While not as thorough, China has also pioneered regulations on generative AI use, introducing laws in 2023 to ensure the coexistence of safety and innovation. These laws prohibit the use of AI to spread illegitimate information that can threaten the economy or national security. In response to the popularity of deepfakes, China has also introduced the deep synthesis regulation, which requires synthetic content to be explicitly labeled as artificial [3].

Regarding Large Language Models (LLMs), the Generative AI regulation stipulates that training data and generated content must strive for truthfulness. However, the hallucinatory nature of these models makes it challenging to guarantee accuracy. Lawmakers have acknowledged this limitation and are modifying regulations based on feedback from the developing field [4].

In the United States, former President Joe Biden signed an executive order in 2023, "Safe, Secure, and Trustworthy Development and Use of AI [5]," which encouraged the creation of safe AI tools and recruitment of AI talent while cautioning against algorithmic bias and security risks [6]. Although this order was rescinded, individual states have begun to pass laws that will soon take effect. For example, California will require developers to maintain transparency about the data used to train their models and explicitly label interactions with bots as artificial by 2026 [7].

Despite the pervasive presence of AI in modern culture, many governments have yet to follow the EU's lead in passing regulatory acts at the federal level. The rapid pace of innovation in AI demands urgent attention from lawmakers to ensure that the benefits of AI are realized while minimizing its risks.`,
references: [
    {
      text: "European Union's Artificial Intelligence Act",
      url: "https://artificialintelligenceact.eu/high-level-summary/",
    },
    {
      text: "European Commission's Digital Strategy",
      url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
    },
    {
      text: "China's Regulations",
      url: "https://www.oxfordmartin.ox.ac.uk/events/chinas-deepfake-regulations",
    },
    {
      text: "China's AI Regulations",
      url: "https://carnegieendowment.org/research/2023/07/chinas-ai-regulations-and-how-they-get-made?lang=en",
    },
    {
      text: "NIST: Safe, Secure, and Trustworthy AI",
      url: "https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-artificial-intelligence",
    },
    {
      text: "Safe, Secure, and Trustworthy Development and Use of AI Measures",
      url: "https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence",
    },
    {
      text: "US State-by-State AI Legislation Snapshot",
      url: "https://www.bclplaw.com/en-US/events-insights-news/us-state-by-state-artificial-intelligence-legislation-snapshot.html",
    },
  ],
},
  ]

  if (selectedBlog) {
    return <BlogPost blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
  }

  return (
    <div className="bg-white min-h-screen py-12 text-black">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title Animation */}
        <h1
          className={`text-6xl font-extrabold text-center bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent transition-opacity transform ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } duration-700`}
        >
          Blogs
        </h1>
        <br />

        {/* Featured Blogs Section Animation */}
        <h2
          className={`text-5xl font-semibold mb-6 bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent transition-opacity transform ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } duration-1000 delay-200`}
        >
          Featured Blogs
        </h2>

        {/* Blogs Grid with Staggered Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`relative cursor-pointer group transition-transform duration-500 ${
                animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
              } delay-${index * 200}`}
              onClick={() => setSelectedBlog(blog)}
            >
              {/* Blog Image */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-gray-300 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:brightness-75"
                />
              </div>

              {/* Blog Title */}
              <div className="mt-3 inline-block px-4 py-2 rounded-full font-semibold text-md bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] text-white transition-transform duration-500 group-hover:scale-110">
                {blog.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;