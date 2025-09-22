"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PageLayout } from "@/components/layout/page-layout"
import { RegistrationPageLayout } from "@/components/layout/registration-page-layout"
import { Input } from "@/components/ui/input"
import { recruiterNavigationItems } from "@/lib/data"

export default function CompanyDetailsPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    gstDetails: "GST",
    companyWebsite: "www.softwarecompany.com",
    linkedinPage: "https://www.linkedin.com/in/software-company-12345xyz/",
    companyType: "startup",
  })

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
    <PageLayout navigationItems={recruiterNavigationItems}>
      <RegistrationPageLayout title="Register" nextHref="/recruiter/register/company-address" currentStep={0}>
        <div className="space-y-6">
          {/* GST Details */}
          <div>
            <label className="block text-white text-sm font-medium mb-3">GST Details</label>
            <Input
              value={formData.gstDetails}
              onChange={(e) => setFormData({ ...formData, gstDetails: e.target.value })}
              className="bg-slate-700 border-red-500 text-white placeholder:text-gray-400 focus:border-red-400 focus:ring-red-400/20"
            />
          </div>

          {/* Company Website */}
          <div>
            <label className="block text-white text-sm font-medium mb-3">Company Website</label>
            <Input
              value={formData.companyWebsite}
              onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
              className="bg-slate-700 border-red-500 text-white placeholder:text-gray-400 focus:border-red-400 focus:ring-red-400/20"
            />
          </div>

          {/* LinkedIn Page */}
          <div>
            <label className="block text-white text-sm font-medium mb-3">LinkedIn Page</label>
            <Input
              value={formData.linkedinPage}
              onChange={(e) => setFormData({ ...formData, linkedinPage: e.target.value })}
              className="bg-slate-700 border-red-500 text-white placeholder:text-gray-400 focus:border-red-400 focus:ring-red-400/20"
            />
          </div>

          {/* Company Type Selection */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {companyTypes.map((type) => (
              <div
                key={type.id}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                  formData.companyType === type.id
                    ? "border-red-500 bg-red-500/10 shadow-lg"
                    : "border-red-500/60 bg-slate-800/50 hover:bg-red-500/5 hover:border-red-500"
                }`}
                onClick={() => setFormData({ ...formData, companyType: type.id })}
              >
                <div className="flex items-start">
                  <div className="flex items-center justify-center mt-1 mr-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        formData.companyType === type.id 
                          ? "border-red-500 bg-red-500" 
                          : "border-gray-400 hover:border-red-400"
                      }`}
                    >
                      {formData.companyType === type.id && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{type.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RegistrationPageLayout>
    </PageLayout>
  )
}