import type { Shipment } from "../../../models/shipment.model"
import { TruckFilter } from "./truck-filter.component"

interface Props {
  shipments: Shipment[]
  selectedTruck: number | null
  onSelectTruck: (truck: number) => void
  clearFilter: () => void
}

export const ShipmentsTable = ({ shipments, selectedTruck, onSelectTruck, clearFilter }: Props) => {

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border shadow-sm">

      <div className="flex justify-between items-center mb-3">

        <h3 className="font-bold">
            Active Shipments
        </h3>

        <TruckFilter
            selectedTruck={selectedTruck}
            onSelectTruck={onSelectTruck}
            clearFilter={clearFilter}
        />

      </div>

      <table className="w-full text-left">

        <thead className="text-xs text-slate-500 uppercase">

          <tr>
            <th className="p-4">Order</th>
            <th className="p-4">Recipient</th>
            <th className="p-4">Driver</th>
            <th className="p-4">Truck</th>
            <th className="p-4">Status</th>
            <th className="p-4">ETA</th>
          </tr>

        </thead>

        <tbody>

          {shipments.map((shipment) => (

            <tr key={shipment.id} className="border-t">

              <td className="p-4 font-mono text-blue-600">
                {shipment.id}
              </td>

              <td className="p-4">
                {shipment.recipient}
              </td>

              <td className="p-4">
                {shipment.driver}
              </td>

              <td>
  🚚 {shipment.truckNumber}
</td>

              <td className="p-4">
                {shipment.status}
              </td>

              <td className="p-4">
                {shipment.eta}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}