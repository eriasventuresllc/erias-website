
"use client"

import React from "react"
import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [isDark, setIsDark] = React.useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors ${className}`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={16} className="text-foreground" />
      ) : (
        <Moon size={16} className="text-foreground" />
      )}
    </button>
  )
}
