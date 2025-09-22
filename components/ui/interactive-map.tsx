"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Location {
  lat: number
  lng: number
  address: string
}

interface InteractiveMapProps {
  onLocationSelect?: (location: Location) => void
  initialLocation?: string
  className?: string
}

export function InteractiveMap({ onLocationSelect, initialLocation = "Mumbai", className = "" }: InteractiveMapProps) {
  const [searchQuery, setSearchQuery] = useState(initialLocation)
  const [selectedLocation, setSelectedLocation] = useState<Location>({
    lat: 19.076, // Mumbai coordinates
    lng: 72.8777,
    address: "Mumbai, Maharashtra, India",
  })
  const mapRef = useRef<HTMLDivElement>(null)

  // Simulate map functionality with a static map-like interface
  const handleSearch = () => {
    // In a real implementation, this would use Google Maps API or similar
    // For now, we'll simulate different locations
    const locations: Record<string, Location> = {
      mumbai: { lat: 19.076, lng: 72.8777, address: "Mumbai, Maharashtra, India" },
      bangalore: { lat: 12.9716, lng: 77.5946, address: "Bangalore, Karnataka, India" },
      delhi: { lat: 28.7041, lng: 77.1025, address: "Delhi, India" },
      pune: { lat: 18.5204, lng: 73.8567, address: "Pune, Maharashtra, India" },
    }

    const key = searchQuery.toLowerCase()
    const location = locations[key] || locations.mumbai
    setSelectedLocation(location)
    onLocationSelect?.(location)
  }

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  useEffect(() => {
    handleSearch()
  }, [])

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="relative">
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search location..."
          className="bg-slate-800 border-gray-600 text-white pr-20"
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="w-5 h-5 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center text-white text-xs"
            >
              ×
            </button>
          )}
          <button onClick={handleSearch} className="w-6 h-6 text-gray-400 hover:text-white">
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

      {/* Map Container */}
      <div
        ref={mapRef}
        className="relative w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden border-2 border-gray-300"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e2e8f0' fillOpacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        {/* Simulated map roads and areas */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 400 300">
            {/* Roads */}
            <path d="M0 150 L400 150" stroke="#94a3b8" strokeWidth="3" opacity="0.6" />
            <path d="M200 0 L200 300" stroke="#94a3b8" strokeWidth="3" opacity="0.6" />
            <path d="M50 100 L350 200" stroke="#94a3b8" strokeWidth="2" opacity="0.4" />

            {/* Areas */}
            <rect x="80" y="80" width="60" height="40" fill="#10b981" opacity="0.3" rx="4" />
            <rect x="260" y="180" width="80" height="50" fill="#f59e0b" opacity="0.3" rx="4" />
            <rect x="150" y="200" width="50" height="30" fill="#ef4444" opacity="0.3" rx="4" />

            {/* Location markers */}
            <circle cx="120" cy="100" r="4" fill="#ef4444" />
            <circle cx="300" cy="200" r="4" fill="#3b82f6" />
            <text x="125" y="95" fontSize="10" fill="#1f2937" fontWeight="bold">
              Malad Digital
            </text>
            <text x="180" y="140" fontSize="12" fill="#dc2626" fontWeight="bold">
              Mumbai
            </text>
          </svg>
        </div>

        {/* Location Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <svg className="w-8 h-8 text-red-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <Button size="sm" className="w-8 h-8 p-0 bg-white text-gray-700 hover:bg-gray-100 shadow-md">
            +
          </Button>
          <Button size="sm" className="w-8 h-8 p-0 bg-white text-gray-700 hover:bg-gray-100 shadow-md">
            −
          </Button>
        </div>

        {/* Map Type Toggle */}
        <div className="absolute top-4 right-16">
          <Button size="sm" className="bg-white text-gray-700 hover:bg-gray-100 shadow-md text-xs px-2 py-1">
            🗺️
          </Button>
        </div>
      </div>
    </div>
  )
}
