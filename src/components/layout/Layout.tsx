
import React, { useState, useEffect, useMemo } from 'react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { VerticalNavBar } from '@/components/ui/vertical-navbar';
import { Home, Info, FileText, Instagram } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Memoize nav items to prevent unnecessary re-renders
  const navItems = useMemo(() => [
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
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
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

  // Reset scroll position on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
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
      
      <VerticalNavBar items={navItems} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-32">
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
        
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="tracking-wide leading-relaxed text-content"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="bg-secondary py-8 border-t border-border">
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
                <img 
                  src="/lovable-uploads/9688ac47-3186-432a-bc18-8964834c849f.png" 
                  alt="LinkedIn" 
                  className="w-5 h-5" 
                />
              </a>
              <a 
                href="https://www.instagram.com/eriasventures/#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors ml-1"
              >
                <img 
                  src="/lovable-uploads/303d12eb-54b7-44e8-9c6c-3454c43fb0fd.png" 
                  alt="Instagram" 
                  className="w-5 h-5" 
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
