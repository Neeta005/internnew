"use client"

import { useState } from "react"

export function PhoneInput() {
  const [countryCode, setCountryCode] = useState("+91")
  const [phoneNumber, setPhoneNumber] = useState("1233456789")

  return (
    <div className="flex gap-2">
      {/* Country Code Dropdown */}
      <div className="relative">
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="appearance-none bg-slate-800 border border-red-500 rounded-lg px-4 py-3 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-red-500 min-w-[100px]"
        >
          <option value="+91">🇮🇳 +91</option>
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+86">🇨🇳 +86</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Phone Number Input */}
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
        className="flex-1 bg-slate-800 border border-red-500 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
  )
}
