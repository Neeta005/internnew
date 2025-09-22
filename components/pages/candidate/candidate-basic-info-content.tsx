"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ProgressCircle } from "@/components/ui/progress-circle"
import { StepIndicator } from "@/components/ui/step-indicator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { registrationSteps } from "@/lib/data"

export function CandidateBasicInfoContent() {
  const router = useRouter()
  const [showError, setShowError] = useState(true)
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

  const handleNext = () => {
    // Validate required fields
    const requiredFields = ["fullName", "gender", "governmentId", "dateOfBirth", "githubProfile"]
    const hasEmptyFields = requiredFields.some((field) => !formData[field as keyof typeof formData])

    if (hasEmptyFields) {
      setShowError(true)
      return
    }

    // Navigate to next step
    router.push("/candidate/register/educational-details")
  }

  return (
    <>
      {/* Error Banner */}
      {showError && (
        <div className="bg-red-500/90 text-white px-6 py-3 flex items-center justify-between">
          <span className="text-sm">Please fill all input fields.</span>
          <button onClick={() => setShowError(false)} className="text-white hover:text-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Complete Basic Info</h1>
          <Button onClick={handleNext} className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg">
            Next
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Navigation Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <button className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center hover:bg-red-500/10 transition-colors">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <Input
                  placeholder="Text field"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="bg-slate-800 border-red-500 text-white placeholder-gray-400"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium mb-2">Gender</label>
                <Input
                  placeholder="Text field"
                  value={formData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="bg-slate-800 border-red-500 text-white placeholder-gray-400"
                />
              </div>

              {/* Government ID Proof */}
              <div>
                <label className="block text-sm font-medium mb-2">Government ID Proof</label>
                <Input
                  placeholder="Text field"
                  value={formData.governmentId}
                  onChange={(e) => handleInputChange("governmentId", e.target.value)}
                  className="bg-slate-800 border-red-500 text-white placeholder-gray-400"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium mb-2">Date of Birth</label>
                <Input
                  placeholder="Text field"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  className="bg-slate-800 border-red-500 text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Mail ID */}
            <div>
              <label className="block text-sm font-medium mb-2">Mail ID</label>
              <Input
                value={formData.mailId}
                onChange={(e) => handleInputChange("mailId", e.target.value)}
                className="bg-slate-800 border-red-500 text-white w-full"
                readOnly
              />
            </div>

            {/* LinkedIn Profile */}
            <div>
              <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
              <div className="relative">
                <Input
                  placeholder="Text field"
                  value={formData.linkedinProfile}
                  onChange={(e) => handleInputChange("linkedinProfile", e.target.value)}
                  className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 pr-10"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Github Profile */}
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center">
                Github Profile
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <Input
                  placeholder="Text field"
                  value={formData.githubProfile}
                  onChange={(e) => handleInputChange("githubProfile", e.target.value)}
                  className="bg-slate-800 border-red-500 text-white placeholder-gray-400 pr-10"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Progress and Steps */}
          <div className="flex flex-col items-center space-y-6">
            {/* Right Navigation Arrow */}
            <div className="hidden lg:flex justify-end w-full">
              <button className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center hover:bg-red-500/10 transition-colors">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress Circle */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 w-full max-w-sm">
              <div className="flex justify-center mb-6">
                <ProgressCircle percentage={45} />
              </div>

              <StepIndicator steps={registrationSteps} currentStep={3} className="space-y-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
