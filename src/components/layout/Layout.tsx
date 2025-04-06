
import React, { useState, useEffect } from 'react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { VerticalNavBar } from '@/components/ui/vertical-navbar';
import { Home, Info, FileText, Linkedin } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from 'framer-motion';
import { CpuBackground } from '@/components/ui/cpu-background';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  {
    name: "Company",
    url: "/",
    icon: Home,
  },
  {
    name: "Expertise",
    url: "/about",
    icon: Info,
  },
  {
    name: "Careers",
    url: "/projects",
    icon: FileText,
  },
];

const Layout = ({ children }: LayoutProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at top, hide when scrolling down
      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <CpuBackground className="min-h-screen bg-background text-foreground dark">
      {/* Only show the top navbar on mobile */}
      {isMobile && (
        <header 
          className={`w-full bg-transparent backdrop-blur-sm border-b border-border/30 fixed top-0 left-0 z-50 transition-transform duration-300 ${
            isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-16">
            <NavBar items={navItems} />
          </div>
        </header>
      )}
      
      {/* Vertical navbar - only shown on desktop, now positioned at top right */}
      <VerticalNavBar items={navItems} />
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-32">
        {/* Erias Ventures Logo at the top of every page with animation */}
        <motion.div 
          className="w-full flex justify-center mb-10 mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          <img 
            src="/lovable-uploads/erias-name-dark.svg" 
            alt="Erias Ventures Logo" 
            className="h-24 md:h-32 object-contain" 
          />
        </motion.div>
        
        <div className="relative z-10 tracking-wide leading-relaxed text-content">
          {children}
        </div>
      </main>
      <footer className="relative z-10 bg-secondary py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/ace573a3-b047-4906-b283-30d3e76f574f.png" 
                alt="Erias Ventures Icon" 
                className="h-5 w-5 mr-2 object-contain" 
              />
              <p className="text-muted-foreground text-sm">© 2025 Erias Ventures, LLC. All rights reserved.</p>
            </div>
            
            {/* Contact information */}
            <div className="flex items-center flex-wrap justify-center gap-2 text-sm font-medium text-muted-foreground">
              <span>443-300-8638</span>
              <span className="hidden md:inline">|</span>
              <a href="mailto:info@eriasventures.com" className="text-primary hover:text-primary/80 transition-colors">info@eriasventures.com</a>
              <span className="hidden md:inline">|</span>
              <a 
                href="https://www.linkedin.com/company/eriasventures/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin size={18} className="mr-1" />
                <span className="hidden md:inline">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </CpuBackground>
  );
};

export default Layout;
