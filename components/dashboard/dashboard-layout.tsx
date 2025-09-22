"use client"

import { useState } from "react"
import { DashboardSidebar } from "./dashboard-sidebar"
import { DashboardContent } from "./dashboard-content"
import { CompanyProfileCard } from "./company-profile-card"
import { CandidateHeader } from "../layout/candidate-header"

export function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <CandidateHeader/>
      <div className="flex">
        <DashboardSidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <div className="flex">
            <div className="flex-1 p-6">
              <DashboardContent />
            </div>
            <div className="w-80 p-6">
              <CompanyProfileCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
