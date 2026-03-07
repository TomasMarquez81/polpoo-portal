import type { Vehicle } from "../../models/vehicle.model"

export const getVehicles = async (): Promise<Vehicle[]> => {

   return [
    {
      id: "truck-1",
      driver: "James Wilson",
      lat: 36.7213,
      lng: -4.4214,
      truckNumber: 1
    },
    {
      id: "truck-2",
      driver: "Maria Garcia",
      lat: 36.719,
      lng: -4.41,
      truckNumber: 2
    },
    {
      id: "truck-3",
      driver: "Robert Chen",
      lat: 36.724,
      lng: -4.418,
      truckNumber: 3
    },
    {
      id: "truck-4",
      driver: "David Smith",
      lat: 36.715,
      lng: -4.425,
      truckNumber: 4
    },
    {
      id: "truck-5",
      driver: "Laura Perez",
      lat: 36.728,
      lng: -4.412,
      truckNumber: 5
    },
    {
      id: "truck-6",
      driver: "Antonio Ruiz",
      lat: 36.718,
      lng: -4.43,
      truckNumber: 6
    },
    {
      id: "truck-7",
      driver: "Carlos Medina",
      lat: 36.713,
      lng: -4.418,
      truckNumber: 7
    },
    {
      id: "truck-8",
      driver: "Ana Torres",
      lat: 36.726,
      lng: -4.405,
      truckNumber: 8
    }
  ]

}