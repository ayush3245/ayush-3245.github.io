
import { useState } from 'react';
import { Code, MessageCircle, FileText, BarChart4 } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Project data
const projects = [
  {
    id: "chatbot",
    title: "Therapeutic Support Chatbot",
    description: "A chatbot designed to provide genuine emotional support and help users navigate their feelings.",
    icon: <MessageCircle className="w-5 h-5" />,
    problem: "How to develop a chatbot that offers genuine emotional support, helping users understand and navigate their feelings while providing comfort.",
    approach: "I employed system prompt engineering to give the chatbot a warm, therapeutic personality, creating a supportive environment. My psychology knowledge was instrumental in understanding the emotional nuances required.",
    technologies: ["Large Language Models", "Gradio", "Python", "Cursor"],
    status: "In development, not yet publicly deployed",
    achievements: [
      "Good proficiency in understanding user emotions",
      "Provides support and comfort in navigating emotions",
      "Creates a therapeutic dialogue experience"
    ],
    learnings: "Currently working to make responses less verbose to improve user experience.",
    imageUrl: "placeholder-chatbot",
    color: "bg-blue-50"
  },
  {
    id: "resume",
    title: "AI Resume Analyzer",
    description: "A tool that analyzes resumes against job descriptions, identifies gaps, and provides improvement suggestions.",
    icon: <FileText className="w-5 h-5" />,
    problem: "Needed a personal tool to analyze resumes against different job descriptions, identify gaps, and understand how to improve them for specific job profiles.",
    approach: "Developed an analyzer to provide key metrics and suggestions for improving resume alignment with specific job postings.",
    technologies: ["Python", "Streamlit", "Large Language Models", "PDF processing"],
    status: "In development, not yet publicly deployed",
    achievements: [
      "Provides match score against job descriptions",
      "Highlights key strengths and gaps",
      "Offers improvement suggestions",
      "Delivers overall assessment"
    ],
    learnings: "Initial testing shows the overall assessment is quite good, while the match score needs further refinement for better accuracy.",
    future: "Plan to add functionality for directly editing the resume based on job profile analysis.",
    imageUrl: "placeholder-resume",
    color: "bg-purple-50"
  },
  {
    id: "scoring",
    title: "Automated Psychological Test Scoring System",
    description: "An Excel-based automation system that transforms manual test scoring into an efficient, error-free process.",
    icon: <FileText className="w-5 h-5" />,
    problem: "As a trainee, was tasked with the cumbersome and time-consuming manual scoring of hundreds of psychological test questionnaires administered to children.",
    approach: "Recognized that the task, while simple and straightforward, was highly repetitive. Used problem-solving skills and Excel knowledge to create an automated system to convert raw scores to standardized scores.",
    technologies: ["Advanced Excel"],
    status: "Completed and implemented",
    achievements: [
      "Reduced test scoring processing time by over 95%",
      "Automated a task that would have consumed significant energy, time, and human resources",
      "Provided seamless experience for researchers and clinicians"
    ],
    learnings: "Even simple automation tools can drastically improve efficiency in clinical settings.",
    imageUrl: "placeholder-excel",
    color: "bg-green-50"
  },
  {
    id: "loan",
    title: "Loan Defaulter Prediction",
    description: "An ML-based system to predict potential loan defaulters with high accuracy using neural networks and ensemble methods.",
    icon: <BarChart4 className="w-5 h-5" />,
    problem: "To evaluate which kind of ML model would work best for loan defaulter prediction with large banking datasets.",
    approach: "After training and evaluating various ML models, found that neural networks, random forests, and gradient boosting performed better than conventional classifiers for large datasets.",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    algorithms: ["Neural Networks", "Random Forest", "Gradient Boosting"],
    status: "Completed (B.E. Final Year Project)",
    achievements: [
      "Achieved 89% accuracy using Neural Networks",
      "Achieved 88% accuracy using Random Forest",
      "Successfully compared performance of different ML algorithms"
    ],
    role: "Main developer responsible for backend operations in a team project",
    learnings: "Neural networks and ensemble methods outperform conventional classifiers for large financial datasets.",
    imageUrl: "placeholder-loan",
    color: "bg-yellow-50"
  }
];

// Technology Badge component
const TechBadge = ({ tech }: { tech: string }) => (
  <Badge variant="outline" className="bg-white/50 text-xs font-normal">
    {tech}
  </Badge>
);

// Achievement Item component
const AchievementItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2 mb-2">
    <div className="mt-1 min-w-4 h-4 rounded-full bg-tech/20 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-tech"></div>
    </div>
    <span className="text-sm">{text}</span>
  </li>
);

// Project Card component
const ProjectCard = ({ 
  title, description, icon, color 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  color: string;
}) => {
  return (
    <Card className={cn(
      "border border-border/50 transition-all duration-300 hover:shadow-md cursor-pointer h-full",
      color
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-tech/10 text-tech">{icon}</div>
          <CardTitle className="text-lg truncate">{title}</CardTitle>
        </div>
        <CardDescription className="text-sm line-clamp-2">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

// Project Detail component
const ProjectDetail = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-border/50 overflow-hidden">
      {/* Project header */}
      <div className={cn("px-6 py-8", project.color)}>
        <h3 className="font-semibold text-2xl mb-2 flex items-center gap-3">
          <div className="p-2 rounded-md bg-white/50 text-tech">{project.icon}</div>
          {project.title}
        </h3>
        <p className="text-foreground/80 mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <TechBadge key={tech} tech={tech} />
          ))}
          {project.algorithms && project.algorithms.map(algo => (
            <Badge key={algo} variant="secondary" className="text-xs font-normal">
              {algo}
            </Badge>
          ))}
        </div>
      </div>
      
      {/* Project content */}
      <div className="p-6">
        {/* STAR/CAR framework sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-medium text-tech mb-2">Problem Statement</h4>
            <p className="text-sm text-foreground/80 mb-4">{project.problem}</p>
            
            {project.role && (
              <>
                <h4 className="font-medium text-tech mb-2">My Role</h4>
                <p className="text-sm text-foreground/80 mb-4">{project.role}</p>
              </>
            )}
          </div>
          
          <div>
            <h4 className="font-medium text-tech mb-2">Approach & Solution</h4>
            <p className="text-sm text-foreground/80 mb-4">{project.approach}</p>
            
            <h4 className="font-medium text-tech mb-2">Current Status</h4>
            <p className="text-sm text-foreground/80">{project.status}</p>
          </div>
        </div>
        
        {/* Project image placeholder */}
        <div className="bg-neutral rounded-md mb-6 overflow-hidden">
          <div className="aspect-video flex items-center justify-center">
            <div className="text-center p-4">
              <Code className="w-8 h-8 text-tech/50 mx-auto mb-2" />
              <p className="text-sm text-tech/70">
                Project visualization for {project.title}
              </p>
            </div>
          </div>
        </div>
        
        {/* Achievements and learnings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-tech mb-3">Key Achievements</h4>
            <ul className="pl-1">
              {project.achievements.map((achievement, idx) => (
                <AchievementItem key={idx} text={achievement} />
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-tech mb-3">Learnings & Insights</h4>
            <p className="text-sm text-foreground/80 mb-3">{project.learnings}</p>
            
            {project.future && (
              <>
                <h4 className="font-medium text-tech mb-2">Future Plans</h4>
                <p className="text-sm text-foreground/80">{project.future}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState("chatbot");
  
  return (
    <section id="projects" className="py-20 bg-neutral relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-psych/5 rounded-full blur-3xl"></div>
      
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work at the intersection of AI, software engineering, and psychology
          </p>
        </div>
        
        <Tabs defaultValue="chatbot" value={activeProject} onValueChange={setActiveProject}>
          {/* Project selection cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <TabsList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-auto bg-transparent p-0 gap-4 w-full">
              {projects.map(project => (
                <TabsTrigger 
                  key={project.id} 
                  value={project.id}
                  className="p-0 bg-transparent data-[state=active]:bg-transparent border-none data-[state=active]:border-none shadow-none data-[state=active]:shadow-none h-auto w-full"
                >
                  <div className="w-full h-full">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      icon={project.icon}
                      color={activeProject === project.id ? project.color : "bg-background"}
                    />
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {/* Project details */}
          {projects.map(project => (
            <TabsContent key={project.id} value={project.id}>
              <ProjectDetail project={project} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
