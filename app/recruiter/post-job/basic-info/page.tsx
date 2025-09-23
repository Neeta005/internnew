"use client"

import { useState } from "react"
import { JobPostingLayout } from "@/components/layout/job-posting-layout"
import { RecruiterHeader } from "@/components/layout/recruiter-header"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { X, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BasicInfoPage() {
  const [roleName, setRoleName] = useState("Graphic Designer")
  const [skillsInput, setSkillsInput] = useState("")
  const [selectedSkills, setSelectedSkills] = useState([
    "UI/UX Design",
    "Web Dev",
    "Artificial Intelligence",
    "Data Analysis",
  ])
  const [openings, setOpenings] = useState("43")

  const removeSkill = (skillToRemove: string) => {
    setSelectedSkills(selectedSkills.filter((skill) => skill !== skillToRemove))
  }

  const addSkill = (skill: string) => {
    if (skill && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill])
      setSkillsInput("")
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <RecruiterHeader userProfile={{ name: "Arun", avatar: "" }} />

      <JobPostingLayout title="Basic Info" nextHref="/recruiter/post-job/work-type" currentStep={1}>
        <div className="space-y-8">
          {/* Role Name */}
          <div className="space-y-3">
            <Label htmlFor="role-name" className="text-white text-base">
              Role Name
            </Label>
            <div className="relative">
              <Input
                id="role-name"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                className="bg-slate-800 border-red-500 text-white h-12 pr-20"
                placeholder="Enter role name"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <X className="h-4 w-4 text-gray-400 cursor-pointer" />
                <Search className="h-4 w-4 text-gray-400 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Skills Required */}
          <div className="space-y-3">
            <Label htmlFor="skills" className="text-white text-base">
              Skills Required
            </Label>
            <div className="relative">
              <Input
                id="skills"
                value={skillsInput}
                onChange={(e) => setSkillsInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    addSkill(skillsInput)
                  }
                }}
                className="bg-slate-800 border-red-500 text-white h-12 pr-20"
                placeholder="Skills"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <X className="h-4 w-4 text-gray-400 cursor-pointer" />
                <Search className="h-4 w-4 text-gray-400 cursor-pointer" />
              </div>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-slate-700 text-white px-3 py-1 text-sm border border-slate-600"
                >
                  {skill}
                  <X className="h-3 w-3 ml-2 cursor-pointer" onClick={() => removeSkill(skill)} />
                </Badge>
              ))}
            </div>
          </div>

          {/* Number of Openings */}
          <div className="space-y-3">
            <Label htmlFor="openings" className="text-white text-base">
              No. of Opening
            </Label>
            <Select value={openings} onValueChange={setOpenings}>
              <SelectTrigger className="bg-slate-800 border-red-500 text-white h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
                  <SelectItem key={num} value={num.toString()} className="text-white">
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </JobPostingLayout>
    </div>
  )
}
