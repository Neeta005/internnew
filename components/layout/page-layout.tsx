import { Navigation } from "@/components/ui/navigation"
import type { ReactNode } from "react"

interface PageLayoutProps {
  children: ReactNode
  navigationItems: Array<{
    label: string
    href: string
    isActive?: boolean
  }>
}

export function PageLayout({ children, navigationItems }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation items={navigationItems} />
      {children}

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 container mx-auto px-6">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <span>you agree to our</span>
          <a href="#" className="text-blue-400 hover:underline">
            Terms of use
          </a>
          <span>,</span>
          <a href="#" className="text-blue-400 hover:underline">
            Privacy and policy
          </a>
        </div>
        <div>
          © 2025 - Copyright: <span className="text-white">World of Interns</span>
        </div>
      </footer>
    </div>
  )
}
