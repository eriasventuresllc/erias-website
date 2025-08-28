import React, { useState, useEffect, useMemo, useRef } from 'react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { Home, Info, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PAGE_TRANSITION } from '@/lib/animation';
import { useLocation, Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
// Theme toggle intentionally removed from the home header per design update

interface LayoutProps {
  children: React.ReactNode;
}

// Consistent animation variants for page transitions (gentle crossfade)
const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 }
};

const pageTransition = PAGE_TRANSITION;

const Layout = ({ children }: LayoutProps) => {
  // Header is always visible; remove hide-on-scroll to avoid initial flicker
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isMobile = useIsMobile();

  // Mobile-only: hide header on scroll down, show on scroll up
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

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

  // Track scroll direction (mobile only)
  useEffect(() => {
    if (!isMobile) {
      setShowHeader(true);
      return;
    }

    lastScrollYRef.current = typeof window !== 'undefined' ? window.scrollY : 0;

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY || 0;
        const delta = Math.abs(currentY - lastScrollYRef.current);
        const isScrollingDown = currentY > lastScrollYRef.current;
        lastScrollYRef.current = currentY;

        if (currentY < 10) {
          setShowHeader(true);
        } else if (delta > 3) {
          if (isScrollingDown) {
            setShowHeader(false);
          } else {
            setShowHeader(true);
          }
        }
        tickingRef.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  // Reset scroll position on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    // Ensure header is visible after route change
    setShowHeader(true);
  }, [location.pathname]);

  // Logo remains fixed in place without scroll-based transforms

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground dark">
      <header className={`w-full md:relative md:top-auto md:left-auto fixed top-0 left-0 z-[100] bg-transparent transform-gpu transition-transform duration-300 ease-in-out ${showHeader ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
          {/* Desktop/tablet layout: fixed header contains only nav */}
          <div className="hidden md:flex flex-col items-center mt-4 bg-transparent">
            <NavBar items={navItems} align="center" />
          </div>

          {/* Mobile layout: fixed header contains only nav */}
          <div className="md:hidden flex flex-col items-center gap-4 mt-10 bg-transparent">
            <NavBar items={navItems} align="center" />
          </div>
        </div>
      </header>
      
      {/* Side vertical navbar removed to match new top header across pages */}
      
      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isHome ? 'pt-0' : 'pt-0'} pb-32 bg-transparent relative`}>
        {/* Non-sticky ERIAS logo below fixed nav on non-home pages */}
        {!isHome && (
          <div className="pt-24 md:pt-20 flex items-center justify-center mb-8 md:mb-10">
            <Link to="/" aria-label="Go to home">
              <img
                src="/lovable-uploads/4ec1c21d-b6c5-4305-9f4b-6b7658a5a06d.png"
                alt="Erias Ventures Logo"
                className="h-20 md:h-24 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] cursor-pointer"
              />
            </Link>
          </div>
        )}
        
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
      <footer className="supports-[backdrop-filter]:bg-white/5 bg-white/0 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/ace573a3-b047-4906-b283-30d3e76f574f.png" 
                alt="Erias Ventures Icon" 
                className="h-5 w-5 mr-2 object-contain" 
              />
              <p className="text-muted-foreground text-sm">© 2025 Erias Ventures, LLC.</p>
            </div>
            
            <div className="flex items-center flex-wrap justify-center gap-3 text-sm font-medium text-muted-foreground">
              <span>443-300-8638</span>
              <span className="hidden md:inline text-white/20">|</span>
              <a href="mailto:info@eriasventures.com" className="hover:text-foreground transition-colors">info@eriasventures.com</a>
              <span className="hidden md:inline text-white/20">|</span>
              <a 
                href="https://www.linkedin.com/company/eriasventures/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-foreground transition-colors"
                aria-label="LinkedIn"
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
                className="flex items-center hover:text-foreground transition-colors ml-1"
                aria-label="Instagram"
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
