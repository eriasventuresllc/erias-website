
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
        {/* Large squares with borders and movement */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-400/30 rotate-12 animate-pulse" 
             style={{ animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute top-40 right-20 w-24 h-24 border border-gray-400/30 -rotate-6" 
             style={{ animation: 'float 8s ease-in-out infinite reverse' }} />
        <div className="absolute bottom-40 left-20 w-40 h-40 border border-gray-500/25 rotate-45" 
             style={{ animation: 'float 10s ease-in-out infinite' }} />
        <div className="absolute bottom-20 right-40 w-28 h-28 border border-gray-400/30 -rotate-12" 
             style={{ animation: 'float 7s ease-in-out infinite reverse' }} />
        
        {/* Medium rectangles with borders */}
        <div className="absolute top-60 left-1/3 w-20 h-48 border border-gray-400/25 rotate-3" 
             style={{ animation: 'sway 12s ease-in-out infinite' }} />
        <div className="absolute top-32 right-1/3 w-36 h-16 border border-gray-400/25 -rotate-3" 
             style={{ animation: 'sway 9s ease-in-out infinite reverse' }} />
        <div className="absolute bottom-60 left-1/2 w-16 h-32 border border-gray-400/25 rotate-12" 
             style={{ animation: 'float 11s ease-in-out infinite' }} />
        
        {/* Small accent shapes with borders */}
        <div className="absolute top-16 left-1/2 w-12 h-12 border border-gray-300/35 rotate-45 animate-pulse" 
             style={{ animation: 'float 5s ease-in-out infinite, pulse 2s ease-in-out infinite' }} />
        <div className="absolute bottom-32 left-1/4 w-8 h-8 border border-gray-300/35 -rotate-45" 
             style={{ animation: 'float 6s ease-in-out infinite reverse' }} />
        <div className="absolute top-80 right-1/4 w-14 h-14 border border-gray-300/35 rotate-30" 
             style={{ animation: 'sway 8s ease-in-out infinite' }} />
        
        {/* Cross/plus shapes with borders */}
        <div className="absolute top-52 left-16" style={{ animation: 'float 9s ease-in-out infinite' }}>
          <div className="relative w-4 h-16 border border-gray-400/25 rotate-0"></div>
          <div className="absolute top-6 -left-6 w-16 h-4 border border-gray-400/25"></div>
        </div>
        
        <div className="absolute bottom-48 right-16" style={{ animation: 'sway 7s ease-in-out infinite reverse' }}>
          <div className="relative w-3 h-12 border border-gray-400/25 rotate-0"></div>
          <div className="absolute top-4.5 -left-4.5 w-12 h-3 border border-gray-400/25"></div>
        </div>
        
        {/* Floating lines */}
        <div className="absolute top-72 left-8 w-64 h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent rotate-12" 
             style={{ animation: 'drift 15s linear infinite' }} />
        <div className="absolute bottom-56 right-8 w-48 h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent -rotate-6" 
             style={{ animation: 'drift 12s linear infinite reverse' }} />
        
        {/* Glowing orbs with movement */}
        <div className="absolute top-28 right-8 w-6 h-6 border border-gray-400/35 rounded-full animate-pulse" 
             style={{ animation: 'float 4s ease-in-out infinite, pulse 2s ease-in-out infinite' }} />
        <div className="absolute bottom-28 left-8 w-4 h-4 border border-gray-400/35 rounded-full" 
             style={{ animation: 'float 6s ease-in-out infinite reverse' }} />
        
        {/* Additional scattered elements for mobile */}
        <div className="absolute top-96 left-4 w-6 h-20 border border-gray-500/25 rotate-12 md:hidden" 
             style={{ animation: 'sway 10s ease-in-out infinite' }} />
        <div className="absolute bottom-96 right-4 w-20 h-6 border border-gray-500/25 -rotate-12 md:hidden" 
             style={{ animation: 'float 8s ease-in-out infinite reverse' }} />
      </div>
      
      {/* Subtle overlay for seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-transparent" />
    </div>
  );
};
