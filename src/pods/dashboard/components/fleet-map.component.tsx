import { MapContainer, TileLayer } from "react-leaflet"

export const FleetMap = () => {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-4">
      <h3 className="font-bold mb-4">
        Live Fleet Map
      </h3>

      <div className="h-96">
        <MapContainer
          center={[36.7213, -4.4214]}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  )
}