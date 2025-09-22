"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PageLayout } from "@/components/layout/page-layout"
import { RegistrationPageLayout } from "@/components/layout/registration-page-layout"
import { Input } from "@/components/ui/input"
import { InteractiveMap } from "@/components/ui/interactive-map"
import { recruiterNavigationItems } from "@/lib/data"

interface Location {
  lat: number
  lng: number
  address: string
}

export default function CompanyAddressPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    addressLine1: "Mumbai, Maharashtra, India",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  })

  const handleLocationSelect = (location: Location) => {
    setFormData((prev) => ({
      ...prev,
      addressLine1: location.address,
      // Optionally extract city/state etc from location.address if needed
    }))
  }

  const handleClearField = (field: string) => {
    setFormData((prev) => ({ ...prev, [field]: "" }))
  }

  return (
    <PageLayout navigationItems={recruiterNavigationItems}>
      <RegistrationPageLayout
        title="Company Address"
        nextHref="/recruiter/register/recruiter-info"
        currentStep={1}
      >
        <div className="space-y-8 rounded-xl p-8 min-h-[450px]">
          
          {/* Map Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Select Location</h3>
            <div className="border rounded-xl overflow-hidden" style={{ height: "350px" }}>
              <InteractiveMap
                initialLocationName={formData.addressLine1 || "Mumbai"}
                onLocationSelect={handleLocationSelect}
                className=""
              />
            </div>
          </div>

          {/* Company Address Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Company Address (Regional/Headquarters)
            </h3>

            <div className="space-y-6">
              {/* Address Line 1 */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Address Line 1
                </label>
                <Input
                  value={formData.addressLine1}
                  onChange={(e) =>
                    setFormData({ ...formData, addressLine1: e.target.value })
                  }
                  className="bg-slate-700 border-2 border-red-500 text-white h-12 px-4 rounded-lg focus:border-red-400 transition-colors"
                />
              </div>

              {/* City and State Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">City</label>
                  <div className="relative">
                    <Input
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="bg-slate-700 border-2 border-red-500 text-white h-12 px-4 pr-20 rounded-lg focus:border-red-400 transition-colors"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                      <button
                        onClick={() => handleClearField("city")}
                        className="w-6 h-6 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white text-sm transition-colors"
                      >
                        ×
                      </button>
                      {/* optional search icon */}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">State</label>
                  <div className="relative">
                    <Input
                      value={formData.state}
                      onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                      }
                      className="bg-slate-700 border-2 border-red-500 text-white h-12 px-4 pr-20 rounded-lg focus:border-red-400 transition-colors"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                      <button
                        onClick={() => handleClearField("state")}
                        className="w-6 h-6 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white text-sm transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Country and Pin Code Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Country</label>
                  <div className="relative">
                    <Input
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="bg-slate-700 border-2 border-red-500 text-white h-12 px-4 pr-20 rounded-lg focus:border-red-400 transition-colors"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                      <button
                        onClick={() => handleClearField("country")}
                        className="w-6 h-6 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white text-sm transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Pin Code</label>
                  <div className="relative">
                    <Input
                      value={formData.pinCode}
                      onChange={(e) =>
                        setFormData({ ...formData, pinCode: e.target.value })
                      }
                      className="bg-slate-700 border-2 border-red-500 text-white h-12 px-4 rounded-lg focus:border-red-400 transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* maybe a “Next” or “Submit” button */}
          </div>
        </div>
      </RegistrationPageLayout>
    </PageLayout>
  )
}
