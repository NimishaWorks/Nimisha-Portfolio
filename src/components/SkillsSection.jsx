import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 70, category: "Frontend" },
  { name: "React", level: 70, category: "Frontend" },  
  { name: "Tailwind CSS", level: 75, category: "Frontend" },
  { name: "Node.js", level: 60, category: "Backend" },
  { name: "PostgreSQL", level: 70, category: "Database" },
  { name: "MySQL", level: 65, category: "Database" },
  { name: "SQL", level: 80, category: "Database" },
  { name: "Python", level: 75, category: "Data" },
  { name: "Pandas", level: 70, category: "Data" },
  { name: "NumPy", level: 65, category: "Data" },
  { name: "Excel", level: 85, category: "Data" },
  { name: "Power BI", level: 60, category: "Data" },
  { name: "Git/GitHub", level: 80, category: "Tools" },
  { name: "Canva", level: 85, category: "Design" },
  { name: "VS Code", level: 90, category: "Tools" }
]; 

const categories = ["all", "Frontend", "Backend", "Database", "Data", "Design", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // ✅ Filter skills based on active category
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category tab */}
       <div className="flex justify-center gap-6 border-b mb-8">
  {categories.map((category, key) => (
    <span
      key={key}
      onClick={() => setActiveCategory(category)}
      className={`cursor-pointer pb-2 border-b-2 transition-colors 
        ${activeCategory === category 
          ? "border-primary text-primary font-semibold" 
          : "border-transparent text-gray-500 hover:text-primary hover:border-primary/50"}`}
    >
      {category}
    </span>
  ))}
</div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              {/* Percentage below */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
  );
};