import React, { useEffect, useMemo, useState } from 'react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { Home, Info, FileText, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PAGE_TRANSITION, EASE_OUT_EXPO } from '@/lib/animation';
import { useLocation, Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import AuroraBackground from '@/components/ui/aurora-background';

interface LayoutProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const pageTransition = PAGE_TRANSITION;

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isMobile = useIsMobile();
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  const navItems = useMemo(() => [
    { name: "Company", url: "/", icon: Home },
    { name: "Expertise", url: "/about", icon: Info },
    {
      name: "Leaf",
      url: "/",
      imageSrc: isMobile ? "/lovable-uploads/erias-leaf-dark.png" : "/lovable-uploads/erias-leaf-dark.png",
      imageAlt: "Erias leaf",
    },
    { name: "Careers", url: "/benefits", icon: FileText },
    { name: "Openings", url: "https://careers.eriasventures.com/", icon: Briefcase },
  ], [isMobile]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsHeaderHidden(false);
  }, [location.pathname]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Always show the header near the top of the page.
      if (currentScrollY < 80) {
        setIsHeaderHidden(false);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down -> hide.
        setIsHeaderHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> show.
        setIsHeaderHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground dark">
      {/* Animated background across the whole site */}
      <AuroraBackground intensity="medium" showGrid />

      <motion.header
        className="fixed top-0 left-0 right-0 z-[100] pointer-events-none"
        initial={false}
        animate={{ y: isHeaderHidden ? '-150%' : '0%' }}
        transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-5 pb-2">
          <div className="hidden md:flex justify-center pointer-events-auto">
            <NavBar items={navItems} align="center" />
          </div>

          <div className="md:hidden flex justify-center pointer-events-auto">
            <NavBar items={navItems} align="center" />
          </div>
        </div>
      </motion.header>

      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isHome ? 'pt-0' : 'pt-20 md:pt-28'} pb-20 md:pb-24 bg-transparent relative`}>
        {!isHome && (
          <motion.div
            className="pt-0 md:pt-16 flex items-center justify-center mb-6 md:mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          >
            <Link to="/" aria-label="Go to home" className="group relative inline-block">
              <motion.img
                src="/lovable-uploads/4ec1c21d-b6c5-4305-9f4b-6b7658a5a06d.png"
                alt="Erias Ventures Logo"
                className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 scale-150 rounded-full blur-[60px] opacity-50"
                style={{
                  background:
                    "radial-gradient(circle at center, hsl(349 70% 50% / 0.42), hsl(var(--primary) / 0.15) 45%, transparent 72%)",
                }}
              />
            </Link>
          </motion.div>
        )}

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

      <footer className="relative supports-[backdrop-filter]:bg-white/5 bg-white/0 backdrop-blur-xl border-t border-white/10">
        {/* Top accent line */}
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center group">
              <img
                src="/lovable-uploads/ace573a3-b047-4906-b283-30d3e76f574f.png"
                alt="Erias Ventures Icon"
                className="h-5 w-5 mr-2 object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              />
              <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Erias Ventures, LLC.</p>
            </div>

            <div className="flex items-center flex-wrap justify-center gap-3 font-mono text-xs md:text-[13px] text-muted-foreground">
              <a href="tel:4433008638" className="hover:text-primary transition-colors">443-300-8638</a>
              <span className="hidden md:inline text-primary/40">//</span>
              <a href="mailto:info@eriasventures.com" className="hover:text-primary transition-colors">info@eriasventures.com</a>
              <span className="hidden md:inline text-primary/40">//</span>
              <a
                href="https://www.linkedin.com/company/eriasventures/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-foreground transition-transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <img src="/lovable-uploads/9688ac47-3186-432a-bc18-8964834c849f.png" alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/eriasventures/#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-foreground transition-transform hover:scale-110 ml-1"
                aria-label="Instagram"
              >
                <img src="/lovable-uploads/13a66669-c032-43a3-b3f9-e404085aaeb3.png" alt="Instagram" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
