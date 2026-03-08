import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from "react-leaflet"
import { useEffect } from "react"
import type { Vehicle } from "../../../models/vehicle.model"
import type { Shipment } from "../../../models/shipment.model"
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
  shipments: Shipment[]
  selectedTruck: number | null
}

const MapAutoZoom = ({
  vehicles,
  route
}: {
  vehicles: Vehicle[]
  route: [number, number][]
}) => {
  const map = useMap()

  useEffect(() => {

    if (route.length > 0) {
      map.fitBounds(route, { padding: [50, 50] })
      return
    }

    if (!vehicles || vehicles.length === 0) return

    if (vehicles.length === 1) {
      map.setView([vehicles[0].lat, vehicles[0].lng], 14)
      return
    }

    const bounds = vehicles.map(v => [v.lat, v.lng] as [number, number])

    map.fitBounds(bounds, { padding: [50, 50] })

  }, [vehicles, route, map])

  return null
}

export const FleetMap = ({ vehicles, shipments, selectedTruck }: Props) => {

  const validShipments = shipments
    .filter(s => s.lat !== undefined && s.lng !== undefined)
    .sort((a, b) => a.stopOrder - b.stopOrder)

  const createStopIcon = (number: number) =>
  L.divIcon({
    html: `<div style="
      background:#2563eb;
      color:white;
      border-radius:50%;
      width:26px;
      height:26px;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:12px;
      font-weight:bold;
      border:2px solid white;
      box-shadow:0 0 4px rgba(0,0,0,0.4);
    ">${number}</div>`,
    className: "",
    iconSize: [26, 26],
    iconAnchor: [13, 13],
  })

  const routePositions =
    selectedTruck
      ? validShipments.map(s => [s.lat, s.lng] as [number, number])
      : []
console.log("shipments raw", shipments)
console.log("lat/lng", shipments.map(s => [s.lat, s.lng]))

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

          <MapAutoZoom vehicles={vehicles} route={routePositions} />

          {/* Camiones */}

          {vehicles.map(vehicle => (

            <Marker
              key={vehicle.id}
              position={[vehicle.lat, vehicle.lng]}
              icon={truckIcons[vehicle.truckNumber - 1] || truckIcons[0]}
            >

              <Popup>
                <strong>{vehicle.driver}</strong>
                <br />
                Truck {vehicle.truckNumber}
              </Popup>

            </Marker>

          ))}

          {/* Ruta */}

          {selectedTruck && routePositions.length > 1 && (

            <Polyline
              positions={routePositions}
              color="blue"
              weight={4}
            />

          )}

          {/* Paradas */}

          {selectedTruck && validShipments.map(stop => (

            <Marker
              key={stop.id}
              position={[stop.lat, stop.lng]}
              icon={createStopIcon(stop.stopOrder)}
            >

              <Popup>
                <strong>{stop.recipient}</strong>
                <br />
                Stop {stop.stopOrder}
              </Popup>

            </Marker>

          ))}

        </MapContainer>

      </div>

    </div>
  )
}