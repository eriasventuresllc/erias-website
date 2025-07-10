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
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Geometric shapes */}
      <div className="absolute inset-0">
        {/* Large squares */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 border border-purple-400/20 rotate-12 animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 border border-blue-400/20 -rotate-6" />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-600/5 border border-purple-300/15 rotate-45" />
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-indigo-500/10 border border-indigo-400/20 -rotate-12" />
        
        {/* Medium rectangles */}
        <div className="absolute top-60 left-1/3 w-20 h-48 bg-purple-400/8 border border-purple-300/15 rotate-3" />
        <div className="absolute top-32 right-1/3 w-36 h-16 bg-blue-400/8 border border-blue-300/15 -rotate-3" />
        <div className="absolute bottom-60 left-1/2 w-16 h-32 bg-indigo-400/8 border border-indigo-300/15 rotate-12" />
        
        {/* Small accent shapes */}
        <div className="absolute top-16 left-1/2 w-12 h-12 bg-purple-300/15 border border-purple-200/25 rotate-45 animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-blue-300/15 border border-blue-200/25 -rotate-45" />
        <div className="absolute top-80 right-1/4 w-14 h-14 bg-indigo-300/15 border border-indigo-200/25 rotate-30" />
        
        {/* Cross/plus shapes */}
        <div className="absolute top-52 left-16">
          <div className="relative w-4 h-16 bg-purple-400/20 rotate-0"></div>
          <div className="absolute top-6 -left-6 w-16 h-4 bg-purple-400/20"></div>
        </div>
        
        <div className="absolute bottom-48 right-16">
          <div className="relative w-3 h-12 bg-blue-400/20 rotate-0"></div>
          <div className="absolute top-4.5 -left-4.5 w-12 h-3 bg-blue-400/20"></div>
        </div>
        
        {/* Floating lines */}
        <div className="absolute top-72 left-8 w-64 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent rotate-12" />
        <div className="absolute bottom-56 right-8 w-48 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -rotate-6" />
        
        {/* Glowing orbs */}
        <div className="absolute top-28 right-8 w-6 h-6 bg-purple-400/20 rounded-full blur-sm animate-pulse" />
        <div className="absolute bottom-28 left-8 w-4 h-4 bg-blue-400/20 rounded-full blur-sm" />
        
        {/* Additional scattered elements for mobile */}
        <div className="absolute top-96 left-4 w-6 h-20 bg-purple-500/10 border border-purple-400/15 rotate-12 md:hidden" />
        <div className="absolute bottom-96 right-4 w-20 h-6 bg-blue-500/10 border border-blue-400/15 -rotate-12 md:hidden" />
      </div>
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30" />
    </div>
  );
};