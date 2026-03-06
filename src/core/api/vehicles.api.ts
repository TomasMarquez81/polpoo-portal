import type { Vehicle } from "../../models/vehicle.model"

export const getVehicles = async (): Promise<Vehicle[]> => {

  return [
    {
      id: "truck-1",
      driver: "James Wilson",
      lat: 36.7213,
      lng: -4.4214
    },
    {
      id: "truck-2",
      driver: "Maria Garcia",
      lat: 36.719,
      lng: -4.41
    }
  ]

}