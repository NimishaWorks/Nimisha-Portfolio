import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CitiFix- A Crowdsourced public issue reporting app",
    description:
      "A crowdsourced app that lets users report public issues like garbage, potholes, and broken infrastructure to help improve city cleanliness and maintenance.",
    image: "/projects/Citifix.png",
    tags: [" Html,CSS,JS,Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "CozyCorner-A e-commerce website",
    description:
      "An e-commerce website built with the MERN stack (MongoDB, Express, React, Node.js) that offers users a seamless online shopping experience.",
    image: "/projects/CozyCorner.png",
    tags: ["MongoDB,ExpressJS,ReactJS,NodeJS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "TastyBites- A responsive restaurant website",
    description:
      "A food-focused app/website that lets users explore, order, or discover delicious meals and recipes, built to offer a delightful culinary experience.",
    image: "/projects/TastyBites.png",
    tags: ["Html,CSS,JS"],
    demoUrl: "https://tastybites-gules.vercel.app/",
    githubUrl: "https://github.com/NimishaWorks/Project_Restaurant.git",
  },
  {
    id:4,
    title:"Credit-Card Fraud Detection",
    description:"A machine learning model that analyzes credit card transactions to identify and classify fraudulent activities, helping to prevent financial loss.",
    image:"/projects/CreditCardFraud.png",
    tags:["Python, Pandas, Scikit-learn, Matplotlib"],
    demoUrl:"#",
    githubUrl:"https://github.com/NimishaWorks/Credit-Card-Fraud.git",
  }
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
