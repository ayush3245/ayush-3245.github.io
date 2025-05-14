
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-tech/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-psych/5 rounded-full blur-3xl"></div>
      
      <div className="section">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="animate-fade-in">
            <div className="flex items-center justify-center md:justify-start mb-8 space-x-2">
              <div className={cn(
                "h-0.5 w-12 bg-gradient-to-r from-tech to-psych rounded-full",
                "animate-[width_1s_ease-in-out]"
              )}></div>
              <span className="text-muted-foreground font-medium">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Bridging <span className="bg-gradient-to-r from-tech to-psych bg-clip-text text-transparent">AI</span> and <span className="text-psych">Psychology</span> for Human-Centered Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl">
              I'm Ayush Kejriwal, an innovative Software Engineer and Clinical Psychology professional crafting ethical, data-driven AI solutions to enhance human well-being and solve complex problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="btn-primary flex items-center justify-center">
                View My Projects
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="#contact" className="btn-outline flex items-center justify-center">
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Tech & Psychology icons/graphics - simplified version */}
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-in">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-tech/10 rounded-xl flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-tech" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-center">Software Engineering</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-tech/10 rounded-xl flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-tech" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-center">AI & Machine Learning</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-psych/10 rounded-xl flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-psych" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-center">Psychology Insights</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-psych/10 rounded-xl flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-psych" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-center">Human-Centered Design</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator - fixed position */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-muted-foreground text-sm mb-2 whitespace-nowrap">Scroll Down</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tech" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
