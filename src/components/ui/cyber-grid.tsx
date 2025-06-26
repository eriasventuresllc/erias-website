"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CyberGridProps = {
  className?: string;
  gridColor?: string;
  glitchIntensity?: number;
};

export const CyberGrid = ({ 
  className, 
  gridColor = "#ff6b6b20", 
  glitchIntensity = 0.3 
}: CyberGridProps) => {
  const [glitchLines, setGlitchLines] = useState<number[]>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < glitchIntensity) {
        const newGlitchLines = Array.from({ length: Math.floor(Math.random() * 3) + 1 }, 
          () => Math.floor(Math.random() * 20)
        );
        setGlitchLines(newGlitchLines);
        
        setTimeout(() => {
          setGlitchLines([]);
        }, 150);
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, [glitchIntensity]);
  
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Main Grid */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0">
        {/* Horizontal scanning lines */}
        <motion.div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-60"
          animate={{
            y: ["0%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-red-200 to-transparent opacity-40"
          animate={{
            y: ["100%", "0%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
        />
        
        {/* Vertical scanning lines */}
        <motion.div
          className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-red-300 to-transparent opacity-50"
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      
      {/* Glitch Lines */}
      {glitchLines.map((line, index) => (
        <motion.div
          key={`${line}-${index}`}
          className="absolute w-full h-0.5 bg-gradient-to-r from-red-500 via-white to-red-500"
          style={{ top: `${line * 5}%` }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scaleX: [0, 1, 0],
            x: [0, Math.random() * 10 - 5, 0]
          }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        />
      ))}
      
      {/* Corner Elements */}
      <div className="absolute top-4 left-4">
        <div className="w-8 h-8 border-l-2 border-t-2 border-red-300 opacity-60" />
      </div>
      <div className="absolute top-4 right-4">
        <div className="w-8 h-8 border-r-2 border-t-2 border-red-300 opacity-60" />
      </div>
      <div className="absolute bottom-4 left-4">
        <div className="w-8 h-8 border-l-2 border-b-2 border-red-300 opacity-60" />
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="w-8 h-8 border-r-2 border-b-2 border-red-300 opacity-60" />
      </div>
      
      {/* Data Flow Indicators */}
      <motion.div
        className="absolute top-1/4 left-0 w-2 h-16 bg-gradient-to-b from-red-300 to-transparent opacity-70"
        animate={{
          x: ["0%", "100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-0 w-2 h-16 bg-gradient-to-b from-red-200 to-transparent opacity-70"
        animate={{
          x: ["0%", "-100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}; 