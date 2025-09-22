"use client"

import { Home, Briefcase, Building, Calendar, MessageSquare, Settings, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DashboardSidebarProps {
  collapsed: boolean
  onToggle: () => void
}

const sidebarItems = [
  { icon: Home, label: "My Home", active: true },
  { icon: Briefcase, label: "My Job Posted", active: false },
  { icon: Building, label: "Company Profile", active: false },
  { icon: Calendar, label: "Calendar", active: false },
  { icon: MessageSquare, label: "Messages", active: false },
  { icon: Settings, label: "Settings", active: false },
]

export function DashboardSidebar({ collapsed, onToggle }: DashboardSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-slate-800 border-r border-slate-700 transition-all duration-300 z-40",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="p-4">
        <Button variant="ghost" size="icon" onClick={onToggle} className="text-white hover:bg-slate-700 mb-4">
          <Menu className="h-5 w-5" />
        </Button>

        <nav className="space-y-2">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Button
                key={index}
                variant={item.active ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start text-white hover:bg-slate-700",
                  collapsed ? "px-2" : "px-4",
                  item.active && "bg-red-600 hover:bg-red-700 border border-red-500",
                )}
              >
                <Icon className="h-5 w-5" />
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </Button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
