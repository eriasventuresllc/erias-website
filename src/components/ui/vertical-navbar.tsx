"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface VerticalNavBarProps {
  items: NavItem[]
  className?: string
}

export function VerticalNavBar({ items, className }: VerticalNavBarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeUrl, setActiveUrl] = useState("/");

  // Set initial active URL and update when location changes
  useEffect(() => {
    setActiveUrl(location.pathname);
  }, [location.pathname]);

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
        "fixed right-4 top-4 z-50 hidden md:flex flex-col",
        className,
      )}
    >
      <motion.div 
        className="flex flex-col items-center gap-6 py-4 px-3 rounded-full bg-black/50 border border-white/10 backdrop-blur-lg shadow-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <TooltipProvider delayDuration={0}>
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeUrl === item.url;

            return (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => handleNavigation(item.url)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleNavigation(item.url);
                      }
                    }}
                    className={cn(
                      "relative cursor-pointer p-2 rounded-full transition-colors",
                      "text-white/70 hover:text-white",
                      isActive && "text-white",
                    )}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <>
                      <Icon size={20} strokeWidth={2.5} />
                      
                      {/* Active highlight */}
                      {isActive && (
                        <motion.div
                          layoutId="vertical-highlight"
                          className="absolute inset-0 w-full h-full bg-primary/10 rounded-full -z-10"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 650,
                            damping: 35,
                            mass: 0.5
                          }}
                        >
                          <img 
                            src="/lovable-uploads/ace573a3-b047-4906-b283-30d3e76f574f.png"
                            alt="Active indicator" 
                            className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 object-contain"
                          />
                        </motion.div>
                      )}
                    </>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-black/80 text-white border-white/10">
                  {item.name}
                </TooltipContent>
              </Tooltip>
            )
          })}
        </TooltipProvider>
      </motion.div>
    </div>
  )
}
