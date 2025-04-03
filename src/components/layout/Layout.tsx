
import React from 'react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { Home, Info, FileText, Leaf } from 'lucide-react';

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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <Leaf className="h-5 w-5 text-primary mr-2" />
              <p className="text-muted-foreground text-sm">© 2025 Erias Ventures, LLC. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
