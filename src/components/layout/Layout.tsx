
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
      <NavBar items={navItems} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
        {children}
      </main>
      <footer className="bg-secondary py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">© 2024 Erias Ventures. All rights reserved.</p>
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
