
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-neutral py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0">
            <div className="font-heading font-bold text-xl text-tech mb-2">
              Ayush<span className="text-psych">Kejriwal</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Ayush Kejriwal. All rights reserved.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
            <a href="#home" className="text-sm text-tech hover:text-psych transition-colors">Home</a>
            <a href="#about" className="text-sm text-tech hover:text-psych transition-colors">About</a>
            <a href="#skills" className="text-sm text-tech hover:text-psych transition-colors">Skills</a>
            <a href="#projects" className="text-sm text-tech hover:text-psych transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-tech hover:text-psych transition-colors">Contact</a>
          </div>
          
          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className={cn(
              "hidden md:flex items-center justify-center",
              "w-10 h-10 rounded-full bg-tech/10 text-tech",
              "hover:bg-tech hover:text-white transition-colors",
              "absolute md:static right-6 bottom-10"
            )}
          >
            <ArrowUp size={18} />
          </button>
        </div>
        
        {/* Mobile scroll to top button */}
        <button
          onClick={scrollToTop}
          className={cn(
            "md:hidden flex items-center justify-center",
            "w-10 h-10 rounded-full bg-tech/10 text-tech",
            "hover:bg-tech hover:text-white transition-colors",
            "fixed right-6 bottom-6 shadow-md"
          )}
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
