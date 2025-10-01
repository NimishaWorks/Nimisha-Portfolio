import { Briefcase, Code, User } from "lucide-react"

export const AboutMe=()=>{
    return<section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Passionate Web Developer & Data Enthusiast</h3>
                  <p className="text-muted-foreground">
  As a tech enthusiast with an innovative mindset, I specialize in crafting elegant web solutions 
  and exploring the fascinating world of data analytics. My toolkit includes cutting-edge technologies 
  that help me transform complex challenges into user-friendly digital experiences.
</p>
<p className="text-muted-foreground">
  Beyond coding, I'm an analytical thinker who thrives on transforming abstract concepts into 
  tangible solutions. Whether it's developing responsive web applications or uncovering insights 
  through data analysis, I'm committed to creating technology that makes a meaningful impact. 
  My approach combines technical expertise with creative problem-solving to deliver solutions 
  that exceed expectations.
</p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
    <a href="" className="cosmic-button">
        {" "}
        Let's Connect
    </a>
    <a href="/achievements/NimishaResume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
        {" "}
        Download Resume
    </a>
</div>
</div>




      <div className="grid grid-cols-1 gap-6">
      <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
           <Code className="h-6 w-6 text-primary"/>
          </div>
          <div className="text-left">
            <h4 className="text-semibold text-lg">Web Development</h4>
            <p className="text-muted-foreground">
                {" "}
                Building responsive and performant web applications.
            </p>
            
          </div>
        </div>
      </div>
      <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
           <User className="h-6 w-6 text-primary"/>
          </div>
          <div className="text-left">
            <h4 className="text-semibold text-lg">Data-Analytics</h4>
            <p className="text-muted-foreground">
                {" "}
                  Transforming raw data into actionable insights and meaningful visualizations.
            </p>
            
          </div>
        </div>
      </div>
      <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
           <Briefcase className="h-6 w-6 text-primary"/>
          </div>
          <div className="text-left">
            <h4 className="text-semibold text-lg">Creative Design</h4>
            <p className="text-muted-foreground">
                {" "}
                Crafting engaging visual content and business presentations using Canva.
            </p>
            
          </div>
        </div>
      </div>

    </div>  
        </div>
        </div>
        </section>
}