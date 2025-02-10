import { Routes, Route , Navigate} from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import UseCases from "./components/UseCases";
import Blogs from "./components/Blogs";
import WhyJoinUs from "./components/WhyJoinUs";
import Podcasts from "./components/Podcasts";
import AIFrameworks from "./components/AIFrameworks";
import Press from "./components/Press";
import OpenPositions from "./components/OpenPositions";
import JobDetails from "./components/JobDetails";
import JobApplication from "./components/JobApplication";
import ThankYou from "./components/ThankYou";
import CyberFrameworks from "./components/CyberFrameworks";
import BYOP from "./components/BYOP";
import ContactUs from "./components/ContactUs";

const App = () => {
  const [isPageShort, setIsPageShort] = useState(false);

  useEffect(() => {
    const checkHeight = () => {
      const contentHeight = document.getElementById("page-content")?.offsetHeight || 0;
      const viewportHeight = window.innerHeight;
      setIsPageShort(contentHeight < viewportHeight - 200);
    };

    checkHeight();
    window.addEventListener("resize", checkHeight);
    return () => window.removeEventListener("resize", checkHeight);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="page-content" className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/ai-frameworks" element={<AIFrameworks />} />
          <Route path="/cybersecurity-frameworks" element={<CyberFrameworks />} />
           <Route path="/byop" element={<BYOP />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/why-join-us" element={<WhyJoinUs />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/press" element={<Press />} />
          <Route path="/open-positions" element={<OpenPositions />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/job-application" element={<JobApplication />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>

      {/* Footer dynamically positioned */}
      <div className={isPageShort ? "mt-auto" : ""}>
        <Footer />
      </div>
    </div>
  );
};

export default App;