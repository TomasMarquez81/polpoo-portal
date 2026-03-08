import type { Shipment } from "../../models/shipment.model"
import type { Vehicle } from "../../models/vehicle.model"

import { Header } from "./components/header.component"
import { KPIs } from "./components/kpis.component"
import { ShipmentsTable } from "./components/shipments-table.component"
import { FleetMap } from "./components/fleet-map.component"
import { RouteTimeline } from "./components/route-timeline.component"

interface Props {
  vehicles: Vehicle[]
  shipments: Shipment[]
  routeShipments: Shipment[]
  selectedTruck: number | null
  onSelectTruck: (truck: number) => void
  clearFilter: () => void
}

export const DashboardComponent = ({
  vehicles,
  shipments,
  routeShipments,
  selectedTruck,
  onSelectTruck,
  clearFilter
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

      <RouteTimeline
        shipments={shipments}
        selectedTruck={selectedTruck}
      />
      
      <FleetMap
        vehicles={vehicles}
        shipments={routeShipments}
        selectedTruck={selectedTruck}
      />

    </div>
  )
}