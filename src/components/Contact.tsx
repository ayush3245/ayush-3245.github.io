
import { useState } from 'react';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactCard = ({ 
  icon, title, value, href, color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string;
  href: string;
  color: string;
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-4 p-5 rounded-lg transition-all",
        "hover:shadow-md border border-border/50 bg-white",
        "hover:border-tech/30"
      )}
    >
      <div className={cn(
        "p-3 rounded-md text-white",
        color
      )}>
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-sm text-muted-foreground">{title}</h3>
        <p className="font-medium">{value}</p>
      </div>
    </a>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-psych/5 rounded-full blur-3xl"></div>
      
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for opportunities or questions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="section-subheading mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <ContactCard 
                icon={<Mail className="w-5 h-5" />}
                title="Email"
                value="ayukej@hotmail.com"
                href="mailto:ayukej@hotmail.com"
                color="bg-tech"
              />
              
              <ContactCard 
                icon={<Linkedin className="w-5 h-5" />}
                title="LinkedIn"
                value="Ayush Kejriwal"
                href="https://www.linkedin.com/in/ayush-kejriwal-16b69316a"
                color="bg-[#0077B5]"
              />
              
              <ContactCard 
                icon={<Github className="w-5 h-5" />}
                title="GitHub"
                value="ayush3245"
                href="https://github.com/ayush3245"
                color="bg-[#24292e]"
              />
            </div>
            
            <div className="p-6 bg-gradient-to-br from-tech/10 to-psych/10 rounded-lg">
              <h4 className="font-medium text-lg mb-3">Let's Collaborate!</h4>
              <p className="text-foreground/80 mb-4">
                I'm currently available for new opportunities in AI/ML, especially in health tech or human-centered AI, research institutions, and data science teams.
              </p>
              <p className="text-foreground/80">
                If you're looking for someone who brings together technical expertise with deep psychological understanding to create impactful AI solutions, I'd love to hear from you.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="section-subheading mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows={5}
                  required
                  className="resize-none bg-white"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full bg-tech hover:bg-tech-light text-white",
                  "flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowRight size={16} />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
