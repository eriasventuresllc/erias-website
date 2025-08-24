
"use client"

import React, { useEffect, useLayoutEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion"
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
  align?: "start" | "center" | "end"
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

export function NavBar({ items, className, align = "center" }: NavBarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isFirstRender = useRef(true);
  const prevPathRef = useRef(location.pathname);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [indicatorReady, setIndicatorReady] = useState(false);
  const indicatorLeft = useMotionValue(0);
  const indicatorWidth = useMotionValue(0);

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

  // Recompute the sliding indicator position and width when route, hover, or size changes
  useLayoutEffect(() => {
    const recomputeIndicator = () => {
      const activeItem = items.find((i) => isActive(i.url)) ?? items[0];
      const targetItemName = hoveredItem ?? activeItem.name;
      const barElement = barRef.current;
      const itemElement = targetItemName ? itemRefs.current[targetItemName] : null;
      if (!barElement || !itemElement) {
        return;
      }
      const barRect = barElement.getBoundingClientRect();
      const itemRect = itemElement.getBoundingClientRect();
      const left = itemRect.left - barRect.left + 8; // slight inset
      const width = Math.max(24, itemRect.width - 16); // avoid too small width
      const pathChanged = prevPathRef.current !== location.pathname;
      const shouldAnimate = indicatorReady && (hoveredItem !== null || pathChanged) && !isFirstRender.current;
      if (!indicatorReady || !shouldAnimate) {
        indicatorLeft.set(left);
        indicatorWidth.set(width);
        if (!indicatorReady) setIndicatorReady(true);
      } else {
        animate(indicatorLeft, left, SPRING_TRANSITION as any);
        animate(indicatorWidth, width, SPRING_TRANSITION as any);
      }
      prevPathRef.current = location.pathname;
    };

    recomputeIndicator();
    const onResize = () => recomputeIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [location.pathname, items, hoveredItem]);

  const alignmentClass = align === "start" ? "justify-start" : align === "end" ? "justify-end" : "justify-center";

  return (
    <nav
      className={cn(
        "flex z-50",
        alignmentClass,
        className,
      )}
      ref={navRef}
      aria-label="Primary"
    >
      <motion.div 
        className="relative flex items-center gap-4 py-1.5 px-3 rounded-full"
        initial={false}
        transition={SPRING_TRANSITION}
        ref={barRef}
        onMouseLeave={() => setHoveredItem(null)}
      >
        {indicatorReady && (
          <motion.div
            className="pointer-events-none absolute bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/70 to-transparent rounded-full opacity-90"
            style={{ left: indicatorLeft, width: indicatorWidth }}
          />
        )}
        <AnimatePresence mode="wait">
          {items.map((item) => {
            const Icon = item.icon
            const active = isActive(item.url);
            const isHovered = hoveredItem === item.name;
            const itemKey = `nav-tube-${item.name}`;

            return (
              <motion.div
                key={itemKey}
                ref={(el: HTMLDivElement | null) => {
                  itemRefs.current[item.name] = el;
                }}
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
                  "relative cursor-pointer text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 select-none",
                  "text-foreground/80 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                  active && "text-primary",
                )}
                style={{ WebkitTapHighlightColor: 'transparent' }}
                layout
                initial={false}
                whileHover={{
                  scale: 1.03,
                }}
                transition={SPRING_TRANSITION}
                aria-current={active ? "page" : undefined}
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
                        scale: active ? 1.1 : 1,
                        rotate: active ? 2 : 0,
                      }}
                      transition={{
                        scale: SPRING_TRANSITION,
                        rotate: { 
                          type: "tween",
                          duration: active ? 0.3 : 0.2,
                        }
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
                        className="absolute inset-0 rounded-full blur-md opacity-25 bg-primary"
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
                  
                  {/* Hover effect animation - now red background for the popup */}
                  <AnimatePresence>
                    {isHovered && !active && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={HOVER_TRANSITION}
                        className="absolute inset-0 bg-white/5 rounded-md -z-10"
                      />
                    )}
                  </AnimatePresence>
                </>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </nav>
  )
}
