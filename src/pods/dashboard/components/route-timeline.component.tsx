import type { Shipment } from "../../../models/shipment.model"

interface Props {
  shipments: Shipment[]
  selectedTruck: number | null
}

export const RouteTimeline = ({ shipments, selectedTruck }: Props) => {

  if (!selectedTruck || shipments.length === 0) return null

  const stops = [...shipments].sort(
    (a, b) => a.stopOrder - b.stopOrder
  )

  const getColor = (status: string) => {

    if (status === "delivered") return "bg-green-500"
    if (status === "in_transit") return "bg-orange-500"

    return "bg-gray-400"

  }

  const getIcon = (status: string) => {

    if (status === "delivered") return "✔"
    if (status === "in_transit") return "🚚"

    return ""

  }

  return (

    <div className="rounded-xl border shadow-sm p-6">

      <h3 className="font-bold mb-6">
        Route progress — Truck {selectedTruck}
      </h3>
      <div className="relative">
          
        <div className="flex items-center justify-between">

          {stops.map(stop => (
            
            <div
              key={stop.id}
              className="flex flex-col items-center flex-1"
            >

              <div
                className={`relative z-10 w-8 h-8 rounded-full text-white flex items-center justify-center text-sm ${getColor(stop.status)}`}
              >
                {getIcon(stop.status) || stop.stopOrder}
              </div>

              <div className="text-xs mt-2 text-center max-w-[90px]">
                {stop.recipient}
              </div>

            </div>

          ))}

        </div>
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 z-0" />
      </div>

    </div>

  )
}