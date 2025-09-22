"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface AuthToggleProps {
  onToggle: (type: "candidate" | "recruiter") => void
  defaultType?: "candidate" | "recruiter"
}

export function AuthToggle({ onToggle, defaultType = "candidate" }: AuthToggleProps) {
  const [activeType, setActiveType] = useState<"candidate" | "recruiter">(defaultType)

  const handleToggle = (type: "candidate" | "recruiter") => {
    setActiveType(type)
    onToggle(type)
  }

  return (
    <div className="flex bg-slate-700 rounded-lg p-1 mb-6">
      <Button
        variant={activeType === "candidate" ? "default" : "ghost"}
        className={`flex-1 text-sm font-medium ${
          activeType === "candidate"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "text-gray-300 hover:text-white hover:bg-slate-600"
        }`}
        onClick={() => handleToggle("candidate")}
      >
        As Candidate
      </Button>
      <Button
        variant={activeType === "recruiter" ? "default" : "ghost"}
        className={`flex-1 text-sm font-medium ${
          activeType === "recruiter"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "text-gray-300 hover:text-white hover:bg-slate-600"
        }`}
        onClick={() => handleToggle("recruiter")}
      >
        As Recruiter
      </Button>
    </div>
  )
}
