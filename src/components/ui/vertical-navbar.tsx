
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
        "fixed right-4 top-4 z-50 hidden md:flex flex-col",
        className,
      )}
    >
      <motion.div 
        className="flex flex-col items-center gap-6 py-5 px-4 rounded-full bg-black/50 border border-white/10 backdrop-blur-lg shadow-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        layoutId="vertical-navbar"
        layout="position"
      >
        <TooltipProvider delayDuration={0}>
          {items.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.url;

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
                      "relative cursor-pointer p-3 rounded-full transition-colors duration-300",
                      "text-white/70 hover:text-white",
                      isActive ? "text-[#B45364]" : "text-white/70",
                    )}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <>
                      <Icon size={24} strokeWidth={2.5} />
                      
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 w-full h-full bg-primary/10 rounded-full -z-10"
                          layoutId={`active-indicator-${item.name}`}
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 650,
                            damping: 35,
                            mass: 0.5
                          }}
                        />
                      )}
                    </>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-black/80 text-white border-white/10 flex items-center">
                  <img 
                    src="/lovable-uploads/08860f36-fa2d-4182-bcba-1e2d2476d92a.png"
                    alt="Leaf" 
                    className="h-3.5 w-auto mr-1.5 object-contain" 
                  />
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
