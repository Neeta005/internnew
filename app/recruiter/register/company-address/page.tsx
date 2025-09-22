"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/ui/navigation"
import { ProgressCircle } from "@/components/ui/progress-circle"
import { StepIndicator } from "@/components/ui/step-indicator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { InteractiveMap } from "@/components/ui/interactive-map"
import { recruiterNavigationItems, recruiterRegistrationSteps } from "@/lib/data"

interface Location {
  lat: number
  lng: number
  address: string
}

export default function CompanyAddressPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    addressLine1: "Electronic City, Bangalore - 560100, India",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pinCode: "284939",
  })

  const handleNext = () => {
    // Navigate to next step in recruiter registration
    router.push("/recruiter/register/recruiter-info")
  }

  const handleLocationSelect = (location: Location) => {
    // Update form data based on selected location
    setFormData((prev) => ({
      ...prev,
      addressLine1: location.address,
    }))
  }

  const handleClearField = (field: string) => {
    setFormData((prev) => ({ ...prev, [field]: "" }))
  }

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
            <div>
              <h2 className="text-xl font-semibold mb-4">Google Map</h2>
              <InteractiveMap onLocationSelect={handleLocationSelect} initialLocation="Mumbai" />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-6">Company Address (Regional/Headquarters)</h2>

              <div className="space-y-6">
                {/* Address Line 1 */}
                <div>
                  <label className="block text-white text-sm font-medium mb-3">Address Line 1</label>
                  <Input
                    value={formData.addressLine1}
                    onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                    className="bg-slate-800 border-red-500 text-white"
                  />
                </div>

                {/* City and State Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-3">City</label>
                    <div className="relative">
                      <Input
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="bg-slate-800 border-red-500 text-white pr-16"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                        <button
                          onClick={() => handleClearField("city")}
                          className="w-5 h-5 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white text-xs"
                        >
                          ×
                        </button>
                        <button className="w-5 h-5 text-gray-400 hover:text-white">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-3">State</label>
                    <div className="relative">
                      <Input
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="bg-slate-800 border-red-500 text-white pr-16"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                        <button
                          onClick={() => handleClearField("state")}
                          className="w-5 h-5 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white text-xs"
                        >
                          ×
                        </button>
                        <button className="w-5 h-5 text-gray-400 hover:text-white">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Country and Pin Code Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-3">Country</label>
                    <div className="relative">
                      <Input
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="bg-slate-800 border-red-500 text-white pr-16"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                        <button
                          onClick={() => handleClearField("country")}
                          className="w-5 h-5 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white text-xs"
                        >
                          ×
                        </button>
                        <button className="w-5 h-5 text-gray-400 hover:text-white">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-3">Pin Code</label>
                    <div className="relative">
                      <select
                        value={formData.pinCode}
                        onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                        className="w-full bg-slate-800 border-2 border-red-500 text-white rounded-lg px-3 py-2 appearance-none"
                      >
                        <option value="284939">284939</option>
                        <option value="560100">560100</option>
                        <option value="400001">400001</option>
                        <option value="110001">110001</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
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
                <ProgressCircle percentage={50} />
              </div>

              <StepIndicator steps={recruiterRegistrationSteps} currentStep={2} className="space-y-4" />
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
