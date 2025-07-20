
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
        {/* Large squares with soft gradients */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gray-400/20 via-gray-300/10 to-transparent rotate-12 blur-sm animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-gray-400/20 via-gray-300/10 to-transparent -rotate-6 blur-sm" />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-gray-500/15 via-gray-400/8 to-transparent rotate-45 blur-sm" />
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-gradient-to-br from-gray-400/20 via-gray-300/10 to-transparent -rotate-12 blur-sm" />
        
        {/* Medium rectangles */}
        <div className="absolute top-60 left-1/3 w-20 h-48 bg-gradient-to-b from-gray-400/15 via-gray-300/8 to-transparent rotate-3 blur-sm" />
        <div className="absolute top-32 right-1/3 w-36 h-16 bg-gradient-to-r from-gray-400/15 via-gray-300/8 to-transparent -rotate-3 blur-sm" />
        <div className="absolute bottom-60 left-1/2 w-16 h-32 bg-gradient-to-t from-gray-400/15 via-gray-300/8 to-transparent rotate-12 blur-sm" />
        
        {/* Small accent shapes */}
        <div className="absolute top-16 left-1/2 w-12 h-12 bg-gradient-to-br from-gray-300/20 via-gray-200/10 to-transparent rotate-45 animate-pulse blur-sm" />
        <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-gradient-to-br from-gray-300/20 via-gray-200/10 to-transparent -rotate-45 blur-sm" />
        <div className="absolute top-80 right-1/4 w-14 h-14 bg-gradient-to-br from-gray-300/20 via-gray-200/10 to-transparent rotate-30 blur-sm" />
        
        {/* Cross/plus shapes */}
        <div className="absolute top-52 left-16">
          <div className="relative w-4 h-16 bg-gradient-to-b from-gray-400/15 via-gray-300/8 to-transparent rotate-0 blur-sm"></div>
          <div className="absolute top-6 -left-6 w-16 h-4 bg-gradient-to-r from-gray-400/15 via-gray-300/8 to-transparent blur-sm"></div>
        </div>
        
        <div className="absolute bottom-48 right-16">
          <div className="relative w-3 h-12 bg-gradient-to-b from-gray-400/15 via-gray-300/8 to-transparent rotate-0 blur-sm"></div>
          <div className="absolute top-4.5 -left-4.5 w-12 h-3 bg-gradient-to-r from-gray-400/15 via-gray-300/8 to-transparent blur-sm"></div>
        </div>
        
        {/* Floating lines */}
        <div className="absolute top-72 left-8 w-64 h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent rotate-12 blur-sm" />
        <div className="absolute bottom-56 right-8 w-48 h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent -rotate-6 blur-sm" />
        
        {/* Glowing orbs */}
        <div className="absolute top-28 right-8 w-6 h-6 bg-gradient-radial from-gray-400/25 to-transparent rounded-full blur-md animate-pulse" />
        <div className="absolute bottom-28 left-8 w-4 h-4 bg-gradient-radial from-gray-400/25 to-transparent rounded-full blur-md" />
        
        {/* Additional scattered elements for mobile */}
        <div className="absolute top-96 left-4 w-6 h-20 bg-gradient-to-b from-gray-500/15 via-gray-400/8 to-transparent rotate-12 md:hidden blur-sm" />
        <div className="absolute bottom-96 right-4 w-20 h-6 bg-gradient-to-r from-gray-500/15 via-gray-400/8 to-transparent -rotate-12 md:hidden blur-sm" />
      </div>
      
      {/* Subtle overlay for seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-transparent" />
    </div>
  );
};
