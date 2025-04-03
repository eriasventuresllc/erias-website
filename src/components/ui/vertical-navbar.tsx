
"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
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

  return (
    <div
      className={cn(
        "fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col",
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

            return (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) => cn(
                      "relative cursor-pointer p-2 rounded-full transition-colors",
                      "text-white/70 hover:text-white",
                      isActive && "text-white",
                    )}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {({ isActive }) => (
                      <>
                        <Icon size={20} strokeWidth={2.5} />
                        
                        {/* Active highlight */}
                        {isActive && (
                          <motion.div
                            layoutId="vertical-highlight"
                            className="absolute inset-0 w-full h-full bg-primary/20 rounded-full -z-10"
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          >
                            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-full" />
                          </motion.div>
                        )}
                      </>
                    )}
                  </NavLink>
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
