"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/ui/navigation"
import { ProgressCircle } from "@/components/ui/progress-circle"
import { StepIndicator } from "@/components/ui/step-indicator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { recruiterNavigationItems, recruiterRegistrationSteps } from "@/lib/data"

export default function CompanyDetailsPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    gstDetails: "GST",
    companyWebsite: "www.softwarecompany.com",
    linkedinPage: "https://www.linkedin.com/in/software-company-12345xyz/",
    companyType: "startup",
  })

  const handleNext = () => {
    // Navigate to company address page with map
    router.push("/recruiter/register/company-address")
  }

  const companyTypes = [
    {
      id: "startup",
      title: "Startup",
      description: "A young company focused on innovation and rapid growth, often exploring new markets.",
    },
    {
      id: "sme",
      title: "SME",
      description: "Business with limited employees and turnover, catering to niche markets.",
    },
    {
      id: "mnc",
      title: "MNC",
      description: "A large organization operating in multiple countries with established global influence",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation items={recruiterNavigationItems} />

      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Register</h1>
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
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Company Details</h2>

            <div className="space-y-6">
              {/* GST Details */}
              <div>
                <label className="block text-white text-sm font-medium mb-3">GST Details</label>
                <Input
                  value={formData.gstDetails}
                  onChange={(e) => setFormData({ ...formData, gstDetails: e.target.value })}
                  className="bg-slate-800 border-red-500 text-white"
                />
              </div>

              {/* Company Website */}
              <div>
                <label className="block text-white text-sm font-medium mb-3">Company Website</label>
                <Input
                  value={formData.companyWebsite}
                  onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                  className="bg-slate-800 border-red-500 text-white"
                />
              </div>

              {/* LinkedIn Page */}
              <div>
                <label className="block text-white text-sm font-medium mb-3">LinkedIn Page</label>
                <Input
                  value={formData.linkedinPage}
                  onChange={(e) => setFormData({ ...formData, linkedinPage: e.target.value })}
                  className="bg-slate-800 border-red-500 text-white"
                />
              </div>

              {/* Company Type Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {companyTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      formData.companyType === type.id
                        ? "border-red-500 bg-red-500/10"
                        : "border-red-500 hover:bg-red-500/5"
                    }`}
                    onClick={() => setFormData({ ...formData, companyType: type.id })}
                  >
                    <div className="flex items-center mb-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                          formData.companyType === type.id ? "border-white bg-white" : "border-gray-400"
                        }`}
                      >
                        {formData.companyType === type.id && <div className="w-2 h-2 rounded-full bg-slate-900"></div>}
                      </div>
                      <h3 className="text-lg font-semibold text-white">{type.title}</h3>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">{type.description}</p>
                  </div>
                ))}
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
                <ProgressCircle percentage={20} />
              </div>

              <StepIndicator steps={recruiterRegistrationSteps} currentStep={1} className="space-y-4" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
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
    </div>
  )
}
