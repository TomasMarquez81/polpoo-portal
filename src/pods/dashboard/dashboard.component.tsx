import type { Shipment } from "../../models/shipment.model"
import type { Vehicle } from "../../models/vehicle.model"

import { Header } from "./components/header.component"
import { KPIs } from "./components/kpis.component"
import { ShipmentsTable } from "./components/shipments-table.component"
import { FleetMap } from "./components/fleet-map.component"

interface Props {
  shipments: Shipment[]
  vehicles: Vehicle[]
  selectedTruck: number | null
  onSelectTruck: (truck: number) => void
  clearFilter: () => void
}

export const DashboardComponent = ({
  shipments,
  vehicles,
  selectedTruck,
  onSelectTruck,
  clearFilter,
}: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <Header />

      <KPIs />

      <ShipmentsTable
        shipments={shipments}
        selectedTruck={selectedTruck}
        onSelectTruck={onSelectTruck}
        clearFilter={clearFilter}
      />

      <FleetMap vehicles={vehicles} />
    </div>
  )
}