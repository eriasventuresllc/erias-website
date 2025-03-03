
import { Home, User, Briefcase } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function MainNavigation() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Expertise', url: '/about', icon: User },
    { name: 'Careers', url: '/careers', icon: Briefcase }
  ]

  return (
    <div className="relative">
      <NavBar items={navItems} />
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
    </div>
  )
}
