"use client"

import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface Location {
  lat: number
  lng: number
  address: string
}

interface InteractiveMapProps {
  initialLocationName?: string
  onLocationSelect?: (location: Location) => void
  className?: string
}

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export function InteractiveMap({
  initialLocationName = "Mumbai",
  onLocationSelect,
  className = "",
}: InteractiveMapProps) {
  const [searchQuery, setSearchQuery] = useState(initialLocationName)
  const [location, setLocation] = useState<Location>({
    lat: 19.076, // Mumbai fallback
    lng: 72.8777,
    address: initialLocationName + ", India",
  })

  // Reverse geocoding: when user clicks map
  function MapClickHandler() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng
        // call reverse geocoding to get address
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
        )
          .then((resp) => resp.json())
          .then((data) => {
            const addr = data.display_name ?? `${lat.toFixed(4)}, ${lng.toFixed(4)}`
            const newLoc = { lat, lng, address: addr }
            setLocation(newLoc)
            if (onLocationSelect) onLocationSelect(newLoc)
          })
          .catch((err) => {
            console.error("Reverse geocoding failed", err)
            const newLoc = { lat, lng, address: `${lat.toFixed(4)}, ${lng.toFixed(4)}` }
            setLocation(newLoc)
            if (onLocationSelect) onLocationSelect(newLoc)
          })
      },
    })
    return null
  }

  // Do forward geocoding when search is triggered
  const handleSearch = () => {
    if (!searchQuery) return
    // Use Nominatim search API
    fetch(
      `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(
        searchQuery
      )}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data && data.length > 0) {
          const first = data[0]
          const lat = parseFloat(first.lat)
          const lng = parseFloat(first.lon)
          const addr = first.display_name
          const newLoc = { lat, lng, address: addr }
          setLocation(newLoc)
          if (onLocationSelect) onLocationSelect(newLoc)
          // Maybe pan the map to new location
          // We need a map instance for that. We'll use a child component.
          // Implemented below.
        }
      })
      .catch((err) => {
        console.error("Forward geocoding failed", err)
      })
  }

  function PanToLocation() {
    const map = useMap()
    useEffect(() => {
      map.setView([location.lat, location.lng], 13) // zoom level
    }, [location, map])
    return null
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              handleSearch()
            }
          }}
          placeholder="Search location..."
          className="w-full px-4 py-2 border rounded-md"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </div>

      <MapContainer
        center={[location.lat, location.lng]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[location.lat, location.lng]} icon={defaultIcon} />
        <PanToLocation />
        <MapClickHandler />
      </MapContainer>
    </div>
  )
}
