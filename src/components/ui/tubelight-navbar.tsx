
"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation, useNavigate } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

// Consistent animation constants
const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

const HOVER_TRANSITION = {
  duration: 0.2,
  ease: "easeInOut"
};

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Function to determine if a URL is active
  const isActive = (url: string) => location.pathname === url;

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  // Record first render completion
  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  // Custom navigation handler without any browser navigation
  const handleNavigation = (url: string) => {
    if (url === location.pathname) {
      return; // Already on this page
    }
    navigate(url);
  };

  return (
    <div
      className={cn(
        "flex justify-center z-50",
        className,
      )}
      ref={navRef}
    >
      <motion.div 
        className="flex items-center gap-6 py-1 px-3 rounded-full"
        layoutId="tubelight-navbar"
        layout="position"
        initial={false}
        transition={SPRING_TRANSITION}
      >
        <AnimatePresence mode="wait">
          {items.map((item) => {
            const Icon = item.icon
            const active = isActive(item.url);
            const isHovered = hoveredItem === item.name;
            const itemKey = `nav-tube-${item.name}`;

            return (
              <motion.div
                key={itemKey}
                role="button"
                tabIndex={0}
                onClick={() => handleNavigation(item.url)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleNavigation(item.url);
                  }
                }}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300",
                  "text-foreground/80 hover:text-primary",
                  active && "text-primary",
                )}
                style={{ WebkitTapHighlightColor: 'transparent' }}
                layout
                initial={false}
                whileHover={{
                  scale: 1.05,
                }}
                transition={SPRING_TRANSITION}
              >
                <>
                  <motion.span 
                    className="hidden md:inline"
                    initial={{ y: 0 }}
                    animate={{ y: active ? -2 : 0 }}
                    transition={SPRING_TRANSITION}
                  >
                    {item.name}
                  </motion.span>
                  
                  {/* Enhanced icon animation for mobile */}
                  <motion.div 
                    className="md:hidden relative"
                    initial={false}
                  >
                    {/* The icon with enhanced animation */}
                    <motion.div
                      initial={{ scale: 1, rotate: 0 }}
                      animate={{ 
                        scale: active ? 1.15 : 1,
                        rotate: active ? [0, 5, 0, -5, 0] : 0,
                      }}
                      transition={{
                        scale: SPRING_TRANSITION,
                        rotate: active ? { 
                          ...SPRING_TRANSITION,
                          duration: 0.5,
                        } : { duration: 0.2 }
                      }}
                    >
                      <Icon 
                        size={20} 
                        strokeWidth={2.5} 
                        className={cn(
                          "transition-colors duration-300",
                          active ? "text-primary" : "text-foreground/80"
                        )} 
                      />
                    </motion.div>
                    
                    {/* Glow effect under active icon */}
                    {active && (
                      <motion.div
                        className="absolute inset-0 rounded-full blur-md opacity-30 bg-primary"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.5 }}
                        transition={SPRING_TRANSITION}
                      />
                    )}
                  </motion.div>
                  
                  {active && (
                    <motion.div
                      layoutId="tube-lamp"
                      className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10 md:block hidden"
                      initial={false}
                      transition={SPRING_TRANSITION}
                    />
                  )}
                  
                  {/* Hover effect animation */}
                  <AnimatePresence>
                    {isHovered && !active && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={HOVER_TRANSITION}
                        className="absolute inset-0 bg-primary/5 rounded-full -z-10"
                      />
                    )}
                  </AnimatePresence>
                </>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
