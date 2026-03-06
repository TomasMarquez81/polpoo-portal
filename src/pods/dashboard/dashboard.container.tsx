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

  return (
    <DashboardComponent
      vehicles={filteredVehicles ?? []}
      shipments={filteredShipments ?? []}
      selectedTruck={selectedTruck}
      onSelectTruck={setSelectedTruck}
      clearFilter={() => setSelectedTruck(null)}
    />
  )
}