
"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  const navRef = useRef<HTMLDivElement>(null);
  
  // Prevent re-renders of nav items
  const isActive = (url: string) => location.pathname === url;

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
      ref={navRef}
    >
      <motion.div 
        className="flex flex-col items-center gap-6 py-5 px-4 rounded-full bg-black/50 border border-white/10 backdrop-blur-lg shadow-lg"
        initial={false}
        animate={{ opacity: 1 }}
        layoutId="vertical-navbar"
        transition={{
          layout: { type: "spring", stiffness: 300, damping: 30 }
        }}
      >
        <TooltipProvider delayDuration={0}>
          {items.map((item) => {
            const Icon = item.icon
            const active = isActive(item.url);
            const itemKey = `nav-vertical-${item.name}`;

            return (
              <Tooltip key={itemKey}>
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
                      active ? "text-[#B45364]" : "text-white/70",
                    )}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Icon size={24} strokeWidth={2.5} />
                    
                    <AnimatePresence mode="wait">
                      {active && (
                        <motion.div
                          className="absolute inset-0 w-full h-full bg-primary/10 rounded-full -z-10"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{
                            type: "spring",
                            stiffness: 500, 
                            damping: 30,
                            mass: 0.8
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-black/80 text-white border-white/10 flex items-center" sideOffset={5}>
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
