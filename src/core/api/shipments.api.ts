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
      id: "ORD-1001",
      recipient: "Hotel Málaga Center",
      driver: "James Wilson",
      status: "in_transit",
      eta: "14:20",
      truckNumber: 1,
      stopOrder: 1
    },

    {
      id: "ORD-1002",
      recipient: "Hospital Costa del Sol",
      driver: "James Wilson",
      status: "pending",
      eta: "15:10",
      truckNumber: 1,
      stopOrder: 2
    },

    {
      id: "ORD-1003",
      recipient: "Supermercado Día",
      driver: "Maria Garcia",
      status: "in_transit",
      eta: "13:40",
      truckNumber: 2,
      stopOrder: 1
    },

    {
      id: "ORD-1004",
      recipient: "Restaurante El Puerto",
      driver: "Maria Garcia",
      status: "pending",
      eta: "16:00",
      truckNumber: 2,
      stopOrder: 2
    },

    {
      id: "ORD-1005",
      recipient: "Hotel NH Málaga",
      driver: "Robert Chen",
      status: "delivered",
      eta: "12:30",
      truckNumber: 3,
      stopOrder: 1
    },

    {
      id: "ORD-1006",
      recipient: "Clínica Santa Elena",
      driver: "David Smith",
      status: "in_transit",
      eta: "14:50",
      truckNumber: 4,
      stopOrder: 1
    },

    {
      id: "ORD-1007",
      recipient: "Mercado Central",
      driver: "Laura Perez",
      status: "pending",
      eta: "15:30",
      truckNumber: 5,
      stopOrder: 1
    },

    {
      id: "ORD-1008",
      recipient: "Restaurante La Marina",
      driver: "Antonio Ruiz",
      status: "delayed",
      eta: "17:10",
      truckNumber: 6,
      stopOrder: 1
    },

    {
      id: "ORD-1009",
      recipient: "Hotel Vincci",
      driver: "Carlos Medina",
      status: "in_transit",
      eta: "14:00",
      truckNumber: 7,
      stopOrder: 1
    },

    {
      id: "ORD-1010",
      recipient: "Hospital Regional Málaga",
      driver: "Ana Torres",
      status: "pending",
      eta: "16:20",
      truckNumber: 8,
      stopOrder: 1
    }

  ]
}