
import React from 'react';
import { CpuArchitecture } from "@/components/ui/cpu-architecture";

interface CpuBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function CpuBackground({ children, className }: CpuBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden z-0 opacity-30">
        <div className="absolute top-0 right-0 w-full md:w-3/4 h-full">
          <CpuArchitecture 
            text="ERIAS" 
            lineMarkerSize={10} 
            animateText={true} 
            animateLines={true}
            animateMarkers={true}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full md:w-3/4 h-full transform rotate-180">
          <CpuArchitecture 
            text="TECH" 
            lineMarkerSize={10} 
            animateText={true} 
            animateLines={true}
            animateMarkers={true}
          />
        </div>
      </div>
      {children}
    </div>
  );
}
