import React from 'react';

// Feature flag to enable/disable the new hero experience
const ENABLE_SMOOTH_HERO = false;

const SmoothScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default SmoothScrollWrapper; 