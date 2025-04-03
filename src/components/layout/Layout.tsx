
import React, { useState, useEffect } from 'react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { VerticalNavBar } from '@/components/ui/vertical-navbar';
import { Home, Info, FileText } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
    <div className="min-h-screen bg-background text-foreground dark">
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
      
      {/* Vertical navbar - only shown on desktop */}
      <VerticalNavBar items={navItems} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-32">
        {/* Erias Ventures Logo at the top of every page */}
        <div className="w-full flex justify-center mb-10 mt-6">
          <img 
            src="/lovable-uploads/erias-name-dark.svg" 
            alt="Erias Ventures Logo" 
            className="h-16 md:h-20 object-contain"
          />
        </div>
        
        <div className="tracking-wide leading-relaxed text-content">
          {children}
        </div>
      </main>
      <footer className="bg-secondary py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/ace573a3-b047-4906-b283-30d3e76f574f.png" 
                alt="Erias Ventures Icon" 
                className="h-5 w-5 mr-2 object-contain" 
              />
              <p className="text-muted-foreground text-sm">© 2025 Erias Ventures, LLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
