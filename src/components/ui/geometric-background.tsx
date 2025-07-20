
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
      
      {/* Geometric shapes with ultra-soft edges and minimal opacity */}
      <div className="absolute inset-0">
        {/* Large squares with soft gradients instead of solid colors */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/8 via-purple-400/4 to-transparent rotate-12 blur-sm animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/8 via-blue-400/4 to-transparent -rotate-6 blur-sm" />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-purple-600/6 via-purple-500/3 to-transparent rotate-45 blur-sm" />
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-gradient-to-br from-indigo-500/8 via-indigo-400/4 to-transparent -rotate-12 blur-sm" />
        
        {/* Medium rectangles with ultra-subtle gradient opacity */}
        <div className="absolute top-60 left-1/3 w-20 h-48 bg-gradient-to-b from-purple-400/6 via-purple-300/3 to-transparent rotate-3 blur-sm" />
        <div className="absolute top-32 right-1/3 w-36 h-16 bg-gradient-to-r from-blue-400/6 via-blue-300/3 to-transparent -rotate-3 blur-sm" />
        <div className="absolute bottom-60 left-1/2 w-16 h-32 bg-gradient-to-t from-indigo-400/6 via-indigo-300/3 to-transparent rotate-12 blur-sm" />
        
        {/* Small accent shapes with ultra-soft glow */}
        <div className="absolute top-16 left-1/2 w-12 h-12 bg-gradient-to-br from-purple-300/8 via-purple-200/4 to-transparent rotate-45 animate-pulse blur-sm" />
        <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-gradient-to-br from-blue-300/8 via-blue-200/4 to-transparent -rotate-45 blur-sm" />
        <div className="absolute top-80 right-1/4 w-14 h-14 bg-gradient-to-br from-indigo-300/8 via-indigo-200/4 to-transparent rotate-30 blur-sm" />
        
        {/* Cross/plus shapes with ultra-soft transparency */}
        <div className="absolute top-52 left-16">
          <div className="relative w-4 h-16 bg-gradient-to-b from-purple-400/6 via-purple-300/3 to-transparent rotate-0 blur-sm"></div>
          <div className="absolute top-6 -left-6 w-16 h-4 bg-gradient-to-r from-purple-400/6 via-purple-300/3 to-transparent blur-sm"></div>
        </div>
        
        <div className="absolute bottom-48 right-16">
          <div className="relative w-3 h-12 bg-gradient-to-b from-blue-400/6 via-blue-300/3 to-transparent rotate-0 blur-sm"></div>
          <div className="absolute top-4.5 -left-4.5 w-12 h-3 bg-gradient-to-r from-blue-400/6 via-blue-300/3 to-transparent blur-sm"></div>
        </div>
        
        {/* Floating lines with ultra-subtle gradient fade */}
        <div className="absolute top-72 left-8 w-64 h-px bg-gradient-to-r from-transparent via-purple-400/8 to-transparent rotate-12 blur-sm" />
        <div className="absolute bottom-56 right-8 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/8 to-transparent -rotate-6 blur-sm" />
        
        {/* Glowing orbs with ultra-soft blur */}
        <div className="absolute top-28 right-8 w-6 h-6 bg-gradient-radial from-purple-400/10 to-transparent rounded-full blur-md animate-pulse" />
        <div className="absolute bottom-28 left-8 w-4 h-4 bg-gradient-radial from-blue-400/10 to-transparent rounded-full blur-md" />
        
        {/* Additional scattered elements for mobile with minimal transparency */}
        <div className="absolute top-96 left-4 w-6 h-20 bg-gradient-to-b from-purple-500/6 via-purple-400/3 to-transparent rotate-12 md:hidden blur-sm" />
        <div className="absolute bottom-96 right-4 w-20 h-6 bg-gradient-to-r from-blue-500/6 via-blue-400/3 to-transparent -rotate-12 md:hidden blur-sm" />
      </div>
      
      {/* Subtle overlay for seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-transparent" />
    </div>
  );
};
