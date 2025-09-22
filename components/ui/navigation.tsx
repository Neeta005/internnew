import Link from "next/link"
import { Button } from "./button"
import { Logo } from "./logo"

interface NavigationItem {
  label: string
  href: string
}

interface NavigationProps {
  items: NavigationItem[]
  showAuthButtons?: boolean
  userProfile?: {
    name: string
    avatar: string
  }
}

export function Navigation({ items, showAuthButtons = true, userProfile }: NavigationProps) {
  return (
    <nav className="flex items-center justify-between p-4 bg-slate-900/80 backdrop-blur-sm">
      <Logo />

      <div className="hidden md:flex items-center space-x-8">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="text-gray-300 hover:text-white transition-colors">
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {userProfile ? (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
              <span className="text-white text-sm">👤</span>
            </div>
            <span className="text-white text-sm">{userProfile.name}</span>
          </div>
        ) : showAuthButtons ? (
          <>
            <Button variant="ghost" className="text-orange-500 hover:text-orange-400">
              🔑 Login/Register
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              📝 Post An Internship
            </Button>
          </>
        ) : null}
      </div>
    </nav>
  )
}
