import { Award, Trophy, ExternalLink } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "NPTEL - Introduction to Machine Learning (Elite Certification)",
    type: "Certification",
    issuer: "NPTEL (IIT Faculty)",
    date: "2025",
    description: "Achieved Elite certification in NPTEL's Introduction to Machine Learning course. Covered core ML concepts including supervised and unsupervised learning, regression, classification, clustering, and evaluation metrics, with practical applications using Python.",
    image: "/achievements/Introduction to Machine Learning-1.png", // replace with your actual certificate image
    credentialUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs149/Course/NPTEL25CS149S23320147709184776.pdf" // replace with your actual certificate verification link
},

  {
    id: 2,
    title: "3rd Runner-Up : AceHacks (24-hour Hackathon, SRMIST) - Competed among 200+ teams",
    type: "Hackathon",
    issuer: "SRMIST University",
    date: "March 2025",
    description: "Secured 3rd Runner-Up position at AceHacks among 200+ teams. Built an AI-powered solution for Pipe Routing, revolutionizing automotive design by optimizing routing paths with AI, stress analysis, and real-time visualization — all within 24 hours.",
    image: "/achievements/Acehacks.jpeg", // replace with hackathon pic/banner if available
    credentialUrl: "#" // replace with Devpost/GitHub/project link if available
},
  {
    id: 3,
    title: "Special Mentions : Spectrum'25 (24-hour Hackathon, VIT Chennai) - Competed among 1000+ participants",
    type: "Hackathon",
    issuer: "VIT Chennai",
    date: "2025",
    description: "Recognized with Special Mentions at Spectrum'25 among 1000+ participants for presenting innovative solutions for sustainable development  in a 24-hour hackathon.",
    image: "/achievements/Spectrum.jpeg", // replace with event logo or team pic
    credentialUrl: "#" // add Devpost/project link if available
  }
,
  {
    id: 4,
    title: "Introduction to Data Science in Python",
    type: "Certification",
    issuer: "Coursera (University of Michigan)",
    date: "2025",
    description: "Completed the 'Introduction to Data Science in Python' course on Coursera, gaining hands-on experience in data analysis, Python programming, and data visualization.",
    image: "/achievements/Coursera DS-1.png", // replace with certificate image if you have one
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/CPO8GA11998A" // replace with your actual certificate URL
},
{
    id: 5,
    title: "Complete Fullstack Web Development Bootcamp",
    type: "Certification",
    issuer: "Udemy",
    date: "2025",
    description: "Completed the 'Complete Fullstack Web Development Bootcamp' on Udemy, covering HTML, CSS, JavaScript, Node.js, Express, React.js, and project-based web development.",
    image: "/achievements/FullstackWebdev.png", // update the image to match fullstack cert
    credentialUrl: "https://www.udemy.com/certificate/UC-c443a5c5-0865-48d6-9d82-9dde47670ca5/"

},

    {
    id: 6,
    title: "Data Analytics Job Simulation",
    type: "Certification",
    issuer: "Deloitte",
    date: "June 2025",
    description: "Completed a practical Data Analytics Job Simulation by Deloitte, gaining hands-on experience in data analysis and forensic technology.",
    image: "/achievements/deloitte-1.png", // replace with certificate image if you have one
    credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_fBuu3MMBxfg6SJgTh_1749379573632_completion_certificate.pdf" // add link if certificate is verifiable online
},
{
  id:" 7",
  title: "Google Cloud Agentic AI Day - Certificate of Participation",
  type: "Hackathon",
  issuer: "Google Cloud & Hack2Skill",
  date: "2025",
  description: "Participated in the Google Cloud Agentic AI Day and submitted an innovative project, **Raseed AI**, to harness the power of Agentic AI to address real-world problems. Raseed AI is a modern web application that simplifies expense tracking and document management by automatically extracting information from receipts, tracking warranties, setting return reminders, and providing insightful analysis of spending habits through a conversational interface.",
  image: "/achievements/Hack2Skill.jpeg",
  credentialUrl: "#"
}


];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Achievements & <span className="text-primary">Certifications</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Milestones and recognitions that mark my journey in tech
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
  <img
    src={achievement.image}
    alt={achievement.title}
    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
</div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                    {achievement.type === "certification" ? "Certification" : "Hackathon"}
                  </span>
                  <span className="text-xs text-muted-foreground">{achievement.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm text-primary/80 font-medium mb-2">{achievement.issuer}</p>
                <p className="text-muted-foreground text-sm mb-4">{achievement.description}</p>
                <div className="flex justify-end">
                  <a
                    href={achievement.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    View Credential
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};