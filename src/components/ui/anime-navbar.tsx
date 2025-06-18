
"use client"

import React, { useEffect, useState } from "react"
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

export function AnimeNavBar({ items, className }: NavBarProps) {
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  
  // Handle navigation
  const handleNavigation = (url: string) => {
    if (url === location.pathname) {
      return; // Already on this page
    }
    
    navigate(url);
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-5 left-0 right-0 z-[9999]">
      <div className="flex justify-center pt-6">
        <motion.div 
          className="flex items-center gap-3 bg-black/50 border border-white/10 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={SPRING_TRANSITION}
          layout="position"
          layoutId="anime-navbar"
        >
          {items.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.url
            const isHovered = hoveredTab === item.name
            const itemKey = `anime-nav-${item.name}`

            return (
              <motion.div
                key={itemKey}
                layout
                onClick={() => handleNavigation(item.url)}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
                  "text-white/70 hover:text-white select-none",
                  isActive && "text-white"
                )}
                whileHover={{
                  scale: 1.05,
                }}
                transition={SPRING_TRANSITION}
              >
                {isActive && (
                  <motion.div
                    layoutId={`active-bg-${item.name}`}
                    className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                    initial={false}
                    animate={{ 
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.03, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="absolute inset-0 bg-primary/25 rounded-full blur-md" />
                    <div className="absolute inset-[-4px] bg-primary/20 rounded-full blur-xl" />
                    <div className="absolute inset-[-8px] bg-primary/15 rounded-full blur-2xl" />
                    <div className="absolute inset-[-12px] bg-primary/5 rounded-full blur-3xl" />
                    
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                      style={{
                        animation: "shine 3s ease-in-out infinite"
                      }}
                    />
                  </motion.div>
                )}

                <motion.span
                  className="hidden md:inline relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={HOVER_TRANSITION}
                >
                  {item.name}
                </motion.span>
                <motion.span 
                  className="md:hidden relative z-10"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={SPRING_TRANSITION}
                >
                  <Icon size={18} strokeWidth={2.5} />
                </motion.span>
          
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={HOVER_TRANSITION}
                      className="absolute inset-0 bg-[#B45364]/40 rounded-md -z-10"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
} 
