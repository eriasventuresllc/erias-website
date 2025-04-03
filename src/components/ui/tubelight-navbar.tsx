"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { NavLink, useLocation } from "react-router-dom"
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
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []);

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

          return (
            <NavLink
              key={item.name}
              to={item.url}
              className={({ isActive }) => cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "text-primary",
              )}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {({ isActive }) => (
                <>
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={20} strokeWidth={2.5} />
                  </span>
                  
                  {/* Only animate the highlighting */}
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full" />
                    </motion.div>
                  )}
                </>
              )}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}
