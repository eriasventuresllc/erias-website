"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom"
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
  const [activeUrl, setActiveUrl] = useState("/");

  // Set initial active URL and update when location changes
  useEffect(() => {
    setActiveUrl(location.pathname);
  }, [location.pathname]);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  // Custom navigation handler without any browser navigation
  const handleNavigation = (url: string) => {
    if (url === location.pathname) {
      return; // Already on this page
    }
    
    setActiveUrl(url);
    navigate(url, { replace: true });
  };

  return (
    <div
      className={cn(
        "flex justify-center z-50",
        className,
      )}
    >
      <div className="flex items-center gap-6 py-1 px-3 rounded-full">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeUrl === item.url;

          return (
            <div
              key={item.name}
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
                isActive && "text-primary",
              )}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <>
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={20} strokeWidth={2.5} className={isActive ? "text-[#B45364]" : ""} />
                </span>
                
                {/* Only animate the highlighting */}
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10 md:block hidden"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 650, 
                      damping: 35,
                      mass: 0.5
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full" />
                  </motion.div>
                )}
              </>
            </div>
          )
        })}
      </div>
    </div>
  )
}
