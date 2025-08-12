import React, { useState, useEffect, useMemo } from 'react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { Home, Info, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
// Theme toggle intentionally removed from the home header per design update

interface LayoutProps {
  children: React.ReactNode;
}

// Consistent animation variants for page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  duration: 0.15
};

const Layout = ({ children }: LayoutProps) => {
  // Header is always visible; remove hide-on-scroll to avoid initial flicker
  const location = useLocation();
  const isHome = location.pathname === "/";

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
      url: "/careers",
      icon: FileText,
    },
  ], []);

  // Removed scroll-based header visibility to prevent initial fly-away animation

  // Reset scroll position on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground dark">
      <header className="w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop/tablet layout: logo left, nav centered */}
          <div className="hidden md:grid grid-cols-3 items-center mt-4">
            <div className="flex items-center justify-start">
              <Link to="/" aria-label="Go to home">
                <img
                  src="/lovable-uploads/4ec1c21d-b6c5-4305-9f4b-6b7658a5a06d.png"
                  alt="Erias Ventures Logo"
                  className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg px-2 py-1">
                <NavBar items={navItems} align="center" />
              </div>
            </div>
            <div />
          </div>

          {/* Mobile layout: nav on top, logo below */}
            <div className="md:hidden flex flex-col items-center gap-2 mt-8">
            <div className="rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg px-2 py-1">
              <NavBar items={navItems} align="center" />
            </div>
              <Link to="/" aria-label="Go to home">
                <img
                  src="/lovable-uploads/4ec1c21d-b6c5-4305-9f4b-6b7658a5a06d.png"
                  alt="Erias Ventures Logo"
                  className="h-12 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] cursor-pointer"
                />
              </Link>
          </div>
        </div>
      </header>
      
      {/* Side vertical navbar removed to match new top header across pages */}
      
      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isHome ? 'pt-0' : 'pt-24'} pb-32`}>
        
        {/* Page content transitions - updated for consistency */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
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
                  src="/lovable-uploads/13a66669-c032-43a3-b3f9-e404085aaeb3.png" 
                  alt="Instagram" 
                  className="w-4 h-4" 
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
