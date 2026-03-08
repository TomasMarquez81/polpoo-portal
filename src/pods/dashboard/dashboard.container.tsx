import { useState } from "react"
import { DashboardComponent } from "./dashboard.component"
import { useVehicles } from "./hooks/use-vehicles"
import { useShipments } from "./hooks/use-shipments"

export const DashboardContainer = () => {

  const { data: vehicles } = useVehicles()
  const { data: shipments } = useShipments()

  const [selectedTruck, setSelectedTruck] = useState<number | null>(null)

  const filteredVehicles = selectedTruck
    ? vehicles?.filter(v => v.truckNumber === selectedTruck)
    : vehicles

  const filteredShipments = selectedTruck
    ? shipments?.filter(s => s.truckNumber === selectedTruck)
    : shipments

  // shipments que forman la ruta (solo pendientes o en reparto)
  const routeShipments = selectedTruck
    ? shipments
        ?.filter(
          s =>
            s.truckNumber === selectedTruck &&
            s.status !== "delivered"
        )
        .sort((a, b) => a.stopOrder - b.stopOrder)
    : []

  return (
    <DashboardComponent
      vehicles={filteredVehicles ?? []}
      shipments={filteredShipments ?? []}
      routeShipments={routeShipments ?? []}
      selectedTruck={selectedTruck}
      onSelectTruck={setSelectedTruck}
      clearFilter={() => setSelectedTruck(null)}
    />
  )
}