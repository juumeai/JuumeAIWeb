import { useNavigate } from "react-router-dom";


const OpenPositions = ({ onJobSelect }) => {
  const navigate = useNavigate()
  const jobs = [
    {
      title: "Cloud Infrastructure Engineer",
      experience: "2+ Years",
      location: "Remote",
      type: "Full-time",
      description: `As a Cloud Infrastructure Engineer, you will play a key role in designing, building, and securing scalable cloud infrastructure using infrastructure-as-code and automation. Reporting to the engineering leadership, you will leverage your expertise in cloud platforms (AWS, GCP, Azure), Kubernetes, and CI/CD pipelines to optimize deployments and support AI-driven applications. Your proficiency in Terraform, Pulumi, and containerization will be instrumental in managing infrastructure, while your experience in security best practices and IAM policies will ensure robust protection of company and customer data. Join our team to drive innovation in cloud infrastructure and contribute to a dynamic, fast-paced environment.`,
      responsibilities: [
        "Build and operate JuumeAI's cloud infrastructure using infrastructure-as-code.",
        "Design and implement security controls for the cloud infrastructure to protect JuumeAI and customer data.",
        "Work closely with the product management team and engineering team to collaborate and meet their requirements.",
        "Continuously evaluate and enhance the design and establish an ongoing program to scale the platform to meet the expanding customer base.",
        "Securely deploy LLM models to production and manage the support of production environments.",
        "work across the teams to maximize productivity and support go-to market initiatives."
      ],
      requirements: [
        "2+ years of experience in cloud infrastructure engineering.",
        "Experience with cloud computing platforms: AWS, Google Cloud, or Azure. Especially setting up virtual networks, compute, storage etc.",
        "Experience managing cloud infrastructure as infrastructure-as-code (Terraform, Pulumi, Helm)",
        "Experience deploying and managing Kubernetes clusters.",
        "Strong programming skills in Go, Python.",
        "Experience with CI/CD pipelines and build automation (GitHub Actions).",
        "Knowledge of security best practices for cloud infrastructure."
      ],
      niceToHave: [
        "Experience securing cloud infrastructure as per well-architected frameworks.",
        "Ability to deliver high-quality and efficient code.",
        "Versatility in learning new tools and technologies.",
        "Experience in fast-paced startup environments."
      ],
      technologies: [
        "Kubernetes", "Terraform", "Pulumi", "Golang", "Python", "Azure", "GCP", "AWS", "IAM"
      ]
    },
    {
      title: "Full Stack Engineer",
      experience: "3-5 Years",
      location: "Remote",
      type: "Full-time",
      description: `As a Full Stack Developer, you will be instrumental in designing and implementing innovative web applications that leverage cloud infrastructure and automation. Reporting to the Engineering leader, you will utilize your core skills in software development and web technologies, while your premium expertise in Ruby on Rails and IT infrastructure will enhance project outcomes. Your relevant experience with AWS, REST, and Agile methodologies will be essential in driving successful model deployments and API integrations. Join our team to contribute to cutting-edge solutions in a collaborative and dynamic environment.`,
      responsibilities: [
        "Develop cloud-native web applications and backend services.",
        "Design and implement application architecture in collaboration with product teams.",
        "Integrate Large Language Models (LLMs) into the product stack.",
        "Deploy Generative AI models and manage their lifecycle in production.",
        "Write clean, efficient, and maintainable code with strong unit test coverage.",
        "Work across teams to maximize productivity and support go-to-market initiatives."
      ],
      requirements: [
        "3-5 years of experience in full-stack development.",
        "Proficiency in cloud platforms: AWS, Google Cloud, Azure.",
        "Experience with LLMs, vector databases, and RAG (Retrieval-Augmented Generation).",
        "Strong experience in developing APIs for AI model integration.",
        "Hands-on experience in Kubernetes and containerized deployments.",
        "Expertise in backend programming languages like Golang, Python.",
        "Experience with Infrastructure-as-Code tools (Terraform, Pulumi, Helm).",
        "Understanding of microservices architecture and scalable application design."
      ],
      niceToHave: [
        "Experience in microservices-based architecture.",
        "Versatility in learning new technologies and adapting to evolving trends.",
        "Experience in fast-paced startup environments.",
        "Ability to work independently in a remote-first culture."
      ],
      technologies: [
        "Kubernetes", "Terraform", "Golang", "Python", "Vector DB", "GenAI", "Azure", "GCP", "AWS"
      ]
    }
  ];


  const handleApply = (job) => {
    navigate(`/job-details`, { state: { job } });
  };

  return (
    <div className="bg-white min-h-screen py-16 px-6 sm:px-12">

      <h1 className="text-6xl font-extrabold text-center bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] bg-clip-text text-transparent mb-12">
        Open Positions
      </h1>

      <div className="w-full max-w-5xl mx-auto">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center bg-gray-100 px-8 py-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition"
          >

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-black">{job.title}</h3>
              <p className="text-gray-600">{job.location} • {job.type}</p>
            </div>

            <button
              className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-b from-[#17194c] via-[#273184] to-[#d3b2f9] text-white rounded-lg font-semibold shadow-md transition transform hover:scale-105 hover:shadow-xl"
              onClick={() => handleApply(job)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenPositions;