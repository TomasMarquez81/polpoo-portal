import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { useEffect } from "react"
import type { Vehicle } from "../../../models/vehicle.model"
import L from "leaflet"

import truck1 from "../../../assets/icons/truck1.png"
import truck2 from "../../../assets/icons/truck2.png"
import truck3 from "../../../assets/icons/truck3.png"
import truck4 from "../../../assets/icons/truck4.png"
import truck5 from "../../../assets/icons/truck5.png"
import truck6 from "../../../assets/icons/truck6.png"
import truck7 from "../../../assets/icons/truck7.png"
import truck8 from "../../../assets/icons/truck8.png"
import truck9 from "../../../assets/icons/truck9.png"

const truckIcons = [
  new L.Icon({ iconUrl: truck1, iconSize: [32, 32], iconAnchor: [16, 32] }),
  new L.Icon({ iconUrl: truck2, iconSize: [32, 32], iconAnchor: [16, 32] }),
  new L.Icon({ iconUrl: truck3, iconSize: [32, 32], iconAnchor: [16, 32] }),
  new L.Icon({ iconUrl: truck4, iconSize: [32, 32], iconAnchor: [16, 32] }),
  new L.Icon({ iconUrl: truck5, iconSize: [32, 32], iconAnchor: [16, 32] }),
  new L.Icon({ iconUrl: truck6, iconSize: [32, 32], iconAnchor: [16, 32] }),
  new L.Icon({ iconUrl: truck7, iconSize: [32, 32], iconAnchor: [16, 32] }),
  new L.Icon({ iconUrl: truck8, iconSize: [32, 32], iconAnchor: [16, 32] }),
  new L.Icon({ iconUrl: truck9, iconSize: [32, 32], iconAnchor: [16, 32] }),
]

interface Props {
  vehicles: Vehicle[]
}

const MapAutoZoom = ({ vehicles }: { vehicles: Vehicle[] }) => {

  const map = useMap()

  useEffect(() => {

    if (!vehicles || vehicles.length === 0) return

    if (vehicles.length === 1) {
      map.setView([vehicles[0].lat, vehicles[0].lng], 14)
      return
    }

    const bounds = vehicles.map(v => [v.lat, v.lng] as [number, number])

    map.fitBounds(bounds, {
      padding: [50, 50]
    })

  }, [vehicles, map])

  return null
}

export const FleetMap = ({ vehicles }: Props) => {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">

      <h3 className="font-bold p-4 border-b">
        Live Fleet Map
      </h3>

      <div className="h-[500px]">

        <MapContainer
          center={[36.7213, -4.4214]}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
        >

          <TileLayer
            attribution="OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapAutoZoom vehicles={vehicles} />

          {vehicles.map(vehicle => (

            <Marker
              key={vehicle.id}
              position={[vehicle.lat, vehicle.lng]}
              icon={truckIcons[vehicle.truckNumber - 1] || truckIcons[0]}
            >

              <Popup>
                {vehicle.driver}
              </Popup>

    </Marker>

  ))}

</MapContainer>

      </div>

    </div>
  )
}