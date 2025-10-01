import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col px-4">
            {/* Main content area */}
            <div className="flex-1 flex items-center justify-center">
                <div className="container max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Profile Picture */}
                        <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in">
                            <div className="relative">
                                <div className="w-70 h-70 md:w-80 md:h-80 lg:w-90 lg:h-90 rounded-lg overflow-hidden border-4 border-primary/20 shadow-2xl backdrop-blur-sm">
                                    <img 
  src="/achievements/nim.png" 
  alt="Nimisha Subhash" 
  className="w-full h-full object-cover"
/>
                                </div>
                                {/* Cosmic glow effect */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl animate-pulse"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="text-center lg:text-left space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                                <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
                                <span className="text-primary opacity-0 animate-fade-in-delay-1"> Nimisha </span>
                                <span className="text-gradient opacity-0 animate-fade-in-delay-2"> Subhash </span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
                                I craft intelligent and user-friendly solutions by combining
                                data-driven insights with modern web technologies.
                                Specializing in data analytics and web development,
                                I build applications that are practical, impactful, and scalable.
                            </p>
                            
                            <div className='pt-6 opacity-0 animate-fade-in-delay-4'>
                                <a href="#projects" className="cosmic-button">
                                    View My Work
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll indicator - separate from main content */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    )
}