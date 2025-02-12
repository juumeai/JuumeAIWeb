import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-200 text-black py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-12 mb-12">

          <div className="w-full sm:w-auto mb-8 sm:mb-0">
            <Link to="/home">
              <img src={logo} alt="JUUME AI Logo" className="h-14 w-auto mx-auto sm:mx-0" />
            </Link>
          </div>

          <div className="w-full sm:w-auto">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 text-center sm:text-left">

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">
                  <Link to="/home" className="hover:text-purple-700">
                    Home
                  </Link>
                </h3>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">
                  <Link to="/about-us" className="hover:text-purple-700">
                    About Us
                  </Link>
                </h3>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Solutions</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Use Cases", path: "/use-cases" },
                    { name: "AI Frameworks", path: "/ai-frameworks" },
                    { name: "Cybersecurity Frameworks", path: "/cybersecurity-frameworks" },
                    { name: "BYOP", path: "/byop" },
                  ].map(({ name, path }) => (
                    <li key={name}>
                      <Link to={path} className="text-black hover:text-purple-700">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Community</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Blogs", path: "/blogs" },
                    { name: "Podcasts", path: "/podcasts" },
                    { name: "Press", path: "/press" },
                  ].map(({ name, path }) => (
                    <li key={name}>
                      <Link to={path} className="text-black hover:text-purple-700">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Careers</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Why Join Us", path: "/why-join-us" },
                    { name: "Open Positions", path: "/open-positions" },
                  ].map(({ name, path }) => (
                    <li key={name}>
                      <Link to={path} className="text-black hover:text-purple-700">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">
                  <Link to="/contact-us" className="hover:text-purple-700">
                    Contact Us
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {[
            { icon: <FaInstagram size={24} />, href: "https://www.linkedin.com/company/juume-ai" },
            { icon: <FaFacebook size={24} />, href: "https://www.linkedin.com/company/juume-ai" },
            { icon: <FaYoutube size={24} />, href: "https://www.linkedin.com/company/juume-ai" },
            { icon: <FaXTwitter size={24} />, href: "https://www.linkedin.com/company/juume-ai" },
            { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/company/juume-ai" },
          ].map((social, index) => (
            <a key={index} href={social.href} className="text-black hover:text-purple-700">
              {social.icon}
            </a>
          ))}
        </div>

        <div className="text-center text-black text-sm">
          Welcome to JUUME AI. By accessing and using our website and services, you agree to comply with and be bound by
          the following Terms and Conditions. If you do not agree with any part of these terms, please do not use our
          services.
        </div>
      </div>
    </footer>
  );
};

export default Footer;