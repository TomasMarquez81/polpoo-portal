/*import { apiClient } from "./api-client"
/*import type { Shipment } from "../../models/shipment.model"

export const getShipments = async (): Promise<Shipment[]> => {

  const data = await apiClient("/shipments")

  return data
}*/
import type { Shipment } from "../../models/shipment.model"

export const getShipments = async (): Promise<Shipment[]> => {

  return [
    // TRUCK 1
    {
      id: "ORD-1001",
      recipient: "Hotel Málaga Center",
      driver: "James Wilson",
      status: "in_transit",
      eta: "14:20",
      truckNumber: 1,
      stopOrder: 1,
      lat: 36.721,
      lng: -4.420
    },
    {
      id: "ORD-1002",
      recipient: "Hospital Costa del Sol",
      driver: "James Wilson",
      status: "pending",
      eta: "15:10",
      truckNumber: 1,
      stopOrder: 2,
      lat: 36.725,
      lng: -4.410
    },
    {
      id: "ORD-1003",
      recipient: "Mercado Central",
      driver: "James Wilson",
      status: "pending",
      eta: "16:00",
      truckNumber: 1,
      stopOrder: 3,
      lat: 36.728,
      lng: -4.405
    },

    // TRUCK 2
    {
      id: "ORD-1004",
      recipient: "Supermercado Día",
      driver: "Maria Garcia",
      status: "in_transit",
      eta: "13:40",
      truckNumber: 2,
      stopOrder: 1,
      lat: 36.719,
      lng: -4.415
    },
    {
      id: "ORD-1005",
      recipient: "Restaurante El Puerto",
      driver: "Maria Garcia",
      status: "pending",
      eta: "15:30",
      truckNumber: 2,
      stopOrder: 2,
      lat: 36.716,
      lng: -4.408
    },
    {
      id: "ORD-1006",
      recipient: "Hotel Vincci",
      driver: "Maria Garcia",
      status: "pending",
      eta: "16:10",
      truckNumber: 2,
      stopOrder: 3,
      lat: 36.713,
      lng: -4.402
    },

    // TRUCK 3
    {
      id: "ORD-1007",
      recipient: "Hotel NH Málaga",
      driver: "Robert Chen",
      status: "delivered",
      eta: "12:30",
      truckNumber: 3,
      stopOrder: 1,
      lat: 36.724,
      lng: -4.418
    },
    {
      id: "ORD-1008",
      recipient: "Clínica Santa Elena",
      driver: "Robert Chen",
      status: "in_transit",
      eta: "14:50",
      truckNumber: 3,
      stopOrder: 2,
      lat: 36.727,
      lng: -4.412
    },
    {
      id: "ORD-1009",
      recipient: "Centro Comercial Larios",
      driver: "Robert Chen",
      status: "pending",
      eta: "16:40",
      truckNumber: 3,
      stopOrder: 3,
      lat: 36.731,
      lng: -4.409
    },

    // TRUCK 4
    {
      id: "ORD-1010",
      recipient: "Hospital Regional Málaga",
      driver: "David Smith",
      status: "in_transit",
      eta: "14:10",
      truckNumber: 4,
      stopOrder: 1,
      lat: 36.718,
      lng: -4.430
    },
    {
      id: "ORD-1011",
      recipient: "Colegio San José",
      driver: "David Smith",
      status: "pending",
      eta: "15:20",
      truckNumber: 4,
      stopOrder: 2,
      lat: 36.715,
      lng: -4.432
    },

    // TRUCK 5
    {
      id: "ORD-1012",
      recipient: "Mercadona Teatinos",
      driver: "Laura Perez",
      status: "in_transit",
      eta: "13:50",
      truckNumber: 5,
      stopOrder: 1,
      lat: 36.722,
      lng: -4.460
    },
    {
      id: "ORD-1013",
      recipient: "Clínica El Ángel",
      driver: "Laura Perez",
      status: "pending",
      eta: "15:45",
      truckNumber: 5,
      stopOrder: 2,
      lat: 36.725,
      lng: -4.455
    },

    // TRUCK 6
    {
      id: "ORD-1014",
      recipient: "Puerto de Málaga",
      driver: "Antonio Ruiz",
      status: "delivered",
      eta: "12:10",
      truckNumber: 6,
      stopOrder: 1,
      lat: 36.713,
      lng: -4.417
    },
    {
      id: "ORD-1015",
      recipient: "Museo Picasso",
      driver: "Antonio Ruiz",
      status: "pending",
      eta: "15:50",
      truckNumber: 6,
      stopOrder: 2,
      lat: 36.721,
      lng: -4.415
    },

    // TRUCK 7
    {
      id: "ORD-1016",
      recipient: "Hotel Barceló",
      driver: "Carlos Medina",
      status: "in_transit",
      eta: "14:30",
      truckNumber: 7,
      stopOrder: 1,
      lat: 36.729,
      lng: -4.403
    },
    {
      id: "ORD-1017",
      recipient: "Restaurante La Marina",
      driver: "Carlos Medina",
      status: "pending",
      eta: "16:15",
      truckNumber: 7,
      stopOrder: 2,
      lat: 36.733,
      lng: -4.398
    },

    // TRUCK 8
    {
      id: "ORD-1018",
      recipient: "Centro Logístico Málaga",
      driver: "Ana Torres",
      status: "in_transit",
      eta: "14:40",
      truckNumber: 8,
      stopOrder: 1,
      lat: 36.707,
      lng: -4.460
    },
    {
      id: "ORD-1019",
      recipient: "Parque Tecnológico PTA",
      driver: "Ana Torres",
      status: "pending",
      eta: "16:20",
      truckNumber: 8,
      stopOrder: 2,
      lat: 36.710,
      lng: -4.470
    }

  ]
}