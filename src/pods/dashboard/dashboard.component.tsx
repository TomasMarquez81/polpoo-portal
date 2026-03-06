import type { Shipment } from "../../models/shipment.model"
import { Header } from "./components/header.component"
import { KPIs } from "./components/kpis.component"
import { ShipmentsTable } from "./components/shipments-table.component"
import { FleetMap } from "./components/fleet-map.component"
import { Alerts } from "./components/alerts.component"

interface Props {
  shipments: Shipment[]
}

export const DashboardComponent = ({ shipments }: Props) => {

  return (
    <div className="flex flex-col gap-6">

      <Header />

      <KPIs />

      <div className="flex flex-col lg:flex-row gap-6">

        <div className="flex-1">
          <ShipmentsTable shipments={shipments} selectedTruck={null} onSelectTruck={function (truck: number): void {
                      throw new Error("Function not implemented.")
                  } } clearFilter={function (): void {
                      throw new Error("Function not implemented.")
                  } } />
        </div>

        <div className="w-full lg:w-80 flex flex-col gap-6">
          <FleetMap />
          <Alerts />
        </div>

      </div>

    </div>
  )
}