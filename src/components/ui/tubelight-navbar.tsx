
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

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

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
        initial={false}
        transition={{
          layout: { type: "spring", stiffness: 300, damping: 30 },
        }}
      >
        {items.map((item) => {
          const Icon = item.icon
          const active = isActive(item.url);
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
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                active && "text-primary",
              )}
              style={{ WebkitTapHighlightColor: 'transparent' }}
              layout
              initial={false}
            >
              <>
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={20} strokeWidth={2.5} className={active ? "text-[#B45364]" : ""} />
                </span>
                
                <AnimatePresence mode="wait">
                  {active && (
                    <motion.div
                      className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10 md:block hidden"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 500, 
                        damping: 30,
                        mass: 0.8
                      }}
                    />
                  )}
                </AnimatePresence>
              </>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
