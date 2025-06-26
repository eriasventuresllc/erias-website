
import React from 'react';
import { SparklesCore } from './sparkles-core';

const CyberStarsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <SparklesCore
        background="#000000"
        particleColor="#00ffff"
        particleDensity={80}
        speed={2}
        minSize={0.5}
        maxSize={2}
        className="w-full h-full"
      />
      
      {/* Trailing effect on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
};

export { CyberStarsBackground };
