import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Airline Operations Intelligence Dashboard",
    description:
      "An interactive Power BI dashboard analyzing 3M+ flight records across 18 airlines and 380 airports (2019–2023). Features drill-down filters, KPI cards, delay and cancellation analysis, COVID-19 impact trends, and actionable operational insights for airlines.",
    image: "/projects/dashboard.png",
    tags: ["Power BI", "SQL", "DAX", "Data Analytics"],
    demoUrl: "#",
    githubUrl: "https://github.com/NimishaWorks/airline_operations_intelligence_dashboard",
  },

  {
    id: 2,
    title: "CashIQ – AI Financial Intelligence Platform",
    description:
      "An AI-powered financial analytics platform that analyzes transaction data, detects anomalies, and generates intelligent financial insights using LLMs and Retrieval-Augmented Generation (RAG). Built with scalable data pipelines and personalized recommendations.",
    image: "/projects/fi.jpg",
    tags: ["Python", "PostgreSQL", "LLMs", "RAG", "AI"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "FoodGenie – AI Meal Planning & Grocery Automation",
    description:
      "An AI-powered meal planning platform with personalized recommendations, automated grocery ordering using Playwright, secure authentication, and scalable REST APIs built with FastAPI and PostgreSQL.",
    image: "/projects/foodgenie.png",
    tags: ["FastAPI", "PostgreSQL", "Playwright", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/NimishaWorks/FoodGenie",
  },

  {
    id: 4,
    title: "CitiFix – Smart Civic Issue Reporting Platform",
    description:
      "A full-stack civic engagement platform enabling citizens to report public issues with geolocation, voting, workflow management, and an interactive analytics dashboard powered by Chart.js for real-time statistics and issue trend analysis.",
    image: "/projects/Citifix.png",
    tags: ["Flask", "MySQL", "Chart.js", "REST API"],
    demoUrl: "https://citifix-v2.vercel.app/",
    githubUrl: "https://github.com/NimishaWorks/citifix_v2",
  },

  {
    id: 5,
    title: "Heart Disease Prediction – End-to-End ML Pipeline",
    description:
      "A complete machine learning pipeline that predicts heart disease using structured clinical data. Includes data preprocessing, feature engineering, model training, evaluation, and deployment-ready workflows.",
    image: "/projects/Heart.png",
    tags: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Machine Learning",
      "Data Visualization",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 6,
    title: "Credit Card Fraud Detection",
    description:
      "A machine learning solution that detects fraudulent credit card transactions using classification algorithms, helping identify suspicious financial activities and reduce financial loss.",
    image: "/projects/CreditCardFraud.png",
    tags: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Matplotlib",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/NimishaWorks/Credit-Card-Fraud.git",
  },

  {
    id: 7,
    title: "CodeVerse — Play. Learn. Code.",
    description:
      "An AI-driven gamified learning platform for DSA, core CS subjects, and interview preparation with adaptive AI mentoring, coding challenges, interactive roadmaps, resume building, and achievement systems.",
    image: "/projects/Codeverse.png",
    tags: [
      "React",
      "TailwindCSS",
      "Firebase",
      "Phaser.js",
      "Framer Motion",
      "AI",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 8,
    title: "CozyCorner – E-commerce Website",
    description:
      "A MERN stack e-commerce application providing a seamless shopping experience with product browsing, authentication, and modern responsive design.",
    image: "/projects/CozyCorner.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 9,
    title: "TastyBites – Responsive Restaurant Website",
    description:
      "A responsive restaurant website that allows users to explore food menus with an engaging user interface and optimized browsing experience.",
    image: "/projects/TastyBites.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://tastybites-gules.vercel.app/",
    githubUrl: "https://github.com/NimishaWorks/Project_Restaurant.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Take a tour of what I've built - check it out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
    target="_blank"
     href="https://github.com/NimishaWorks"
    >
        
        
        Check My Github
        <ArrowRight size={16}/>
    </a>
        </div>
      </div>
    </section>
  );
};
