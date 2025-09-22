"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PageLayout } from "@/components/layout/page-layout"
import { RegistrationPageLayout } from "@/components/layout/registration-page-layout"
import { recruiterNavigationItems } from "@/lib/data"

export default function RecruiterRegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    companyName: "Software company",
    companySize: "Software company",
    aboutUs: "",
  })

  return (
    <PageLayout navigationItems={recruiterNavigationItems}>
      <RegistrationPageLayout
        title="Register"
        nextHref="/recruiter/register/company-details"
        currentStep={0}
      >
        {/* ✅ Subtitle Below Title */}
        <p className="text-md text-gray-400 mb-6">Company Details</p>

        <div className="space-y-6">
          {/* Company Name */}
          <div>
            <label className="block text-white text-sm font-medium mb-3">Company Name</label>
            <div className="relative">
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full border-2 border-red-500 text-white rounded-lg px-4 py-3 pr-12 text-base focus:outline-none focus:border-red-400"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Company Size */}
          <div>
            <label className="block text-white text-sm font-medium mb-3">Company Size</label>
            <div className="relative">
              <select
                value={formData.companySize}
                onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                className="w-full border-2 border-red-500 text-white rounded-lg px-4 py-3 pr-12 text-base appearance-none focus:outline-none focus:border-red-400 cursor-pointer"
              >
                <option value="Software company">Software company</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="500+">500+ employees</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div>
            <label className="block text-white text-sm font-medium mb-3">About Us</label>
            <div className="bg-slate-800 border-2 border-red-500 rounded-lg overflow-hidden">
              {/* Editor Toolbar */}
              <div className="bg-slate-800 border-b border-slate-500 p-2 flex items-center gap-1 flex-wrap">
                {/* (You can trim or customize toolbar buttons here as needed) */}
                <button className="p-1 text-gray-300 hover:text-white hover:bg-slate-600 rounded text-sm">↶</button>
                <button className="p-1 text-gray-300 hover:text-white hover:bg-slate-600 rounded text-sm">↷</button>
                <div className="w-px h-5 bg-slate-500 mx-1" />
                <select className="bg-slate-700 text-gray-300 text-sm border-none p-1 rounded cursor-pointer">
                  <option>Normal text</option>
                  <option>Heading 1</option>
                  <option>Heading 2</option>
                </select>
                <div className="w-px h-5 bg-slate-500 mx-1" />
                <button className="p-1 text-gray-300 hover:text-white hover:bg-slate-600 rounded font-bold text-sm px-2">B</button>
                <button className="p-1 text-gray-300 hover:text-white hover:bg-slate-600 rounded italic text-sm px-2">I</button>
                <button className="p-1 text-gray-300 hover:text-white hover:bg-slate-600 rounded underline text-sm px-2">U</button>
              </div>

              {/* Editor Content */}
              <div
                contentEditable
                className="min-h-[200px] p-4 text-white focus:outline-none"
                onInput={(e) => setFormData({ ...formData, aboutUs: e.currentTarget.textContent || "" })}
                suppressContentEditableWarning
              >
                {!formData.aboutUs && (
                  <div className="text-gray-400 pointer-events-none">
                    Tell us about your company...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </RegistrationPageLayout>
    </PageLayout>
  )
}
