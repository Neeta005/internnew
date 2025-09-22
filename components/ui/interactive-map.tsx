"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"

interface Location {
  lat: number
  lng: number
  address: string
}

interface InteractiveMapProps {
  onLocationSelect?: (location: Location) => void
  initialLocationName?: string
  className?: string
}

export function InteractiveMap({
  onLocationSelect,
  initialLocationName = "Mumbai",
  className = "",
}: InteractiveMapProps) {
  const [searchQuery, setSearchQuery] = useState(initialLocationName)
  const [selectedLocation, setSelectedLocation] = useState<Location>({
    lat: 19.076, // Mumbai coordinates
    lng: 72.8777,
    address: "Mumbai, Maharashtra, India",
  })
  const mapRef = useRef<HTMLDivElement>(null)
  const leafletMapRef = useRef<any>(null)
  const markerRef = useRef<any>(null)

  useEffect(() => {
    const loadLeaflet = async () => {
      if (typeof window === "undefined") return

      // Load Leaflet CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        document.head.appendChild(link)
      }

      // Load Leaflet JS
      if (!window.L) {
        const script = document.createElement("script")
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        script.onload = initializeMap
        document.head.appendChild(script)
      } else {
        initializeMap()
      }
    }

    const initializeMap = () => {
      if (!mapRef.current || leafletMapRef.current) return

      // Initialize map
      leafletMapRef.current = window.L.map(mapRef.current).setView([selectedLocation.lat, selectedLocation.lng], 13)

      // Add tile layer (OpenStreetMap - free, no API key required)
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(leafletMapRef.current)

      // Add marker
      markerRef.current = window.L.marker([selectedLocation.lat, selectedLocation.lng])
        .addTo(leafletMapRef.current)
        .bindPopup(selectedLocation.address)

      // Handle map clicks
      leafletMapRef.current.on("click", async (e: any) => {
        const { lat, lng } = e.latlng

        // Move marker to clicked location
        markerRef.current.setLatLng([lat, lng])

        // Reverse geocode to get address (using a free service)
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
          const data = await response.json()
          const address = data.display_name || `${lat.toFixed(4)}, ${lng.toFixed(4)}`

          const newLocation = { lat, lng, address }
          setSelectedLocation(newLocation)
          setSearchQuery(address)
          onLocationSelect?.(newLocation)

          markerRef.current.bindPopup(address).openPopup()
        } catch (error) {
          console.error("Geocoding error:", error)
          const address = `${lat.toFixed(4)}, ${lng.toFixed(4)}`
          const newLocation = { lat, lng, address }
          setSelectedLocation(newLocation)
          setSearchQuery(address)
          onLocationSelect?.(newLocation)
        }
      })
    }

    loadLeaflet()

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove()
        leafletMapRef.current = null
      }
    }
  }, [])

  const handleSearch = async () => {
    if (!searchQuery.trim()) return

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1`,
      )
      const data = await response.json()

      if (data && data.length > 0) {
        const result = data[0]
        const location = {
          lat: Number.parseFloat(result.lat),
          lng: Number.parseFloat(result.lon),
          address: result.display_name,
        }

        setSelectedLocation(location)
        onLocationSelect?.(location)

        // Update map view and marker
        if (leafletMapRef.current && markerRef.current) {
          leafletMapRef.current.setView([location.lat, location.lng], 13)
          markerRef.current.setLatLng([location.lat, location.lng])
          markerRef.current.bindPopup(location.address).openPopup()
        }
      }
    } catch (error) {
      console.error("Search error:", error)
    }
  }

  const handleClearSearch = () => {
    setSearchQuery("")
  }

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

      <div
        ref={mapRef}
        className="w-full h-64 rounded-lg overflow-hidden border-2 border-gray-300 bg-gray-100"
        style={{ minHeight: "300px" }}
      />
    </div>
  )
}
