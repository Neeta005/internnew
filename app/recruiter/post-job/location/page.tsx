"use client"

import { useState } from "react"
import { JobPostingLayout } from "@/components/layout/job-posting-layout"
import { RecruiterHeader } from "@/components/layout/recruiter-header"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { InteractiveMap } from "@/components/ui/interactive-map"
import { X, Search } from "lucide-react"

interface Location {
  lat: number
  lng: number
  address: string
}

export default function LocationPage() {
  const [city, setCity] = useState("Mumbai")
  const [state, setState] = useState("Maharashtra")
  const [country, setCountry] = useState("India")
  const [transportProvided, setTransportProvided] = useState(true)

  const handleLocationSelect = (location: Location) => {
    // Extract city, state, country from address if possible
    const addressParts = location.address.split(", ")
    if (addressParts.length >= 3) {
      setCity(addressParts[0] || "Mumbai")
      setState(addressParts[1] || "Maharashtra")
      setCountry(addressParts[addressParts.length - 1] || "India")
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <RecruiterHeader userProfile={{ name: "Arun", avatar: "" }} />

      <JobPostingLayout title="Interview Location" nextHref="/recruiter/post-job/questions" currentStep={3}>
        <div className="space-y-8">
          {/* Office Location */}
          <div className="space-y-3">
            <Label className="text-white text-base">Office Location</Label>

            <div className="border border-slate-700 rounded-lg overflow-hidden">
              <InteractiveMap initialLocationName="Mumbai" onLocationSelect={handleLocationSelect} className="" />
            </div>
          </div>

          {/* Location Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* City */}
            <div className="space-y-3">
              <Label htmlFor="city" className="text-white text-base">
                City
              </Label>
              <div className="relative">
                <Input
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="bg-slate-800 border-red-500 text-white pr-16"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <X className="h-4 w-4 text-gray-400 cursor-pointer" />
                  <Search className="h-4 w-4 text-gray-400 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* State */}
            <div className="space-y-3">
              <Label htmlFor="state" className="text-white text-base">
                State
              </Label>
              <div className="relative">
                <Input
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="bg-slate-800 border-red-500 text-white pr-16"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <X className="h-4 w-4 text-gray-400 cursor-pointer" />
                  <Search className="h-4 w-4 text-gray-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Country */}
          <div className="space-y-3">
            <Label htmlFor="country" className="text-white text-base">
              Country
            </Label>
            <div className="relative">
              <Input
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="bg-slate-800 border-red-500 text-white pr-16 max-w-md"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <X className="h-4 w-4 text-gray-400 cursor-pointer" />
                <Search className="h-4 w-4 text-gray-400 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Transport Option */}
          <div className="flex items-center justify-between">
            <Label className="text-white text-base">Transported will be provided (within 5 km)</Label>
            <Switch
              checked={transportProvided}
              onCheckedChange={setTransportProvided}
              className="data-[state=checked]:bg-red-500"
            />
          </div>
        </div>
      </JobPostingLayout>
    </div>
  )
}
