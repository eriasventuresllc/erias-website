
import React from 'react';
import { MainNavigation } from '@/components/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        {children}
      </main>
    </div>
  );
};

export default Layout;
