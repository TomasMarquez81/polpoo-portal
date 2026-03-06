/*import { apiClient } from "./api-client"
/*import type { Shipment } from "../../models/shipment.model"

export const getShipments = async (): Promise<Shipment[]> => {

  const data = await apiClient("/shipments")

  return data
}*/
import type { Shipment } from "../../models/shipment.model"

export const getShipments = async (): Promise<Shipment[]> => {

  return [
    {
      id: "#ORD-9921",
      recipient: "Global Tech Inc.",
      driver: "James Wilson",
      status: "in_transit",
      eta: "14:20",
      truckNumber: 1
    },
    {
      id: "#ORD-9922",
      recipient: "Sarah Jenkins",
      driver: "Maria Garcia",
      status: "pending",
      eta: "15:45",
      truckNumber: 2
    },
    {
      id: "#ORD-9923",
      recipient: "Metro Hospital",
      driver: "Robert Chen",
      status: "delivered",
      eta: "11:30",
      truckNumber: 1
    }
  ]
}