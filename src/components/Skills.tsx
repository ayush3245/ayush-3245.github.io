
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Code, Database, BrainCircuit, BarChart, 
  Cloud, Laptop, Pill, GraduationCap, MessageCircle
} from 'lucide-react';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

// Define skill categories and skills with proficiency levels
const skillCategories = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: <BrainCircuit className="w-5 h-5" />,
    skills: [
      { name: "Large Language Models", proficiency: "Proficient" },
      { name: "Prompt Engineering", proficiency: "Proficient" },
      { name: "AI Chatbot Development", proficiency: "Proficient" },
      { name: "Machine Learning", proficiency: "Competent" },
    ]
  },
  {
    id: "software-dev",
    name: "Software Development & Tools",
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: "Python", proficiency: "Proficient" },
      { name: "SQL", proficiency: "Competent" },
      { name: "Gradio", proficiency: "Proficient" },
      { name: "FastAPI", proficiency: "Competent" },
      { name: "Django", proficiency: "Advanced Beginner" },
      { name: "JavaScript", proficiency: "Advanced Beginner" },
      { name: "Streamlit", proficiency: "Proficient" },
      { name: "Cursor (development environment)", proficiency: "Proficient" },
      { name: "AWS (S3, EC2)", proficiency: "Advanced Beginner" },
      { name: "Lovable (AI website builder)", proficiency: "Competent" },
    ]
  },
  {
    id: "data-analysis",
    name: "Data Analysis & Automation",
    icon: <BarChart className="w-5 h-5" />,
    skills: [
      { name: "Advanced Excel", proficiency: "Competent" },
      { name: "IBM SPSS Statistics", proficiency: "Competent" },
      { name: "Data Visualization", proficiency: "Proficient" },
      { name: "Data Analysis", proficiency: "Competent" },
    ]
  },
  {
    id: "clinical-psych",
    name: "Clinical Psychology",
    icon: <GraduationCap className="w-5 h-5" />,
    skills: [
      { name: "Therapeutic Principles", proficiency: "Proficient" },
      { name: "Psychological Assessment", proficiency: "Competent" },
      { name: "Comprehensive Psychological Batteries", proficiency: "Competent" },
      { name: "IEP Creation", proficiency: "Advanced Beginner" },
      { name: "Ethical AI in Health", proficiency: "Competent" },
    ]
  },
  {
    id: "languages",
    name: "Languages",
    icon: <MessageCircle className="w-5 h-5" />,
    skills: [
      { name: "English", proficiency: "Proficient" },
      { name: "Hindi", proficiency: "Proficient" },
    ]
  }
];

const SkillBar = ({ name, proficiency }: { name: string; proficiency: string }) => {
  // Map proficiency to width percentage
  const getProficiencyWidth = () => {
    switch (proficiency) {
      case "Novice": return 20;
      case "Advanced Beginner": return 40;
      case "Competent": return 60;
      case "Proficient": return 80;
      case "Expert": return 100;
      default: return 50;
    }
  };

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm">{name}</span>
        <span className="text-xs font-medium text-muted-foreground">{proficiency}</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress"
          style={{ width: `${getProficiencyWidth()}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, title, description, children }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="transition-all hover:shadow-md border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-tech/10 text-tech">{icon}</div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("ai-ml");
  
  // Add a ref for the tab container to prevent scroll jumping
  const handleTabChange = (value: string) => {
    // Prevent default scroll behavior by capturing the event
    setActiveCategory(value);
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-tech/5 rounded-full blur-3xl"></div>
      
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical and professional capabilities at the intersection of AI, Software Engineering, and Psychology.
          </p>
        </div>
        
        {/* Skills Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
            <div className="p-3 bg-tech/10 text-tech rounded-lg inline-block mb-4">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-lg mb-2">AI & Machine Learning</h3>
            <p className="text-sm text-muted-foreground">
              Expertise in large language models, prompt engineering, and neural networks for human-centered AI solutions.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
            <div className="p-3 bg-tech/10 text-tech rounded-lg inline-block mb-4">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-lg mb-2">Software Development</h3>
            <p className="text-sm text-muted-foreground">
              Proficiency in Python, SQL, FastAPI, Django and other tools for developing robust applications.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
            <div className="p-3 bg-tech/10 text-tech rounded-lg inline-block mb-4">
              <BarChart className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-lg mb-2">Data Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Advanced capabilities in Excel automation, data visualization, and statistical analysis.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
            <div className="p-3 bg-psych/10 text-psych rounded-lg inline-block mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-lg mb-2">Clinical Psychology</h3>
            <p className="text-sm text-muted-foreground">
              Expertise in therapeutic principles, psychological assessment, and ethical AI applications in healthcare.
            </p>
          </div>
        </div>
        
        {/* Detailed Skill Tabs */}
        <Tabs 
          defaultValue="ai-ml" 
          value={activeCategory} 
          onValueChange={handleTabChange} 
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/70 backdrop-blur-sm border border-border/30 shadow-sm p-1.5 rounded-full">
              {skillCategories.map(category => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className={cn(
                    "rounded-full transition-all py-2 px-4",
                    activeCategory === category.id 
                      ? "bg-gradient-to-r from-tech to-psych text-white shadow-md" 
                      : "hover:bg-white/80"
                  )}
                  onClick={(e) => {
                    // Prevent focus scrolling
                    e.preventDefault();
                  }}
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden">{category.id === "software-dev" ? "Software" : category.name.split(' ')[0]}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {skillCategories.map(category => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left column: skill bars */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-border/50">
                  <h3 className="font-medium text-lg mb-4 flex items-center gap-2">
                    {category.icon}
                    <span>{category.name}</span>
                  </h3>
                  
                  <div>
                    {category.skills.map(skill => (
                      <SkillBar 
                        key={skill.name} 
                        name={skill.name} 
                        proficiency={skill.proficiency}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Right column: description and context */}
                <div className="bg-gradient-to-br from-tech/5 to-psych/5 rounded-lg p-6 shadow-sm border border-border/50">
                  <h3 className="font-medium text-lg mb-4">Application & Context</h3>
                  
                  {category.id === "ai-ml" && (
                    <div className="space-y-4">
                      <p>My AI expertise focuses on creating human-centered solutions that leverage large language models with sophisticated prompt engineering to create valuable applications.</p>
                      
                      <p>I've applied these skills in developing therapeutic chatbots and analyzing complex data patterns using neural networks and ensemble methods.</p>
                      
                      <p>My approach combines technical ML knowledge with an understanding of human needs, creating AI systems that are both powerful and ethically responsible.</p>
                    </div>
                  )}
                  
                  {category.id === "software-dev" && (
                    <div className="space-y-4">
                      <p>My software development skills enable me to transform AI concepts into functional, user-friendly applications using tools like Python, FastAPI, and Django.</p>
                      
                      <p>I've developed interactive interfaces with Gradio and Streamlit, prioritizing intuitive user experiences that make complex AI capabilities accessible.</p>
                      
                      <p>My proficiency with AWS services allows me to deploy scalable solutions, while my experience with SQL ensures robust data management.</p>
                    </div>
                  )}
                  
                  {category.id === "data-analysis" && (
                    <div className="space-y-4">
                      <p>My data analysis capabilities range from creating Excel automation systems to employing sophisticated Python libraries for in-depth analysis.</p>
                      
                      <p>I excel at transforming raw data into meaningful insights through statistical analysis and clear data visualization.</p>
                      
                      <p>These skills have been applied to automate psychological test scoring and develop predictive models for loan defaulter prediction with high accuracy.</p>
                    </div>
                  )}
                  
                  {category.id === "clinical-psych" && (
                    <div className="space-y-4">
                      <p>My clinical psychology training provides a key differentiator in how I approach AI and technology - with a deep understanding of human behavior, emotional needs, and ethical considerations.</p>
                      
                      <p>I've applied this knowledge in developing therapeutic support systems and designing psychological assessment tools that are both technically sound and clinically valid.</p>
                      
                      <p>This dual expertise allows me to create truly human-centered AI solutions that address genuine needs while respecting psychological well-being and ethical boundaries.</p>
                    </div>
                  )}
                  
                  {category.id === "languages" && (
                    <div className="space-y-4">
                      <p>My professional fluency in English enables me to communicate complex technical and psychological concepts clearly in documentation, presentations, and client interactions.</p>
                      
                      <p>As a native Hindi speaker, I can effectively bridge cultural and linguistic gaps in diverse work environments and research contexts.</p>
                      
                      <p>These language skills enhance my ability to collaborate in international teams and make my work accessible to broader audiences.</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
