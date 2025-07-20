import React from 'react';
import { cn } from '@/lib/utils';

interface GeometricBackgroundProps {
  className?: string;
}

export const GeometricBackground: React.FC<GeometricBackgroundProps> = ({ 
  className 
}) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Transparent overlay instead of solid gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/3" />
      
      {/* Geometric shapes with ultra-soft edges and minimal opacity */}
      <div className="absolute inset-0">
        {/* Large squares with increased blur for ultra-soft edges */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/2 border border-purple-400/3 rotate-12 blur-[1px] animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/3 border border-blue-400/4 -rotate-6 blur-[1px]" />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-600/1 border border-purple-300/3 rotate-45 blur-[1px]" />
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-indigo-500/2 border border-indigo-400/4 -rotate-12 blur-[1px]" />
        
        {/* Medium rectangles with ultra-subtle gradient opacity */}
        <div className="absolute top-60 left-1/3 w-20 h-48 bg-gradient-to-b from-purple-400/1 to-transparent border border-purple-300/2 rotate-3 blur-[1px]" />
        <div className="absolute top-32 right-1/3 w-36 h-16 bg-gradient-to-r from-blue-400/1 to-transparent border border-blue-300/2 -rotate-3 blur-[1px]" />
        <div className="absolute bottom-60 left-1/2 w-16 h-32 bg-gradient-to-t from-indigo-400/1 to-transparent border border-indigo-300/2 rotate-12 blur-[1px]" />
        
        {/* Small accent shapes with ultra-soft glow */}
        <div className="absolute top-16 left-1/2 w-12 h-12 bg-purple-300/2 border border-purple-200/3 rotate-45 animate-pulse blur-[1px]" />
        <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-blue-300/2 border border-blue-200/3 -rotate-45 blur-[1px]" />
        <div className="absolute top-80 right-1/4 w-14 h-14 bg-indigo-300/2 border border-indigo-200/3 rotate-30 blur-[1px]" />
        
        {/* Cross/plus shapes with ultra-soft transparency */}
        <div className="absolute top-52 left-16">
          <div className="relative w-4 h-16 bg-purple-400/2 rotate-0 blur-[1px]"></div>
          <div className="absolute top-6 -left-6 w-16 h-4 bg-purple-400/2 blur-[1px]"></div>
        </div>
        
        <div className="absolute bottom-48 right-16">
          <div className="relative w-3 h-12 bg-blue-400/2 rotate-0 blur-[1px]"></div>
          <div className="absolute top-4.5 -left-4.5 w-12 h-3 bg-blue-400/2 blur-[1px]"></div>
        </div>
        
        {/* Floating lines with ultra-subtle gradient fade */}
        <div className="absolute top-72 left-8 w-64 h-px bg-gradient-to-r from-transparent via-purple-400/3 to-transparent rotate-12 blur-[1px]" />
        <div className="absolute bottom-56 right-8 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/3 to-transparent -rotate-6 blur-[1px]" />
        
        {/* Glowing orbs with ultra-soft blur */}
        <div className="absolute top-28 right-8 w-6 h-6 bg-purple-400/3 rounded-full blur-sm animate-pulse" />
        <div className="absolute bottom-28 left-8 w-4 h-4 bg-blue-400/3 rounded-full blur-sm" />
        
        {/* Additional scattered elements for mobile with minimal transparency */}
        <div className="absolute top-96 left-4 w-6 h-20 bg-purple-500/1 border border-purple-400/2 rotate-12 md:hidden blur-[1px]" />
        <div className="absolute bottom-96 right-4 w-20 h-6 bg-blue-500/1 border border-blue-400/2 -rotate-12 md:hidden blur-[1px]" />
      </div>
      
      {/* Subtle overlay for seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-transparent" />
    </div>
  );
};