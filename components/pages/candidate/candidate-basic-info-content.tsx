"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"

export function CandidateBasicInfoContent() {
  const router = useRouter()
  const [showError, setShowError] = useState(false)

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    governmentId: "",
    dateOfBirth: "",
    mailId: "Aishatapiwq@gmail.com",
    linkedinProfile: "",
    githubProfile: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Call this function from the parent or wherever the "Next" action is triggered
  const handleNext = () => {
    const requiredFields = ["fullName", "gender", "governmentId", "dateOfBirth", "githubProfile"]
    const hasEmptyFields = requiredFields.some((field) => !formData[field as keyof typeof formData])

    if (hasEmptyFields) {
      setShowError(true)
      return
    }

    setShowError(false)
    router.push("/candidate/register/educational-details")
  }

  return (
    <>
      {/* Error Banner */}
      {showError && (
        <div className="bg-red-500/90 text-white px-6 py-3 flex items-center justify-between mb-6 rounded">
          <span className="text-sm">Please fill all required input fields.</span>
          <button onClick={() => setShowError(false)} className="text-white hover:text-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <Input
            placeholder="Text field"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium mb-2">Gender</label>
          <Input
            placeholder="Text field"
            value={formData.gender}
            onChange={(e) => handleInputChange("gender", e.target.value)}
            className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
          />
        </div>

        {/* Government ID Proof */}
        <div>
          <label className="block text-sm font-medium mb-2">Government ID Proof</label>
          <Input
            placeholder="Text field"
            value={formData.governmentId}
            onChange={(e) => handleInputChange("governmentId", e.target.value)}
            className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium mb-2">Date of Birth</label>
          <Input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            className="bg-slate-800 border-slate-600 text-white"
          />
        </div>
      </div>

      {/* Mail ID (Read-only) */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">Mail ID</label>
        <Input
          value={formData.mailId}
          readOnly
          className="bg-slate-800 border-slate-600 text-white w-full"
        />
      </div>

      {/* LinkedIn Profile */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
        <Input
          placeholder="https://linkedin.com/in/your-profile"
          value={formData.linkedinProfile}
          onChange={(e) => handleInputChange("linkedinProfile", e.target.value)}
          className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
        />
      </div>

      {/* Github Profile */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">GitHub Profile</label>
        <Input
          placeholder="https://github.com/your-profile"
          value={formData.githubProfile}
          onChange={(e) => handleInputChange("githubProfile", e.target.value)}
          className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
        />
      </div>
    </>
  )
}
