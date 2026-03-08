import type { Vehicle } from "../models/vehicle.model"

export const getMockVehicles = (): Vehicle[] => {

  return [

    {
      id: "TRUCK-1",
      truckNumber: 1,
      driver: "James Wilson",
      lat: 36.721,
      lng: -4.421
    },
    {
      id: "TRUCK-2",
      truckNumber: 2,
      driver: "Maria Garcia",
      lat: 36.724,
      lng: -4.418
    },
    {
      id: "TRUCK-3",
      truckNumber: 3,
      driver: "Robert Chen",
      lat: 36.728,
      lng: -4.410
    }

  ]

}