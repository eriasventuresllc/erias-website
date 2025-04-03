
import React from 'react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { Home, Info, FileText } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  {
    name: "Company",
    url: "/",
    icon: Home,
  },
  {
    name: "Expertise",
    url: "/about",
    icon: Info,
  },
  {
    name: "Careers",
    url: "/projects",
    icon: FileText,
  },
];

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <header className="w-full bg-secondary/50 backdrop-blur-md border-b border-border fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/11aab3d5-84b3-4b4f-9a00-48fffd0def4c.png" 
                alt="Erias Ventures Logo" 
                className="h-8" 
              />
            </div>
          </div>
          <NavBar items={navItems} className="absolute left-1/2 transform -translate-x-1/2" />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        {children}
      </main>
      <footer className="bg-secondary py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/ace573a3-b047-4906-b283-30d3e76f574f.png" 
                alt="Erias Ventures Icon" 
                className="h-6 w-6 mr-2" 
              />
              <p className="text-muted-foreground text-sm">© 2025 Erias Ventures, LLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
