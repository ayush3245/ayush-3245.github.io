
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <section id="about" className="py-20 bg-neutral relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-tech/5 rounded-full blur-3xl"></div>
      
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My unique journey from Computer Engineering to Clinical Psychology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className={cn(
              "bg-gradient-to-br from-tech to-psych rounded-xl p-1",
              "transform hover:scale-[1.01] transition-transform duration-300"
            )}>
              <div className="bg-white rounded-lg p-4">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-dark">
                  {/* Placeholder image - replace with your actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-tech/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 py-4 px-3 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-medium">Ayush Kejriwal</p>
                    <p className="text-white/80 text-sm">AI Engineer & Clinical Psychologist</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-tech/10 rounded-full"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-36 h-36 bg-psych/10 rounded-full"></div>
          </div>
          
          {/* Bio Content */}
          <div>
            <h3 className="section-subheading">My Professional Journey</h3>
            <p className="mb-4 text-foreground/90">
              I'm a unique professional bridging the gap between Computer Engineering and Clinical Psychology, 
              focused on crafting ethical AI solutions that genuinely enhance human well-being.
            </p>
            
            <p className="mb-6 text-foreground/90">
              My journey began with a Bachelor's in Computer Engineering, which gave me solid foundations in software development
              and AI systems. Driven by a desire to better understand the human mind, I later pursued a Master's in Clinical Psychology,
              gaining insights into human behavior, therapeutic principles, and psychological assessment.
            </p>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8">
              <div>
                <h4 className="font-medium text-tech">Work Philosophy</h4>
                <p className="text-sm text-foreground/80">Data-driven, ethical AI solutions that prioritize human needs and well-being.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-tech">Core Values</h4>
                <p className="text-sm text-foreground/80">Empathy, innovation, ethical responsibility, and continuous learning.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-tech">Soft Skills</h4>
                <p className="text-sm text-foreground/80">Proactive communication, problem-solving, analytical thinking, collaboration.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-tech">Personal Interests</h4>
                <p className="text-sm text-foreground/80">Reading, music, traveling, yoga, and swimming.</p>
              </div>
            </div>
            
            <a href="#skills" className="btn-primary">
              Explore My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
