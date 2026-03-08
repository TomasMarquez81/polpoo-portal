import type { Route } from "../../models/route.model"

export const getRouteByVehicle = async (vehicleId: string): Promise<Route> => {

  return {
    vehicleId,
    stops: [
      {
        id: "stop1",
        client: "Hotel Málaga",
        lat: 36.724,
        lng: -4.418,
        stopOrder: 1,
        status: "pending"
      },
      {
        id: "stop2",
        client: "Restaurante Costa",
        lat: 36.719,
        lng: -4.425,
        stopOrder: 2,
        status: "pending"
      },
      {
        id: "stop3",
        client: "Hospital Central",
        lat: 36.715,
        lng: -4.41,
        stopOrder: 3,
        status: "delivered"
      }
    ]
  }

}